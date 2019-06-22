export default (state = 0, action) => {
    console.log(action);
    // 默认0
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1 
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}