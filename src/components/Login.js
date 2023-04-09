import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
	state={
		username:"",
		password:""
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	send=()=>{
		let newData={
			username:this.state.username,password:this.state.password
		}
		//console.log(this.state.username,this.state.password)
		axios.post("http://65.0.100.29:2008/products",newData)
			.then((res)=>{
				console.log(res)
			})
		this.setState({
			username:"",
			password:""
		})
	}
    render() {
        return (
         <div >
         	<p><input value={this.state.username} onChange={this.handleChange} name="username"/></p>
         	<p><input value={this.state.password} onChange={this.handleChange} name="password"/></p>
         	<p><button onClick={this.send}>Submit</button></p>
         </div>
        )
    }
}