import React ,{useState,useEffect }from "react";
import CollectionOverviewContainer from '../../components/collection_overview/collection_overview_container'
import { Route } from "react-router-dom";
import CollectionPageContainer from '../collection_page/collection_page_conatiner'
import { connect } from "react-redux";
import { fetchStart } from "../../redux/shop_data/shop_Actions";


//must use compse to compose the components

const ShopPage = ({match,fetchCollectionsStart}) => {
       useEffect(() => {
            fetchCollectionsStart()
       },[fetchCollectionsStart])
   
  return  (
    <div>
      <div>
        <Route  exact path={match.path} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:id`} component={CollectionPageContainer} />
      </div>
    </div>
  );
}

// const ShopPage = ({match,collections}) => {

//   return (
//     <div>
//       <div>
//         <Route  exact path={match.path} component={CollectionsOveriew} />
//         <Route path={`${match.path}/:id`}  component={CollectionPage}/>
//       </div>
//     </div>
//   );
// };

const mapDispatchToprops = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchStart())
})


export default connect(null,mapDispatchToprops)(ShopPage);
