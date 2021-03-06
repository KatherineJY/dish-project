import React, { Component } from 'react';

import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false            
        };
    }

    doLogin=(e)=>{

        e.preventDefault();
        

        let username=this.refs.username.value;

        let password=this.refs.password.value;


        console.log(username,password)

        if(username=='admin' && password=='123456'){
            this.setState({
                loginFlag:true
            })
        }else{
            alert('登录失败')
        }

    }
    render() {
        if(this.state.loginFlag){
            return <Redirect to='/' />;
        }
        return (    

            <div>
                <form onSubmit={this.doLogin}>

                        <input type="text"  ref="username" />  <br /> <br />

                        <input type="password"  ref="password" /> <br /> <br />

                         <input type="submit"  value="执行登录"/>

                </form>

               

            </div>
            
        );
    }
}

export default Login;