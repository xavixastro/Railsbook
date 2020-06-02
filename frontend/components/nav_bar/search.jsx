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

    componentDidMount() {
        window.addEventListener('click', this.handleBodyClick.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleBodyClick);
    }

    handleBodyClick(e) {
        this.setState({ search: "" });
    }


    handleSearch(e) {
        e.preventDefault();
        this.setState({ search: e.currentTarget.value })
    }


    render() {
    
        let users = Object.values(this.props.users);

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

                    {users.filter(user => user.first_name.toUpperCase().startsWith(this.state.search.trim().toUpperCase()) || 
                    user.last_name.toUpperCase().startsWith(this.state.search.trim().toUpperCase()) || 
                    (user.first_name + " " + user.last_name).toUpperCase().startsWith(this.state.search.trim().toUpperCase()))
                        .map(result => <li>
                            <NavLink className="search-link"
                                to={`/users/${result.id}`}>
                                <span>{`${result.first_name} ${result.last_name}`}</span>
                            </NavLink>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default Search