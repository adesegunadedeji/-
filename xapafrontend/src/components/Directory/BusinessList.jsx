import React, { Component } from 'react';
import { connect} from 'react-redux';

class Directory extends Component{
    constructor(){
    super()
    this.state = {
        directoriesList:  []
    }
    }
    
    componentDidMount(){
        this.getDirectory()
    }

    getDirectory= async() => {
        const get = await fetch("http://localhost:3001/directories")
        const parsedresponse = await get.json()
        console.log("This is the react Response" , parsedresponse)
    }

    render(){
        let directory = this.props.directory.map(directory=>{
            return(
                <div key={directory.id}>
                    {directory.company}
                     </div>
            )
        })
        return(
            <div>
                This is the class Directory
                {directory}
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('Business List STATE', state)
    return {
      directory: state.directory
    };
  }
  
  export default connect(mapStateToProps)(Directory);
