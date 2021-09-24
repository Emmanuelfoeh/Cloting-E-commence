import React from "react";
import "./Shop.style.scss";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "../Collection Page/Collection";

const Shop = () => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <Collection />
      </Route>
    </div>
  );
};

export default Shop;
