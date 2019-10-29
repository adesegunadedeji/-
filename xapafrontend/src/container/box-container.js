import React ,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index'


import Box from '../components/box'
class BoxCon extends Component{

    render(){
        // console.log(this.props)
        return(
            <div>
                <Box handleClick={this.props.loadColor} color={this.props.colorReducer.color}/>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    // console.log(state)
    return state
}
export default connect (mapStateToProps, actionCreators)(BoxCon)