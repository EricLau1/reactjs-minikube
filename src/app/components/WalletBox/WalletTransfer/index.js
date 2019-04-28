import React from 'react';
import { 
    Form, FormGroup, Label, Input, FormText, Button
 } from 'reactstrap';

 import { HandHoldingUsdIcon } from '../../../components/Icons';

export default class WalletTransfer extends React.Component {

    state = {
        transfer: {
            origin: {
                public_key: '',
                isValid: false,
            },
            target: {
                public_key: '',
                isValid: false,
            },
            amount: {
                value: 0.0,
                isValid: false,
            }
        }
    };

    setTransfer = (e, field) => {
        const { transfer } = this.state;
        if(field === 'origin' || field === 'target') {
            transfer[field].public_key = e.target.value;
            transfer[field].isValid = true;
        } else {
            transfer[field].value = e.target.value;
            if (e.target.value > 1) transfer[field].isValid = true;
        }
        this.setState({ transfer });
    }

    isValid = (transfer) => {
        if(transfer.origin.isValid && transfer.target.isValid && transfer.amount.isValid) {
            return true;
        }
        return false;
    } 

    go = () => {
        const { transfer } = this.state;
        if(this.isValid(transfer)) {
            this.props.callbackTransfer(transfer, true);
            return;
        }
        this.props.callbackTransfer({}, false);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="origin">Public key of the <strong> Origin </strong> wallet</Label>
                    <Input valid={this.state.transfer.origin.isValid} 
                           invalid={!this.state.transfer.origin.isValid} 
                           onChange={e => this.setTransfer(e, 'origin')}/>
                </FormGroup>
                <FormGroup>
                    <Label for="target">Public key of the <strong>Target</strong> wallet</Label>
                    <Input valid={this.state.transfer.target.isValid} 
                           invalid={!this.state.transfer.target.isValid}
                           onChange={e => this.setTransfer(e, 'target')}/>
                </FormGroup>

                <FormGroup>
                    <Label for="amount">Transfer Amount</Label>
                    <Input valid={this.state.transfer.amount.isValid} 
                           invalid={!this.state.transfer.amount.isValid}
                           placeholder="$ 0.00"
                           onChange={e => this.setTransfer(e, 'amount')}/>
                    <FormText></FormText>
                </FormGroup>
                <Button type="button" color="info" block onClick={e => this.go()}> Transfer <HandHoldingUsdIcon /> </Button>
            </Form>
        );
    }
}