import React from 'react';
import {GroceryItem} from './GroceryItem.jsx';
import {GroceryListAddItem} from './GroceryListAddItem.jsx';

class GroceryItemList extends React.Component
{
    render(){
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {
                        this.props.items.map((item, index) => (
                            <GroceryItem key={index} item={item} />)
                        )
                    }
                </div>
                <GroceryListAddItem></GroceryListAddItem>
            </div>
        );
    }
}
export {GroceryItemList};