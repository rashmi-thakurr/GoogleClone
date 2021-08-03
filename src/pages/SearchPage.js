import React from 'react';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import Search from './components/Search';
import SerachIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    //https://developers.google.com/custom-search/v1/using_rest

    //https://cse.google.com/cse/create/new

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage_header_body">
                    <Search hideButtons />
                    <div className="search_page_options">
                        <div className="search_page_optionsLeft">
                            <div className="search_page_option">
                                <SerachIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="search_page_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="search_page_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="search_page_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="search_page_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="search_page_option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className="search_page_optionsRight">
                            <div className="search_page_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="search_page_option">
                                <Link to="/tools">tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a className="searchPage_resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
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
    )
}

export default SearchPage
