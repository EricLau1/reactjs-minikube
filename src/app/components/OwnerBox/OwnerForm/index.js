import React from 'react';
import {
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import genders from './genders';
import { SaveIcon } from '../../Icons';

export default class OwnerForm extends React.Component {

    state = {
        model: {
            id: 0,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            status: 1,
            gender: ''
        },
    };

    save = () => {
        this.reset();
        this.props.callbackSave(this.state.model);
    }

    reset = () => {
        this.setState({ model: {
            id: 0,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            status: 1,
            gender: ''
        } });
    }

    changeValue = (e, field) => {
        let { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    }

    render() {
        let { model } = this.state; 
        return (
            <Form action="" method="post" >

                <FormGroup>
                    <Label>First Name:</Label>
                    <Input 
                    type="text" 
                    name="first_name"
                    value={model.first_name}
                    onChange={e => this.changeValue(e, 'first_name')} />
                </FormGroup>

                <FormGroup>
                    <Label>Last Name:</Label>
                    <Input type="text" name="last_name"
                    value={model.last_name}
                    onChange={e => this.changeValue(e, 'last_name')} />
                </FormGroup>

                <FormGroup>
                    <Label>E-mail:</Label>
                    <Input type="email" name="email"
                    value={model.email}
                    onChange={e => this.changeValue(e, 'email')} />
                </FormGroup>

                <FormGroup>
                    <Label>Password:</Label>
                    <Input type="password" name="password" 
                    value={model.password}
                    onChange={e => this.changeValue(e, 'password')} />
                </FormGroup>

                <FormGroup>
                    <Label>Gender:</Label>
                    <Input type="select" name="gender" 
                    value={model.gender}
                    onChange={e => this.changeValue(e, 'gender')}>
                        <option value="">Select</option>
                        {
                            genders.map(gender => <option key={gender.value} value={gender.value}>{gender.text}</option>)
                        }
                    </Input>
                </FormGroup>

                <Button type="button" onClick={e => this.save()} color="dark" block> Save <SaveIcon /> </Button>
            </Form>
        );
    }
}