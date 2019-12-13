import React, {Component, useState} from 'react';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';
import * as itemActions from '../store/items/actions';
import * as authActions from '../store/authorization/actions';
import * as routerActions from '../store/router/actions';
import * as routerTypes from '../store/router/routerConstants';
import * as itemsSelector from '../store/items/reducer';

class ItemScreen extends Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            items: [],
            needUpdate: false,
            showAddItem: false
        }
    }

    componentDidMount() {
        this.props.dispatch(itemActions.getItems());
    }

    componentDidUpdate(prevProps) {
        if (this.props.needUpdate === true) {
            this.props.dispatch(itemActions.getItems());
            this.props.dispatch(itemActions.setNeedUpdate(false));
        }
    }

    render() {
        return this.getList();
    }


    getList() {
        let items = this.props.items;
        const deleteItem = item => {
            this.setState({items: this.props.items});
            this.props.dispatch(itemActions.deleteItem(item.id));
        };

        const decreaseItem = item => {
            this.setState({items: this.props.items});
            this.props.dispatch(itemActions.decreaseItem(item.id));
        };

        const addItem = () => {
            this.setState({showAddItem: !this.state.showAddItem})
        };

        const signOut = () => {
            this.props.dispatch(routerActions.setWindow(routerTypes.AUTHORIZATION));
        };

        return (
            <div>
                <ul>
                    <button style={{float: 'left'}} onClick={() => signOut()}>Sign out</button>
                    <h3>Items</h3>
                    {items.map(item => (
                        <li key={item.id}>
                            name: {item.name}&nbsp;&nbsp;
                            type: {item.type}&nbsp;&nbsp;
                            price: {item.price}&nbsp;&nbsp;
                            amount: {item.amount}&nbsp;&nbsp;
                            <button type="button" onClick={() => decreaseItem(item)}>
                                Decrease
                            </button>
                            <button type="button" onClick={() => deleteItem(item)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={() => addItem()}>
                    {this.state.showAddItem ? "Close menu" : "Add item"}
                </button>
                {this.state.showAddItem ? <AddItem callback={(item) => {
                    this.props.dispatch(itemActions.addItem(item));
                }}/> : null}
            </div>
        );
    };
}

class AddItem extends Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            name: '',
            type: '',
            price: '',
            amount: ''
        }
    }

    render() {
        return (
            <div className="TopicsScreen">
                <h3>Authorize</h3>
                <div>
                    Name: &nbsp;&nbsp;
                    <input type="text" onChange={this.updateName}/>
                </div>
                <div>
                    Type: &nbsp;&nbsp;
                    <input type="text" onChange={this.updateType}/>
                </div>
                <div>
                    Price: &nbsp;&nbsp;
                    <input type="text" onChange={this.updatePrice}/>
                </div>
                <div>
                    Amount: &nbsp;&nbsp;
                    <input type="text" onChange={this.updateAmount}/>
                </div>
                <input type="submit" onClick={this.onAddSubmit}/>
            </div>
        );
    }

    updateName(event) {
        this.setState({name: event.target.value})
    }

    updateType(event) {
        this.setState({type: event.target.value})
    }

    updatePrice(event) {
        this.setState({price: event.target.value})
    }

    updateAmount(event) {
        this.setState({amount: event.target.value})
    }

    onAddSubmit() {
        this.props.callback(
            {
                name: this.state.name,
                type: this.state.type,
                price: this.state.price,
                amount: this.state.amount
            });
    }

}

function mapStateToProps(state) {
    return {
        showAddItem: false,
        items: itemsSelector.getItems(state),
        needUpdate: itemsSelector.isNeedUpdate(state)
    };
}

export default connect(mapStateToProps)(ItemScreen);