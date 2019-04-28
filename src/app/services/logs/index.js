export class LogService {

    static baseUrl = 'http://localhost:9000/logs';

    static list = (page = 1, callback) => {
        fetch(`${this.baseUrl}?page=${page}`)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(e => console.log(e));
    }

}