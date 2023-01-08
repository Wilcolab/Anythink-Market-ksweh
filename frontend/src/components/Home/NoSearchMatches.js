import React from "react";


const NoSearchMatches = (props) => {
    const { searchTerm } = props;    

  return (
        <p id="empty">{`:( No items found for '${searchTerm}'`}</p>
  );
};


export default NoSearchMatches;


