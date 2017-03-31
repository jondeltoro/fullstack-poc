import React from 'react';

class GroceryItemList extends React.Component
{
    render(){
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {
                        this.props.items.map((item, index) => (<li key={index}>{item.name}</li>))
                    }
                </div>
            </div>
        );
    }
}
export {GroceryItemList};