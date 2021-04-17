import { ON_USERS_LOADED } from '../action-types'

const userAction = (payload) => ({type: ON_USERS_LOADED, payload })

export {
    userAction,
}