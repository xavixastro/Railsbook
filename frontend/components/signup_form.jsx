import React from 'react'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "", 
            last_name: "", 
            birthdate: "", 
            gender: ""

        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
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
                <h1>Sign Up!</h1>
                <br />
                <br />
                <ul>
                    {this.props.errors.map(error => <li>{error}</li>)}
                </ul>

                <br />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name:
                        <input onChange={this.handleChange("first_name")} type="text" value={this.state.first_name} />
                    </label>
                    <br />
                    <label>
                        Last name:
                        <input onChange={this.handleChange("last_name")} type="text" value={this.state.last_name} />
                    </label>
                    <br />
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
                    <label>
                        Birthdate:
                        <input onChange={this.handleChange("birthdate")} type="password" value={this.state.birthdate} />
                    </label>
                    <br />
                    <label>
                        Gender:
                        <input onChange={this.handleChange("gender")} type="password" value={this.state.gender} />
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default SignupForm;