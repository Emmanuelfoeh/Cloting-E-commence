import React from "react";
import CollectionItem from "../Collections-Items/CollectionItem";
import "./CollectionPreview.scss";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemsprops }) => {
            return <CollectionItem key={id} {...itemsprops} />;
          })}
      </div>
    </div>
  );
};

export default CollectionsPreview;
