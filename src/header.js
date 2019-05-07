import React, { Component } from 'react';
class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            value:""
        })
    }

    handlechange=(event)=>
    {
        this.setState({
            value:event.target.value
        })
    }
    reset=()=>
    {
        this.setState({
            value:""
        })
    }
    render() { 
        return ( 
            <div className='header-app'>
             <input type='text' value={this.state.value} onChange={this.handlechange}/>
             <button onClick={()=>{this.props.hettodo(this.state.value);this.reset()}}>Add+</button>
            </div>
         );
    }
}
 
export default Header;