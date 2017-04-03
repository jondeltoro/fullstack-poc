import dispatcher from '../dispatcher';

class GroceryItemStore {
    constructor(){
        let items = [{
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
        let listeners = [];
        this.getItems = () => items;
        this.onChange = (listener) => listeners.push(listener)
        let triggerListeners = () =>
            listeners.forEach(
                (listener)=>listener(items)
            );

        let addGroceryItem = (item) => {
            items.push(item);
            triggerListeners();
        };

        dispatcher.register(
            (event)=> {
                let split = event.type.split(':');
                if(split[0]==='grocery-item'){
                    switch(split[1]){
                        case 'add':
                            addGroceryItem(event.payload);
                            break;
                    }
                }
            }

        );
    }
    getItems(){
        return this.getItems();
    }
    onChange(){
        return this.onChange();
    }
}

export default new GroceryItemStore();