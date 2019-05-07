import React, { Component } from 'react';
import Itemlisttodo from './itemtodo';


var tab=[]    

class Listtodo extends Component {
    constructor(props)
    {
        super(props)
        this.state=(
            {
                newtab:tab
            }
        )
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps)
        if(nextProps.text!="")
        {
            this.setState({
            newtab:this.state.newtab.concat({
                text:nextProps.text
            })
        })
    }
    }

    toggle=(i)=>
    {
       this.setState({
           newtab:this.state.newtab.map((el,index)=>
        {
            if(index===i)
            {
               return {
                   text:el.text,
                   isDone:!el.isDone
               } 
            }
            return el
        })
       })
    }
    remove=(i)=>
    {
        this.setState({
            newtab:this.state.newtab.filter((el,index)=>
        {
            return index!=i
        })
        })
    }

    render() { 
        console.log(this.state.newtab)
        return ( 
            <div className='listtodo-app'>
             {
                 this.state.newtab.map((el,index)=>
                <Itemlisttodo key={index}  itemtodo={el} toggle={(i)=>this.toggle(i)}
                id={index} remove={(i)=>{this.remove(i)}} />
            )
             }
            </div>
         );
    }
}
 
export default Listtodo;