import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
        // this.setState ({username: "", password: ""}) //clear fields
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        // debugger
        return (
            <div className="login">
                <h1>railsbook</h1>

                {this.props.errors.length > 0 && <ul className="signin-errors"> {this.props.errors.map(error => <li>{error}</li>)} </ul>}

                <form className="login-form" onSubmit={this.handleSubmit}>

                    <table>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td><input onChange={this.handleChange("email")} type="text" value={this.state.email} /></td>
                            <td><input onChange={this.handleChange("password")} type="password" value={this.state.password} /></td>
                            <td><button>Log In</button></td>
                        </tr>
                    </table>
                    
                </form>
            </div>
        )
    }
}
export default LoginForm;