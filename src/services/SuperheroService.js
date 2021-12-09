import axios from 'axios';

const SUPERHERO_API_BASE_URL = "http://localhost:8080/api/v1/superheroes";

class SuperheroService {

    getSuperheroes(){
        return axios.get(SUPERHERO_API_BASE_URL);
    }

}

export default new SuperheroService();