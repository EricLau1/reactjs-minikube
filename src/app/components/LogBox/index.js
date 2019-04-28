import React from 'react';
import { LogService } from '../../services/logs';
import LogList from './LogList';
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/Icons';
import { Button } from 'reactstrap';

export default class LogBox extends React.Component {

    state = {
        logs: {
            data: [],
            current_page: 1,
            pages: 1,
        },
    };

    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        LogService.list(this.state.logs.current_page, logs => this.setState({ logs }));
    }

    prev = () => {
        let { logs } = this.state;
        if(logs.current_page > 1) {
            logs.current_page -= 1; 
            this.setState({ logs });
            this.refresh();   
        }
    }

    next = () => {
        let { logs } = this.state;
        if(logs.current_page < logs.pages) {
            logs.current_page += 1; 
            this.setState({ logs });
            this.refresh();
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-md-12 table-responsive">
                        <div className="text-right">
                            <Button outline color="dark" className="mr-2" size="sm" onClick={e => this.prev()}>
                                <ArrowLeftIcon />
                            </Button>
                            <Button outline color="dark" size="sm" onClick={e => this.next()}>
                                <ArrowRightIcon />
                            </Button>
                        </div>
                    <LogList logs={this.state.logs.data} />
                </div>
            </div>
        );
    }
}