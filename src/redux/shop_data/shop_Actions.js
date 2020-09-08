import types from './shop_types'
 
 
export const fetchStart = () => ({
    type:types.FETCH_COLLECTIONS_START
})

const fetchFails = (message) => ({
    type:types.FETCH_COLLECTIONS_FAIL,
    payload: message
})

export const UpdatedShopCollections = collections => ({
    type:types.FETCH_COLLECTIONS_SUCCECCED,
    payload:collections
})

// export const getCollectionsAsync = () => {
//     return dispatch => {
//         dispatch(fetchStart())
//         fetch('http://localhost:4000/shopcollection').then(resp => resp.json()).then(data => {
//             dispatch(UpdatedShopCollections(data))
//           }).catch(err => {
//               dispatch(fetchFails(err.message))
//           })
//     }
// }