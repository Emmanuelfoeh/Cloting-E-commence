import React from "react";
import "./overview.scss";
import CollectionsPreview from "../../components/Collections-preveiw/CollectionsPreview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../Redux/Shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...othercollectionprosp }) => (
        <CollectionsPreview key={id} {...othercollectionprosp} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
