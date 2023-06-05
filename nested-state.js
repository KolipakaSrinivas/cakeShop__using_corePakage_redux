import redux from 'redux'
import {legacy_createStore} from 'redux'
const createStore = legacy_createStore


const UPDATE_HOMENO   = 'UPDATE_HOMENO'



const instalUserState = {
    user:'srinivas',
    address:{
        HomeNo:'9-66',
        city:'hyderbad',
        state:'teleangana'
    }
}


function upDataeHomeNO(homeNo) {
    return {
        type:UPDATE_HOMENO,
        playload:homeNo
    }
}


function reduser(state = instalUserState,action) {
    switch(action.type) {
        case UPDATE_HOMENO:
            return {
                ...state,
                address : {
                    ...state.address,
                    HomeNo:action.playload
                }
            }
        default:
            return state

    }
}
 
const store =  createStore(reduser)
console.log("InstalState",store.getState())

const unscribe = store.subscribe(()=>console.log("UpDateState" , store.getState()))

store.dispatch(upDataeHomeNO('9-152'))




unscribe()
