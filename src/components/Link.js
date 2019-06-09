import React from "react";

function Link(props) {
  const linkStyle = {
    display: "inine-block",
    marginLeft: "10px",
    marginRight: "10px"
  };

  const handleClick = event => {
    event.preventDefault();
    props.onFilterClick(props.filter);
  };

  const LinkTag = {
    active: <span style={linkStyle}>{props.children}</span>,
    notActive: (
      <a href="#" style={linkStyle} onClick={handleClick}>
        {props.children}
      </a>
    )
  };

  return props.active ? LinkTag.active : LinkTag.notActive;
}

export default Link;
