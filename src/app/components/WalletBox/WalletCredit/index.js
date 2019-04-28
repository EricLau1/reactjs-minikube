import React from 'react';
import { Input, Table, Button } from 'reactstrap';
import { WalletIcon, CoinsIcon, UserAltIcon, CloseCircleIcon } from '../../../components/Icons';

export default class WalletCredit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            public_key: this.props.wallet.public_key,
            cash: 0.0,
        };
    }

    add = () => {
        this.props.add(this.state);
    }

    render() {
        return (
            <div className="text-left">
                <div className="table-responsive">
                    <small>
                        <Table className="table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <td>
                                        <UserAltIcon /> {this.props.wallet.owner.first_name} {this.props.wallet.owner.last_name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <WalletIcon /> {this.props.wallet.public_key}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <CoinsIcon /> {this.props.wallet.cash}
                                    </td>
                                </tr>
                                <tr>
                                   <td>
                                   <Button outline color="danger" size="sm" onClick={e => this.props.closeCredit()}> Remove <CloseCircleIcon /></Button>
                                   </td>
                                </tr>
                            </tbody>
                        </Table>
                    </small>
                </div>
                <Input 
                    type="text"
                    value={this.state.cash}
                    onChange={e => this.setState({ cash: e.target.value })}
                    placeholder="$ 0.00"
                />
                <div className="my-2">
                    <Button outline color="success" block onClick={e => this.add()}>Add Cash</Button>
                </div>
            </div>
        );
    }
}