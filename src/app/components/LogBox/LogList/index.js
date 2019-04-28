import React from 'react';
import { Table } from 'reactstrap';
export default class LogList extends React.Component {

    showDate = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric', 
            month: '2-digit',
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit'})
            .format(new Date(timestamp));
    }

    render() {
        const { logs } = this.props;
        console.log(logs);
        return (
            <div>
                {logs?<Table className="table-bordered text-center" dark>
                <thead>
                    <tr>
                        <th>Wallet Origin</th>
                        <th>Wallet Target</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        logs.map(log => (
                            <tr key={log.id}>
                                <td className="text-danger align-middle"># { log.wallet_origin_id }</td>
                                <td className="text-primary align-middle"># { log.wallet_target_id }</td>
                                <td className="text-info align-middle">{ log.description }</td>
                                <td className="text-success align-middle">$ {log.amount}</td>
                                <td className="text-warning align-middle">{ this.showDate(log.created_at) }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>: 'No Logs...'}
            </div>
        );
    }
}