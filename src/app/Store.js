const { configureStore } = require("@reduxjs/toolkit");
const UserReducer = require("../features/UserSlice").default;
const TodoSlice = require("../features/TodoSlice").default;
const thunk = require("redux-thunk").default;

const store = configureStore({
    reducer: {
        users: UserReducer,
        todo: TodoSlice
    },
    middleware: [thunk],
});



module.exports = {
    store: store,
    RootState: store.getState(),
    AppDispatch: store.dispatch
};