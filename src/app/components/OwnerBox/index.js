import React, { Component } from 'react';
import OwnerService from '../../services/owners';
import { OwnerList } from './OwnerList';
import { Button, Alert } from 'reactstrap';
import OwnerForm from './OwnerForm';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';

export default class OwnerBox extends Component {

    baseUrl = 'http://localhost:9000/owners'

    state = {
        owners: {
            data: [],
            current_page: 1,
            pages: 1
        },
        message: {
            alert: '',
            text: ''
        }
    };

    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        OwnerService.list(this.state.owners.current_page, owners => this.setState({ owners }) );
    }

    prev = () => {
        let { owners } = this.state;
        if(owners.current_page > 1) {
            owners.current_page -= 1; 
            this.setState({ owners });
            this.refresh();   
        }
    }

    next = () => {
        let { owners } = this.state;
        if(owners.current_page < owners.pages) {
            owners.current_page += 1; 
            this.setState({ owners });
            this.refresh();
        }
    }

    save = (owner) => {
        OwnerService.save(owner, response => {
            if(!response.hasError) {
                this.refresh();
                this.setState({ message: { alert: 'success', text:  response.message} });
                console.log(this.state);
            } else {
                this.setState({ message: { alert: 'danger', text: response.message } });
                console.log(this.state);
            }
        });
    }

    block = (id) => {
        OwnerService.disable(id, rows => {
            if(rows > 0) {
                console.log(rows);
                this.refresh();
            }
        });
    }

    render() {
        const { owners, message } = this.state;
        return (
            <div >
                { message.text !== '' && <Alert className="text-center" color={message.alert}> {message.text.toLocaleLowerCase()} </Alert> }
                <div className="row">
                    <div className="col-md-6 my-2">
                        <OwnerForm callbackSave={this.save} />
                    </div>
                    <div className="col-md-6 my-2 table-responsive">
                        <div className="text-right">
                            <Button outline color="dark" className="mr-2" size="sm" onClick={e => this.prev()}>
                                <ArrowLeftIcon />
                            </Button>
                            <Button outline color="dark" size="sm" onClick={e => this.next()}>
                                <ArrowRightIcon />
                            </Button>
                        </div>
                        <OwnerList owners={owners.data} callbackBlock={this.block} />
                    </div>
                </div>
            </div>
        );
    }
}