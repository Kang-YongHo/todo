import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        headerText: '할 일',
        todoItems: storage.fetch()
    },
    mutations: {
        addSingleItem(state, todoItem) {
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeSingleItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleSingleItem(state, payload) {
            let i = payload.i;
            let t = payload.t;
            state.todoItems[i].completed = !state.todoItems[i].completed;
            localStorage.removeItem(t.item);
            localStorage.setItem(t.item, JSON.stringify(t));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});