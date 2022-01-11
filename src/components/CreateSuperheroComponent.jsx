import React, { Component } from 'react';
import SuperheroService from '../services/SuperheroService';

class CreateSuperheroComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            brand: '',
            year: '',
            status: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveOrUpdateSuperhero = this.saveOrUpdateSuperhero.bind(this);
    }

    componentDidMount(){

        if(this.state.id == '_add'){
            return
        } else {
            SuperheroService.getSuperheroById(this.state.id).then((res) => {
                let superhero = res.data;
                this.setState({name: superhero.name, 
                    brand: superhero.brand, 
                    year: superhero.year, 
                    status: superhero.status})
            });
        }
    }


    saveOrUpdateSuperhero = (e) => {
        e.preventDefault();
        let superhero = {name: this.state.name, brand: this.state.brand, year: this.state.year, status: this.state.status};
        console.log('superhero => ' + JSON.stringify(superhero));

        if(this.state.id == '_add'){
            SuperheroService.createSuperhero(superhero).then(res => {
                this.props.history.push('/superheroes');
            });
        } else {
            SuperheroService.updateSuperhero(superhero, this.state.id).then(res => {
                this.props.history.push('/superheroes');
            });
        }

        
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeBrandHandler = (event) => {
        this.setState({brand: event.target.value});
    }

    changeYearHandler = (event) => {
        this.setState({year: event.target.value});
    }

    changeStatusHandler = (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/superheroes');
    }

    getTitle(){
        if(this.state.id == '_add'){
            return <h3 className = "text-center">Add Superhero</h3>
        } else {
            return <h3 className = "text-center">Update Superhero</h3>
        }
    }

    render() {
        return (
            <div>
                <div style={{paddingTop: "25px"}} className = "container">
                    <div className = "row">
                        <div style={{paddingTop: "15px"}} className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name = "name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Brand: </label>
                                        <input placeholder="Brand" name = "brand" className="form-control"
                                               value={this.state.brand} onChange={this.changeBrandHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Year: </label>
                                        <input placeholder="Year" name = "year" className="form-control"
                                               value={this.state.year} onChange={this.changeYearHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Status: </label>
                                        <select name = "status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler}>
                                            <option value="ALIVE">ALIVE</option>
                                            <option value="DECEASED">DECEASED</option>
                                            <option value="UNKNOWN">UNKNOWN</option>
                                        </select>

                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateSuperhero}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSuperheroComponent;
