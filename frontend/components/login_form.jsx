import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    loginDemo(e) {
        e.preventDefault();
        const user = Object.assign({}, { email: 'demo@aa.io', password: '123456' });
        this.props.login(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
                
                <h1>
                    <NavLink 
                        to="/"
                        activeStyle= {{
                            textDecoration: 'none', 
                            color: 'white'
                        }}> 
                        railsbook 
                    </NavLink>
                </h1>




                <form className="login-form" onSubmit={this.handleSubmit}>
                    
                    {this.props.errors.length > 0 && <ul className="login-errors"> {this.props.errors.map(error => <li>{error}</li>)} </ul>}
                    
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td><input onChange={this.handleChange("email")} type="text" value={this.state.email} /></td>
                            <td><input onChange={this.handleChange("password")} type="password" value={this.state.password} /></td>
                            <td><button>Log In</button></td>
                            <td><button onClick={this.loginDemo}>Demo</button></td>
                        </tr>
                    </table> 
                
                </form>                

            </div>
        )
    }
}
export default LoginForm;