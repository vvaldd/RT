import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
} from '../action-types'

const incAction = () => ({ type: INC })
const incCustomAction = (payload) => ({ type: INC_CUSTOM, payload })
const decAction = () => ({ type: DEC })
const resetAction = () => ({ type: RESET })

export {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
}