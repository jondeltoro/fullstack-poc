import guid from 'guid';

let listeners = new Map();

let register = function(cb){
    let id = guid.raw();
    listeners.set(id, cb);
    return id;
};

let dispatch = function(payload){
    console.log("Dispatching...",payload);
    for(let [id,listener] of listeners){
        listener(payload);
    }
};

export default {register, dispatch};