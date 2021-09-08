import React from "react";
import "./MenuItem.style.scss";
// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const MenuItem = ({ title, imageUrl, size, history, match, linkURl }) => {
  // const history = useHistory();
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div
        className="content"
        onClick={() => history.push(`${match.url}${linkURl}`)}
      >
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
