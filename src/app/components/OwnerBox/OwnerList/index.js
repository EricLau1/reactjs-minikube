import React from 'react';
import { Table, Button } from 'reactstrap';
import { UserLockIcon } from '../../Icons';

export class OwnerList extends React.Component {


    render() {
        const { owners } = this.props;
        return (
            <div>
                {owners? <Table className="table-bordered text-center rounded">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Block</th>
                </tr>
            </thead>
            <tbody>
                {
                    owners.map(owner => (
                        <tr key={owner.id}>
                            <td>{owner.first_name} {owner.last_name}</td>
                            <td>{owner.email}</td>
                            <td  >
                                <Button outline color="danger" block onClick={e => this.props.callbackBlock(owner.id)}>
                                    <UserLockIcon  />
                                </Button>
                                
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>: 'No Owners...'}
            </div>
        );
    }
}