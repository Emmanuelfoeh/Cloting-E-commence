import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../Collections-Items/CollectionItem";
import "./CollectionPreview.scss";
import { useHistory, useRouteMatch } from "react-router";

const CollectionsPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div className="collection-preview">
      <Link to={`${match.url}/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>

      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
