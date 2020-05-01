import React from 'react'
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        if (this.props.currentUser === undefined) return null;
        this.props.fetchUser(this.props.currentUser.id);
    }


    logout() {
        this.props.logout();
    }

    render(){
        if (this.props.currentUser === undefined) return null;

        const {currentUser} = this.props

        return (
            <div className="navbar">
                <div>
                    <NavLink
                        to={`/feed`}
                        activeStyle={{
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
                        activeStyle={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        <img src={window.avatarURL} />
                        <span>{currentUser.first_name}</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to={`/feed`}
                        activeStyle={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        Home
                    </NavLink>
                </div>
                <div>
                    <img src={window.navRequestsURL} />
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