import React from 'react';
import ReactDom from 'react-dom';
import {GroceryItemList} from './components/GroceryItemList.jsx'
import groceryItemStore from './stores/GroceryItemStore.jsx'

console.log("rendering main.jsx");

let initial = groceryItemStore.getItems();
let render = () => ReactDom.render(<GroceryItemList items={initial}/>,document.getElementById("App"));
groceryItemStore.onChange((items)=>{
    initial = items;
    render();
});
render();
