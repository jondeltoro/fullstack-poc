import dispatcher from '../dispatcher.js';

let dispatch = {
  add(item){
      dispatcher.dispatch({
          payload:item,
          type:'grocery-item:add'
      });
  },

};

export default dispatch;