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
    
        let user = Object.values(this.props.users);

        return(
            <div className="search-menu">
                <div className="search-bar">
                    <input type="text" placeholder="Search.." value={this.state.search} onChange={this.handleSearch}></input>
                    <button type="submit"><i>🔍</i></button>
                </div>
                <ul className="search-results"
                    style={{
                        display: this.state.search === "" ? 'none' : 'block'
                    }}>

                {user.filter(user => user.first_name.toUpperCase().startsWith(this.state.search.toUpperCase()) || user.last_name.toUpperCase().startsWith(this.state.search.toUpperCase())).map(result => <li>{result.first_name} {result.last_name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Search