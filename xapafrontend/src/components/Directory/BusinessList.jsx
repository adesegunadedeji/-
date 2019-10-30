import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actionCreators from '../../actions/index'

class Directory extends Component{
    // constructor(){
    // super()
    // this.state = {
    //     directoriesList:  []
    // }
    // }

    componentDidMount(){
        this.props.getDirectory();
    }
    //   increment = () => {
    //    this.props.dispatch({ type: 'INCREMENT' });
      
    //   }


    // getDirectory= async() => {
    //     const get = await fetch("http://localhost:3001/directories")
    //     const parsedresponse = await get.json()
    //     console.log("This is the react Response" , parsedresponse)
    //     this.setState({
    //         directoriesList: parsedresponse
    //     })
    // }

    render(){
        console.log("state to Props",this.props)
        
            console.log("PASSED THROUGH",this.props.directory)
        let directory =
        !!this.props.directory && this.props.directory.map(directory=>{
            return(
                <div key={directory.id}>
                    {directory.company}
                     </div>
            )
        })
        return(
         <div>
             <h1>Directory List</h1>
             {directory}
        </div>
        )
    }
}

// function mapStateToProps(state) {
//     console.log('Business List STATE', state)
//     return {
//       directory: state.directory
//     };
//   }
  
//   export default connect(mapStateToProps, actionCreators)(Directory);

  const mapStateToProps =(state)=>{
      console.log("BUSINESS LIST STATE", state)
      const {directory} = state
    return {directory: directory.directoryArray}
    
}
export default connect (mapStateToProps, actionCreators)(Directory)
