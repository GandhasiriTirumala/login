import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
		componentDidMount(){
			axios.get("http://65.0.100.29:2008/products")
			.then((res)=>{
				console.log(res.data)
			})
		}
    render() {
        return (
         <div >

         </div>
        )
    }
}