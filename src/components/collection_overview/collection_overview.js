import React from 'react'
import {connect} from 'react-redux'

import { selectPreviewItems} from '../../redux/shop_data/shop_selctors'
import Preview from '../collection-preview/preview'

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
         {collections.map((collection) => {
          return (
            <Preview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          );
        })}
       </div>
    )
}

const mapStateToProps = state => ({
    collections: selectPreviewItems(state)
  });

export default connect(mapStateToProps)(CollectionOverview)