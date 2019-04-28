import React from 'react';
import WalletService from '../../services/wallets'
import WalletList from './WalletList';
import WalletCredit from './WalletCredit';
import WalletTransfer from './WalletTransfer';
import { Button, Alert } from 'reactstrap';
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/Icons';

export default class WalletBox extends React.Component {

    state = {
        wallets: {
            data: [],
            current_page: 1,
            pages: 1
        },
        selectedWallet: null,
        displayCredit: false,
        displayTransfer: false, 
        displayButton: true,
        message: {
            alert: '',
            text: ''
        }
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        WalletService.list(this.state.wallets.current_page, (wallets) => {
            this.setState({ wallets });
        });
    }

    clearMessage = (duration) => {
        setTimeout(() => {  
            this.setState({ message: { alert: '', text: '' } });
        }, duration);
    }

    prev = () => {
        let { wallets } = this.state;
        if(wallets.current_page > 1) {
            wallets.current_page -= 1; 
            this.setState({ wallets });
            this.refresh();   
        }
    }

    next = () => {
        let { wallets } = this.state;
        if(wallets.current_page < wallets.pages) {
            wallets.current_page += 1; 
            this.setState({ wallets });
            this.refresh();
        }
    }

    add = (wallet) => {
        wallet.cash = parseFloat(wallet.cash);
        if(wallet.cash > 0) {
            WalletService.credit(wallet, response => {
                if(!response.hasError) {
                    this.setState({ message: { alert: 'success', text: response.message } })
                    this.refresh();
                    this.closeCredit();
                    this.clearMessage(5000);
                }
            });
        }

    }

    openCredit = () => {
        this.setState({ displayCredit: true, displayButton: false });
    }

    closeCredit = () => {
        this.setState({ displayCredit: false, displayButton: true });
    }

    onCredit = (wallet) => {
        this.setState({ selectedWallet: wallet });
        this.openCredit();
        this.closeTransfer();
    }

    onButton = () => {
        this.openTransfer();
        this.setState({ displayButton: !this.state.displayButton });
    }

    onTransfers = (wallets, ok) => {
        if(ok) {
            WalletService.transfer(wallets, response => {
                if(!response.hasError) {
                    this.setState({ message: { alert: 'info', text: response.message } })
                    this.refresh();
                    this.closeTransfer();
                    this.setState({ displayButton: !this.state.displayButton });
                    this.clearMessage(10000);
                    return;
                } else {
                    this.setState({ message: { alert: 'danger', text: response.message } })
                    this.clearMessage(5000);
                }
            });
        } else {
            this.setState({ message: { alert: 'warning', text: 'Invalid Operation...' } });
            this.clearMessage(5000);
        }

    }

    isTransfer = () => {
        const { wallets } = this.state;   
        if(wallets.data && wallets.data.length > 1) { 
            return true;
        }
        return false;
    }

    openTransfer = () => {
        this.closeCredit();
        this.setState({ displayTransfer: true });
    }

    closeTransfer = () => {
        this.setState({ displayTransfer: false });
    }

    render() {
        return (
            <div>
                { this.state.message.text !== ''? <Alert className="text-center faded" color={this.state.message.alert}>{this.state.message.text}</Alert>: ''}
                <div className="row align-items-center justify-content-center">
                        
                        {
                            this.state.displayButton && <Button color="info" onClick={e => this.onButton()} disabled={!this.isTransfer()}>Make a Transfer</Button>
                        }


                        {
                            this.state.displayTransfer &&
                            <div className="col-md-6">
                                <WalletTransfer
                                    callbackTransfer={this.onTransfers} />
                            </div>
                        }

                        { this.state.displayCredit && 
                            <div className="col-md-6">
                                <WalletCredit 
                                    wallet={this.state.selectedWallet} 
                                    closeCredit={this.closeCredit} add={this.add} /> 
                            </div>
                        }


                </div>
                <hr className="my-4" />
                <div className="text-right">
                <Button outline color="dark" className="mr-2" size="sm" onClick={e => this.prev()}>
                    <ArrowLeftIcon />
                </Button>
                <Button outline color="dark" size="sm" onClick={e => this.next()}>
                    <ArrowRightIcon />
                </Button>
                </div>
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <WalletList 
                            wallets={this.state.wallets.data} 
                            callbackCredit={this.onCredit} />
                    </div>
                </div>
            </div>
        );
    }
}