//  ALL ACTIVE COMPLETED 三个状态切换

export default (state = 'ALL', action) => {
    // 三种情况之一才能改变type
    if (['ALL', 'ACTIVE', 'COMPLETED'].includes(action.type)) {
        return action.type;
    }
    return state;
}