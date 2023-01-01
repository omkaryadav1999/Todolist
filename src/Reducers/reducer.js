const initialState = {
    list: []
};

const Todo = (state = initialState, action) => {
    console.log(state.list)
    switch (action.type) {
        case "addtodo":
            const { id, data } = action.paylod
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "removetodo":

            return {
                list: state.list.filter((value, index) => {
                    return action.data !== index
                })
            }
        default:
            return state
    }
}

export default Todo

