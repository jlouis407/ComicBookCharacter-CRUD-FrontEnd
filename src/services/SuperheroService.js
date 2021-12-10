import axios from 'axios';

const SUPERHERO_API_BASE_URL = "http://localhost:8080/api/v1/superheroes";

class SuperheroService {

    getSuperheroes(){
        return axios.get(SUPERHERO_API_BASE_URL);
    }

    createSuperhero(superhero){
        return axios.post(SUPERHERO_API_BASE_URL, superhero);
    }

    getSuperheroById(superheroId){
        return axios.get(SUPERHERO_API_BASE_URL + '/' + superheroId);
    }

    updateSuperhero(superhero, superheroId){
        return axios.put(SUPERHERO_API_BASE_URL + '/' + superheroId, superhero);
    }

    deleteSuperhero(superheroId){
        return axios.delete(SUPERHERO_API_BASE_URL + '/' + superheroId);
    }

}

export default new SuperheroService();