import React from 'react'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "", 
            last_name: "", 
            birthdate: new Date(new Date().setFullYear(new Date().getFullYear() - 25)), //get today's date 25 years ago
            gender: ""

        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleDate(field) {
        
        return (e) => {
            const newDate = this.state.birthdate;
            switch (field) {
                case 'month':
                    newDate.setMonth(e.target.value);
                    break;
                case 'day':
                    newDate.setDate(e.target.value);
                    break;
                case 'year':
                    newDate.setFullYear(e.target.value);
                    break;
                default:
                    break;
            }
            this.setState({ birthdate: newDate })
        }
    }

    render() {
        return (
            <div className="signup" >
                <div className="signup-container">

                    <div className="signup-info">
                        <h2>Connect with friends and the world around you on Railsbook.</h2>
                        <div><img src={window.signup1URL}></img><span>See photos and updates</span>from friends in NewsFeed.</div>
                        <div><img src={window.signup2URL}></img><span>Share what's new</span>in your life on your Timeline.</div>
                        <div><img src={window.signup3URL}></img><span>Find more</span>of what you're looking for with Railsbook Search</div>
                    </div>

                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <td><h1>Sign Up</h1></td>
                            </tr>
                            <tr>
                                <td><h2>It's quick and easy.</h2></td>
                            </tr>
                            <tr>
                                <td className="name-input">
                                    <input onChange={this.handleChange("first_name")} placeholder="First name" type="text" value={this.state.first_name} />
                                    <input onChange={this.handleChange("last_name")} placeholder="Last name" type="text" value={this.state.last_name} />
                                </td>
                            </tr>
                            <tr>
                                <td className="email-input">
                                    <input onChange={this.handleChange("email")} placeholder="Email" type="text" value={this.state.email} />
                                </td>
                            </tr>
                            <tr>
                                <td className="password-input">
                                    <input onChange={this.handleChange("password")} placeholder="New password" type="password" value={this.state.password} />
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Birthday</h3></td>
                            </tr>
                            <tr className="signup-birthdate">
                                <td>
                                    <select onChange={this.handleDate('month')} value={this.state.birthdate.getMonth()}>
                                        <option>- Month -</option>
                                        <option value="0">Jan</option>
                                        <option value="1">Feb</option>
                                        <option value="2">Mar</option>
                                        <option value="3">Apr</option>
                                        <option value="4">May</option>
                                        <option value="5">Jun</option>
                                        <option value="6">Jul</option>
                                        <option value="7">Aug</option>
                                        <option value="8">Sep</option>
                                        <option value="9">Oct</option>
                                        <option value="10">Nov</option>
                                        <option value="11">Dec</option>
                                    </select>                       
                                    <select onChange={this.handleDate('day')} value={this.state.birthdate.getDate()}>
                                        <option>- Day -</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select onChange={this.handleDate('year')} value={this.state.birthdate.getFullYear()}>
                                        <option>- Year -</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Gender</h3></td>
                            </tr>
                            <tr className="signup-gender">
                                <td>
                                    <span><input onChange={this.handleChange("gender")} type="radio" id="female" name="gender" value="female"/>Female</span>
                                    <span><input onChange={this.handleChange("gender")} type="radio" id="male" name="gender" value="male"/>Male</span>
                                    <span><input onChange={this.handleChange("gender")} type="radio" id="other" name="gender" value="custom"/>Custom</span>
                                </td>    
                            </tr>
                        </table>
                        <button>Sign Up</button>            
                        {this.props.errors.length > 0 && <ul className="signup-errors"> {this.props.errors.map(error => <li>{error}</li>)} </ul>}
                    </form>


                </div>
            </div>
        )
    }
}
export default SignupForm;