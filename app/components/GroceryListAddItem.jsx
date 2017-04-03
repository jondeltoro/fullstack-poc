import React from 'react';
import action from '../actions/GroceryItemActionCreator.jsx';
class GroceryListAddItem extends React.Component
{
    constructor(){
        super();
        this.state = {
            input: ""
        };
        this.handleInputName = this.handleInputName.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    handleInputName(element){
         this.setState({input:element.target.value});
    }
    addItem(e){
        e.preventDefault();
        action.add({
            name:this.state.input
        });
        this.setState({input:''});
    }
    render(){
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputName}/>
                    <button>Add Item</button>

                </form>
            </div>
        );
    }
}
export {GroceryListAddItem};
