import React from "react";
import "./SearchPage.css";

import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

import Search from "../components/Search";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <h1>Avinash</h1>
        </Link>
        <div className="searchPage_headerBody">
          <Search></Search>
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon></SearchIcon>
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon></ImageIcon>
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon></LocalOfferIcon>
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon></RoomIcon>
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    ></img>
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
