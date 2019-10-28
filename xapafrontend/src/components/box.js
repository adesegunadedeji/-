import React ,{Component} from 'react'
class Box extends Component{
render(){
    return(
        <div className="wrapper">
        <div style ={{
            backgroundColor: `${this.props.color}`}} className="box">
            <button onClick={()=>{this.props.handleClick()}}> Change Color</button>
        </div>
        </div>
    )
}
}
export default Box