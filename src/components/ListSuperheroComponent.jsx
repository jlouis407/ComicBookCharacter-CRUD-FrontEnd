import React, { Component } from 'react';
import SuperheroService from '../services/SuperheroService';

class ListSuperheroComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            superheroes: []
        }

        this.addSuperhero = this.addSuperhero.bind(this);
        this.editSuperhero = this.editSuperhero.bind(this);
    }

    editSuperhero(id){
        this.props.history.push(`/update-superhero/${id}`);
    }

    componentDidMount(){
        SuperheroService.getSuperheroes().then((res) => {
            this.setState({ superheroes: res.data})
        });
    }

    addSuperhero(){
        this.props.history.push('/add-superhero');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Superhero List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSuperhero}>Add Superhero</button>
                </div>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Year</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.superheroes.map (
                                    superhero =>
                                    <tr key = {superhero.id}>
                                        <td>{superhero.name}</td>
                                        <td>{superhero.brand}</td>
                                        <td>{superhero.year}</td>
                                        <td>{superhero.status}</td>
                                        <td>
                                            <button onClick = { () => this.editSuperhero(superhero.id)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListSuperheroComponent;