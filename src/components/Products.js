import React, { Component } from 'react'
import axios from 'axios'
export default class Produucts extends Component {
	state={
		products:[]
	}
	componentDidMount(){
		axios.get("http://65.0.100.29:2008/products")
		.then((res)=>{
			//console.log(res)
			this.setState({
				products:res.data
			})
		})
	}
    render() {
        return (
         <div>
         	{
         		this.state.products.map((pitem)=>(
         			<div key={pitem.image} >
         				<p>Name:{pitem.name}</p>
         				<p><img src={pitem.image} width="20%" alt={pitem.name}/></p>
         			</div>
         	   ))
         	}
         </div>
        )
    }
}