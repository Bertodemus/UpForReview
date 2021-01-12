import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card float-left">
      <div className="img-container">
        <img alt={props.firstName} src={props.image} />
      </div>
      <div className="content">
            <strong>Name:</strong> {props.firstName} {props.lastName}
      </div>
    </div>
  );
}

export default FriendCard;
