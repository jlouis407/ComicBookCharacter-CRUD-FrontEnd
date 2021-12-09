import axios from 'axios';

const COMICBOOKCHAR_API_BASE_URL = "http://localhost:8080/api/v1/comicBookCharacters";

class ComicBookCharacterService {

    getComicBookCharacters(){
        return axios.get(COMICBOOKCHAR_API_BASE_URL);
    }

}

export default new ComicBookCharacterService();