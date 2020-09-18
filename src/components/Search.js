import React, { useState } from "react";
import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ showButtons }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("Search clicked");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon"></SearchIcon>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <MicIcon></MicIcon>
      </div>

      {showButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="buttons_hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Search
          </Button>
          <Button className="buttons_hidden" variant="outlined">
            I'm feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
