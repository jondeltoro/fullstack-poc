import React from 'react';
import actions from './../actions/GroceryItemActionCreator.jsx';

class GroceryItem extends React.Component
{
    constructor(){
        super();
        this.delete = this.delete.bind(this);
        this.togglePurchased = this.togglePurchased.bind(this);
    }
    delete(e){
        e.preventDefault();
        actions.delete({name:this.props.item.name});
    }
    togglePurchased(e){
        e.preventDefault();
        if(this.props.item.purchased){
            actions.unbuy(this.props.item);
        } else {
            actions.buy(this.props.item);
        }

    }
    render(){
        return (
            <div className="grocery-item row">
                <div className="six columns">
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
                </div>
                <form className="three columns" onSubmit={this.togglePurchased}>
                    <button className={this.props.item.purchased ? "" : "button-primary"}>
                        {this.props.item.purchased ? "Unbuy" : "Buy"}

                    </button>
                </form>
                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
            </div>
        )
    }
}
export {GroceryItem};