const { configureStore } = require("@reduxjs/toolkit");
const UserReducer = require("../features/UserSlice").default;
const TodoSlice = require("../features/TodoSlice").default;

const store = configureStore({
    reducer: {
        users: UserReducer,
        todo: TodoSlice
    }
});



module.exports = {
    store: store,
    RootState: store.getState(),
    AppDispatch: store.dispatch
};