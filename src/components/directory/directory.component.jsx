import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {withRouter} from 'react-router-dom'
import './directory.styles.scss';
import { connect } from 'react-redux';

const Directory = ({homeItems:{sections}}) => {

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
}


const mapStateToProps = ({homeItems}) => ({
  homeItems
})

export default withRouter(connect(mapStateToProps)(Directory));
