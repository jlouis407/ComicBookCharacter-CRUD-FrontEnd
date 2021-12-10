import React, { Component } from 'react';

class CreateSuperheroComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            brand: '',
            year: '',
            status: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveSuperhero = this.saveSuperhero.bind(this);
    }

    saveSuperhero = (e) => {
        e.preventDefault();
        let superhero = {name: this.state.name, brand: this.state.brand, year: this.state.year, status: this.state.status};
        console.log('superhero => ' + JSON.stringify(superhero));
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



    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Superhero</h3>
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
                                        <input placeholder="Status" name = "status" className="form-control"
                                               value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveSuperhero}>Save</button>
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
