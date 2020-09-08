import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-preview/collection_item";
import { selectCatogry } from "../../redux/shop_data/shop_selctors";
import "./collecion_page.scss";

const CollectionPage = (props) => {
  return (
    <div className='catagory'>
      <h1>{props.catagory.title} </h1>
      <div  className='catagory-items'>
        {props.catagory.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStatetoProps = (state,ownProps) => ({
  catagory: selectCatogry(ownProps.match.params.id)(state),
});

export default connect(mapStatetoProps)(CollectionPage);
