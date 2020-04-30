import React from 'react'

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
                    <img src={window.navLogoURL}></img>
                </div>
                <div>
                    <input type="text" placeholder="Search.."></input>
                    <button type="submit"><i>🔍</i></button>
                </div>
                <div className="navbar-avatar">
                    <img src={window.avatarURL} />
                    <span>{currentUser.first_name}</span>
                </div>
                <div>Home</div>
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