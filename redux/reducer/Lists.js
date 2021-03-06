const initialState ={
    fetching: false,
    fetched: false,
    error: null,
    list:[]
}

const Lists = (state = initialState, action)=> {
    switch (action.type) {
        case "FETCH_LIST_PENDING":
            return{...state, fetching:true}
        case "FETCH_LIST_FULFILLED":
            return { ...state, fetching:false, fetched:true,list:action.payload.data }
        case "FETCH_LIST_REJECTED":
            return { ...state, fetching: false, error:action.payload }

        case "CREATE_LIST_PENDING":
            return { ...state, fetching: true }
        case "CREATE_LIST_FULFILLED":
            return { ...state, fetching: false, fetched: true, list: [...state.list, action.payload.data] }
        case "CREATE_LIST_REJECTED":
            return { ...state, fetching: false, error: action.payload }

        case "DELETE_LIST_PENDING":
            return { ...state, fetching: true }
        case "DELETE_LIST_FULFILLED":
            console.log('DATA', action.payload.data)
            const newListAfterDelete = state.list.filter(lists => lists._id != action.payload.data._id)
            return { ...state, fetching: false, fetched: true, list: newListAfterDelete }
        case "DELETE_LIST_REJECTED":
            return { ...state, fetching: false, error: action.payload }
        default:
            return state
    }
}

export default Lists