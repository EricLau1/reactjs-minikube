import React from 'react';
import { Table, Button } from 'reactstrap';
import { WalletIcon } from '../../Icons';
export default class WalletList extends React.Component {

    render() {
        const { wallets } = this.props;
        return (
            <div >
                {wallets? <Table className="table-bordered text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>Owner</th>
                            <th>Wallet Public Key</th>
                            <th>Cash</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wallets.map(wallet => (
                                <tr key={wallet.id}>
                                    <td className="align-middle">{wallet.owner.email}</td>
                                    <td className="align-middle">{wallet.public_key}</td>
                                    <td className="align-middle">${wallet.cash.toFixed(2)}</td>
                                    <td className="align-middle">
                                        <Button outline color="success" onClick={e => this.props.callbackCredit(wallet)}>
                                            <WalletIcon />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>: 'No Wallets...'}
            </div>
        );
    }
}