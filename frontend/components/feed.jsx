
import React from 'react';
import { Link } from 'react-router-dom'

class Feed extends React.Component {

    constructor(props) {
        super(props);
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
                <div className="feed-main">
                    <h3>Welcome {this.props.currentUser.email}</h3>
                </div>
            )
        }
    }
}

export default Feed;