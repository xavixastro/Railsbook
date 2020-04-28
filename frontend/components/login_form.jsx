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
            <div>
                <h1>Log in!</h1>
                <br />
                <br />
                <ul>
                    {this.props.errors.map(error => <li>{error}</li>)}
                </ul>

                <br />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input onChange={this.handleChange("email")} type="text" value={this.state.email} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input onChange={this.handleChange("password")} type="password" value={this.state.password} />
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default LoginForm;