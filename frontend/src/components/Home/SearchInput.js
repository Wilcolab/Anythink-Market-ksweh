import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import agent from "../../agent";
import { SEARCH_ITEMS } from "../../constants/actionTypes";


const SearchInput = (props) => {
    const { onSearch } = props;
    const [value, setValue ] = useState("");
    useSearchDispatch({ onSearch, value });

  return (
        <input onChange={(e) => setValue(e.currentTarget.value)} value={value} placeholder={"What is it that you truly desire?"}/>
  );
};

const useSearchDispatch = ({ onSearch, value, minChars = 3 }) => {
    function doSearchMaybe() {
        if (value && value.length && value.length >= minChars) {
            onSearch(value);
        }
    }

    useEffect(doSearchMaybe, [value, onSearch, minChars]);    
}

  
const mapDispatchToProps = (dispatch) => ({
    onSearch: (term) =>
            dispatch({ type: SEARCH_ITEMS, payload: agent.Items.byTitle(term) }),
});

const ConnectedSearchInput = connect(null, mapDispatchToProps)(SearchInput);

export default ConnectedSearchInput;


