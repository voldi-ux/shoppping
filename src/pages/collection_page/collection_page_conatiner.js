import React from 'react'
import CollectionPage from './collection_page'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { WithSpinner } from '../../components/withSpinner/withspinner'
import { selecteIsCollectionLoaded } from '../../redux/shop_data/shop_selctors'



const mapStateToProps = state => ({
    isloading: (() => !selecteIsCollectionLoaded(state))()
})


const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner )(CollectionPage)


export default CollectionPageContainer