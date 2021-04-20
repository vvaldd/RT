import { 
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
 } from '../action-types'

const startProductsAction = () => ({type: START_PRODUCTS_LOADING })
const endProductsAction = () => ({type: END_PRODUCTS_LOADING })
const setProductsAction = (payload) => ({type: SET_PRODUCTS, payload })

export {
    startProductsAction,
    endProductsAction,
    setProductsAction,
}