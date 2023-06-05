const {legacy_createStore  } = require('redux')

const createStore = legacy_createStore


const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const initialState = {
    numOfCakes : 10
}


function cakeOrdered(quantity) {
    return {
        type : CAKE_ORDERED,
        payload :quantity
    }
}

function cakeReStocked(quantity = 1) {
    return {
        type : CAKE_RESTOCKED,
        payload : quantity
    }
}


const  reducer = (state = initialState , action ) => {
    switch(action.type) {
        case CAKE_ORDERED :
            return  {
                ...state,
                numOfCakes : state.numOfCakes -1
            }
        case CAKE_RESTOCKED :
            return {
                ...state,
                numOfCakes : state.numOfCakes += action.payload
            }
        default:
            return state
    }
} 

const store = createStore(reducer)

console.log('initialState',store.getState())

const unsubscribe =  store.subscribe(()=>{
    console.log("updata State", store.getState())
})
store.dispatch(cakeOrdered(2))
store.dispatch(cakeOrdered())
store.dispatch(cakeReStocked(10))

unsubscribe()
