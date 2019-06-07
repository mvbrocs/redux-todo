import React from "react";

function Link(props) {
  const Link = {
    active: <span>{props.children}</span>,
    notActive: <a href="#">{props.children}</a>
  };

  return props.isActive ? Link.active : Link.notActive;
}

export default Link;
