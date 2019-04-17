import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { PostData } from '../services/PostData';
import axios from 'axios';


class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email:'',
            password:'',
            redirect: false,
            loading:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        // let target = e.target;
        // let value = e.target.type === 'checkbox' ? e.target.checked :e.target.value;
        // let name = target.name;

        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
        
        
    }

    handleSubmit(e){
        e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        const data = {
            email,
            password
        }

        axios.get('/t/xegle-1554099351#',data)
        .then(response => {
            console.log(response);
            this.setState({
              message:response.data,
              redirect:true,
              loading:true
            })
          })
          .catch(err => {
            console.log(err);
            this.setState({              
              redirect:false,
              loading:false
            })
        })    
        // console.log('The Form was Submitted with following data');
        // console.log(this.state);
        // if(this.state.email && this.state.password){
        //     PostData('handleSubmit', this.state)
        //     .then ((result) => {
        //         let responseJSON = result;
        //         if(responseJSON.userData){
        //             sessionStorage.setItem('userData', responseJSON);
        //             this.setState({redirect: true});
        //         }else{
        //             console.log("login error");
        //         }
        //     });
        // }

    }
    
    render(){
        if (this.state.redirect === true) {
            return (<Redirect to={'/Home'}/>)
        }
        return (
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button type="submit" value="login" className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</button>
                  <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;