class OwnerService {

    static baseUrl = 'http://localhost:9000/owners';

    static list = (page = 1, callback) => {
        fetch(`${this.baseUrl}?page=${page}`)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(e => console.log(e));
    }

    static save = (owner, callback) => {
        fetch(this.baseUrl, { method: 'POST', body: JSON.stringify(owner), headers: new Headers({'Content-Type': 'application/json'}) })
        .then(response => {
            if(response.ok) { 
                return response.json();
            }
            throw response;
        })
        .then(json => {
            callback({ hasError: false, message: 'Saved Successfully' });
            return json;
        })
        .catch(error => error.json()
            .then(message => {
                callback({ hasError: true, message: message })
            }));
    }

    static disable = (id, callback) => {
        fetch(`${this.baseUrl}/${id}?disable=true`, { method: 'PUT'})
        .then(response => response.json())
        .then(json => {
            callback(json);
            return json;
        });
    }
}


export default OwnerService;