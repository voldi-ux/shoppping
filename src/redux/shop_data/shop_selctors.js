import { createSelector} from 'reselect'

// const ID = {
//     hats: 1,
//     sneakers:2,
//     jacket:3,
//     womens: 4,
//     mens:5
// }

const SelectShopData = state => (state)

export const SelectShopItems = createSelector(
    SelectShopData,
    data => {
      return  data.collections}
)

export const selectPreviewItems = createSelector(
    SelectShopItems,
    ({collections}) => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectIsFetching = createSelector(
    SelectShopItems,
    data => data.isFetching
)

export const selecteIsCollectionLoaded = createSelector(
    SelectShopItems,
    ({collections}) => !!collections
)

export const selectCatogry = urlParam => createSelector(
    SelectShopItems,
    (ShopCollections) =>{
       return ShopCollections.collections ? ShopCollections.collections[urlParam] : null}
)