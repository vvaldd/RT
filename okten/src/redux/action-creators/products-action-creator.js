import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
} from '../action-types'

const startProductsAction = () => ({ type: START_PRODUCTS_LOADING })
const endProductsAction = () => ({ type: END_PRODUCTS_LOADING })
const setProductsAction = (payload) => ({ type: SET_PRODUCTS, payload })

const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startProductsAction())
        const resp = await fetch('https://fakestoreapi.com/products');
        const json = await resp.json();
        dispatch(setProductsAction(json));

    } catch (e) {
        console.error(e);

    } finally {
        dispatch(endProductsAction());
    }
}

export {
    startProductsAction,
    endProductsAction,
    setProductsAction,
    loadProducts,
}