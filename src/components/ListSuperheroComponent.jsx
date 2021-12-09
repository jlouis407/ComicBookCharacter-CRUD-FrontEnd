import React, { Component } from 'react';
import SuperheroService from '../services/SuperheroService';

class ListSuperheroComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            superheroes: []
        }
    }

    componentDidMount(){
        SuperheroService.getSuperheroes().then((res) => {
            this.setState({ superheroes: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Superhero List</h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Brand</th>
                                <th>Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.superheroes.map (
                                    superhero =>
                                    <tr key = {superhero.id}>
                                        <td>{superhero.name}</td>
                                        <td>{superhero.status}</td>
                                        <td>{superhero.brand}</td>
                                        <td>{superhero.year}</td>
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