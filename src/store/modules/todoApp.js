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
const state = {
    headerText: '할 일',
    todoItems: storage.fetch()
}

const getters = {
    headerText(state){
        return state.headerText;
    },
    storedTodoItems(state){
        return state.todoItems;
    }
}

const mutations = {
    addSingleItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeSingleItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleSingleItem(state, payload){
        let i = payload.index;
        let t = payload.todoItem;
        state.todoItems[i].completed = !state.todoItems[i].completed;
        localStorage.removeItem(t.item);
        localStorage.setItem(t.item, JSON.stringify(t));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,getters,mutations
}