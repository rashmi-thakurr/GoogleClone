import React, { useState } from 'react';
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import { useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Search({ hideButtons = false }) {
    const [state, dispatch] = useStateValue();
    const [input, setinput] = useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/searchpage');
    }
    return (
        <form className="search">
            <div className='search_input'>
                <SearchIcon className="search_input_icon" />
                <input value={input} onChange={e => setinput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ):(
                <div className="search_buttons_hidden">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            )}
           
        </form>
    )
}

export default Search
