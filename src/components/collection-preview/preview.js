import React from 'react';
import CollectionItem from './collection_item'
import './preview.scss'
import { Link } from 'react-router-dom';

const Preview = ({title,items}) => (
   <div className='collection-preview'>
      <Link to={`/shop/${title.toLowerCase()}`}className='title'>
        {title.toUpperCase()}
      </Link>
       <div className='preview'>
           {items.filter((item,index) => index < 4 ).map(item => (
              <CollectionItem key={item.id} item={item} />
           ))}
       </div>
   </div>
)

export default Preview