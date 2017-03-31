import React from 'react';
import ReactDom from 'react-dom';
import {GroceryItemList} from './components/GroceryItemList.jsx'

console.log("rendering main.jsx");

let initial = [{
    name:"Ice Cream"
},{
    name:"Waffles",
},{
    name:"Candy",
    purchased:true
},{
    name:"Snacks",
}
];

ReactDom.render(<GroceryItemList items={initial}/>,document.getElementById("App"));

