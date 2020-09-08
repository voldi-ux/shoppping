import React from 'react'
import collectionOverview from './collection_overview'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectIsFetching } from '../../redux/shop_data/shop_selctors'
import {WithSpinner} from '../withSpinner/withspinner'
import { connect } from 'react-redux'

//the container pattern 


const mapStateToProps = createStructuredSelector(
    { isloading:selectIsFetching,
   }
)

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,  
)(collectionOverview)

export default CollectionOverviewContainer