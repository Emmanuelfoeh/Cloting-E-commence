import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectShopCollections } from "../../Redux/Shop/shop.selector";
import CollectionItem from "../../components/Collections-Items/CollectionItem";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";

const Collection = ({ collection }) => {
  const { collectionId } = useParams();
  const { title, items } = collection[collectionId];

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollections,
});
export default connect(mapStateToProps)(Collection);
