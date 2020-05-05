import React from 'react'
import { NavLink } from 'react-router-dom';
import FriendRequestContainer from './friend_request_container';


class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
        this.state = {
            showRequests: false
        }
    }

    componentDidMount(){
        if (this.props.currentUser === undefined) return null;
        // this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchUsers();
    }


    logout() {
        this.props.logout();
    }

    toggleRequest() {
        this.setState({ showRequests: this.state.showRequests ? false : true})
    }

    render(){
        if (this.props.currentUser === undefined) return null;
        if (this.props.profile === undefined) return null;

        // debugger

        const {currentUser} = this.props


        return (
            <div className="navbar">
                <div>
                    <NavLink
                        to={`/feed`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <img src={window.navLogoURL} />
                    </NavLink>
                </div>
                <div>
                    <input type="text" placeholder="Search.."></input>
                    <button type="submit"><i>🔍</i></button>
                </div>
                <div >
                    <NavLink className="navbar-avatar"
                        to={`/users/${currentUser.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <img src={this.props.profile.profilePhotoUrl } />
                        <span>{currentUser.first_name}</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to={`/feed`}
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        Home
                    </NavLink>
                </div>
                <div onClick={this.toggleRequest.bind(this)}>
                    <img className="dropdown-image" src={window.navRequestsURL} />
                    <ul className="dropdown-requests"
                        style={{
                            display: this.state.showRequests ? 'block' : 'none'
                        }}>
                        {currentUser.received_friend_ids.length === 0 ?  <li>No Requests</li> : <li></li>   } 
                        {currentUser.received_friend_ids.map((friendId) => <li><FriendRequestContainer friendId = {friendId}/></li>)}
                    </ul>
                </div>
                <div>
                    <img src={window.navHelpURL} />
                </div>
                <button onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}

export default NavBar