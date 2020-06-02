import React from 'react';
import { NavLink } from 'react-router-dom';


class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }


    handleSearch(e) {
        e.preventDefault();
        this.setState({ search: e.currentTarget.value })
    }


    render() {
        return(
            <div className="search-menu">
                <div className="search-bar">
                    <input type="text" placeholder="Search.." value={this.state.search} onChange={this.handleSearch}></input>
                    <button type="submit"><i>🔍</i></button>
                </div>
                <ul className="search-results">
                    {/* style={{
                            display: this.state.search != "" ? 'block' : 'none'
                        }}> */}

                    <li>uno</li>
                    <li>dos</li>
                    <li>tres</li>
                    {/* {currentUser.received_friend_ids.length === 0 ? <li>No Requests</li> : <li>Friend Requests</li>}
                        {currentUser.received_friend_ids.map((friendId) => <li><FriendRequestContainer friendId={friendId} /></li>)} */}
                </ul>
            </div>
        )
    }
}

export default Search