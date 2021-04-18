import { 
    ON_USERS_LOADED,
    ON_ADD_TO_BAD,
    ON_REMOVE_FROM_BAD,
 } from '../action-types'

const userAction = (payload) => ({type: ON_USERS_LOADED, payload })
const badAction = (payload) => ({type: ON_ADD_TO_BAD, payload })
const removeBadAction = (payload) => ({type: ON_REMOVE_FROM_BAD, payload })

export {
    userAction,
    badAction,
    removeBadAction,
}