// 往数组中加东西
// [
//     {
//         id: '',
//         text: '',
//         completed: ''
//     }
// ]

// 根据action类型改变state
export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                {
                    text: action.text , 
                    id: action.id,
                    completed: action.completed || false
                },
                ...state
            ]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (action.id === todo.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        default: 
            return state
    }
}