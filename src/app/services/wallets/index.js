export default class WalletService {

    static baseUrl = 'http://localhost:9000/wallets';

    static list = (page = 1, callback) => {
        fetch(`${this.baseUrl}?page=${page}`)
            .then(response => response.json())
            .then(json => callback(json))
            .catch(e => console.log(e));
    }

    static credit = (wallet, callback) => {
        fetch(this.baseUrl, { method: 'PUT', body: JSON.stringify(wallet), headers: new Headers({'Content-type': 'application/json'}) })
        .then(response => response.json())
        .then(json => callback({hasError: false, message: `Added $${wallet.cash} Credit Successfully!`}))
        .catch(e => console.log(e));
    }

    static transfer = (data, callback) => {
        let origin = {
            public_key: data.origin.public_key,
            cash: parseFloat(data.amount.value),
        };
        let target = data.target.public_key;
        fetch(`${this.baseUrl}/${target}`, { method: 'POST', body: JSON.stringify(origin), headers: new Headers({'Content-Type': 'application/json'}) })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => callback({hasError: false, message: json.description }))
        .catch(error => {
            error.json()
            .then(message => callback({hasError: true, message }));
        });
    }
}