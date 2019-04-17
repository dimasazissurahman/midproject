import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { PostData } from '../services/PostData';
import axios from 'axios';


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            redirect: false,
            loading: false,
            message: ""
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
  loadShowMsg(){
    if(this.state.loading){
      return <p>Loading...</p>
    }
    else{
      return <p>{this.state.message}</p>
    }
  }

  handleSubmit(e){
      e.preventDefault();

      const email = this.state.email
      const password = this.state.password
      const name = this.state.name

      this.setState ({
        loading:true
      })

      const data = {
        email,
        password,
        name
      }

      axios.post('/dolphins', data)
      .then(response => {
        console.log(response);
        this.setState({
          loading:false,
          message:response.data,
          redirect:true
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading:false,
          redirect:false
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
    render() {
      if(this.state.redirect === true){
        return (<Redirect to={'/sign-in'}/>)
      }
      return (
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"  onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button type="submit" value="signup" className="FormField__Button mr-20">Sign Up</button> 
              </div>
            </form>
            {this.loadShowMsg()}
          </div>
        );
    }
}

export default SignUp;