import React, { Component } from 'react';
import ComicBookCharacterService from '../services/ComicBookCharacterService';

class ListComicBookCharacter extends Component {

    constructor(props){
        super(props)

        this.state = {
            comicBookCharacters: []
        }
    }

    componentDidMount(){
        ComicBookCharacterService.getComicBookCharacters().then((res) => {
            this.setState({ comicBookCharacters: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Comic Book Character List</h2>
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
                                this.state.comicBookCharacters.map (
                                    comicBookCharacter =>
                                    <tr key = {comicBookCharacter.id}>
                                        <td>{comicBookCharacter.name}</td>
                                        <td>{comicBookCharacter.status}</td>
                                        <td>{comicBookCharacter.brand}</td>
                                        <td>{comicBookCharacter.year}</td>
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

export default ListComicBookCharacter;