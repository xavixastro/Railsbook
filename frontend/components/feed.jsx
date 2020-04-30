
import React from 'react';
import { Link } from 'react-router-dom'

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        // debugger
        this.props.fetchUser(this.props.currentUser.id)
    }

    logout() {
        this.props.logout();
    }

    render() {
        if (this.props.currentUser === undefined) {
            return (
                <div>
                    <Link to="/">Join Railsbook!</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Welcome {this.props.currentUser.email}</h3>
                    <button onClick={this.logout}>Log Out</button>
                </div>
            )
        }
    }
}

export default Feed;