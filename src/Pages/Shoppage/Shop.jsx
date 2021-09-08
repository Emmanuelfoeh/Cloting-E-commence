import React, { useState } from "react";
import collections from "./Shopdata";
import "./Shop.style.scss";
import CollectionsPreview from "../../components/Collections-preveiw/CollectionsPreview";

const Shop = () => {
  const [collection, setCollection] = useState(collections);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...othercollectionprosp }) => (
        <CollectionsPreview key={id} {...othercollectionprosp} />
      ))}
    </div>
  );
};

export default Shop;
