import React from 'react'
import { NavLink } from 'react-router-dom';
import FriendRequestContainer from './friend_request_container';
import SearchContainer from './search_container';


class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showRequests: false
        }     
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        this.props.fetchUsers();
        window.addEventListener('click', this.handleBodyClick.bind(this));
    }

    componentWillUnmount () {
        window.removeEventListener('click', this.handleBodyClick);
    }

    handleBodyClick(e) {
        this.setState({ showRequests: false});
    }


    logout() {
        this.props.logout();
    }

    toggleRequest(e) {
        e.stopPropagation();
        this.setState({ showRequests: this.state.showRequests ? false : true })
    }

    render(){
        if (this.props.currentUser === undefined) return null;
        if (this.props.profile === undefined) return null;


        const {currentUser} = this.props


        return (
            <div className="navbar">
                <div>
                    <NavLink className="navbar-feed"
                        to={`/feed`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <img src={window.navLogoURL} />
                    </NavLink>
                </div>

                <div>
                    <SearchContainer/>
                </div>

                <div className="navbar-links">        

                    <NavLink className="navbar-avatar"
                        to={`/users/${currentUser.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <img src={this.props.profile.profilePhotoUrl } />
                        <span>{currentUser.first_name}</span>
                    </NavLink>

                    <NavLink className="navbar-home"
                        to={`/feed`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <span>Home</span>
                    </NavLink>

                    <div className="dropdown-friends" onClick={this.toggleRequest.bind(this)}>
                        <img className="dropdown-image" src={window.navRequestsURL} />
                        <ul className="dropdown-requests"
                            style={{
                                display: this.state.showRequests ? 'block' : 'none'
                            }}>
                            
                            {currentUser.received_friend_ids.length === 0 ? <li>No Requests</li> : <li>Friend Requests</li>   } 
                            {currentUser.received_friend_ids.map((friendId) => <li><FriendRequestContainer friendId = {friendId}/></li>)}
                        </ul>
                    </div>
                    <div className="navbar-help">
                        <a href="https://github.com/xavixastro/Railsbook" target="_blank">
                            <img src={window.navHelpURL} />
                        </a>
                    </div>
                    <button className="navbar-logout" onClick={this.logout}><span>Log Out</span></button>
                </div>
            </div>
        )
    }
}

export default NavBar