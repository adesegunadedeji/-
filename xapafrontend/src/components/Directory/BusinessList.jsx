import React, { Component } from 'react';
import { connect} from 'react-redux';
import EditBusiness from './EditBusiness'
import * as actionCreators from '../../actions/index'
import {Card, CardImg, CardBody,CardText, CardSubtitle, Row, Col, Button} from 'reactstrap';

class Directory extends Component{
    // constructor(){
    // super()
    // this.state = {
    //     directoriesList:  []
    // }
    // }
  
    // getDirectory= async() => {
    //     const get = await fetch("http://localhost:3001/directories")
    //     const parsedresponse = await get.json()
    //     console.log("This is the react Response" , parsedresponse)
    //     this.setState({
    //         directoriesList: parsedresponse
    //     })
    // }

    deleteBusDirectory= async(id) => {
        try{
            await fetch(`http://localhost:3001/directories/${id}`,{
                method: "DELETE",
            });
            this.setState({
                directory : this.state.directory.filter(directory => directory.id !==id)
            })
        }
        catch(err){
            console.log(err)
        }
    }
    updateBusDirectory = async(id,formData)=>{
        console.log("PROPS UNDERSRTANDING", this.props)
        try{
            const updateDirectory = await fetch (`http://localhost:3001/directories/${id}`,{
                method: "PUT",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            })
            const parsedResponse = await updateDirectory.json();
            console.log("PARSED RESPONSE!!!!!!!!!", parsedResponse)
                this.setState({
                    directory: this.props.directory.map(directory => directory.id === id?
                    parsedResponse:  directory)
                })
        }
        catch(err){
            console.log(err)
        }
      }


    componentDidMount(){
        this.props.getDirectory();
    }
    render(){
            console.log("PASSED THROUGH",this.props.directory)
        let directory = !!this.props.directory && this.props.directory.map(directory=>{
            return(
                <Col sm ="3" key = {directory.id} >
                <Card>
                <CardBody>
                    <CardImg top width = "100%"  src={directory.logo} alt="cardImage" />
                        <CardText>{directory.company} was founded by {directory.founder}</CardText>
                    </CardBody>
                    <div className = "ButtonGroup">
                    <EditBusiness directory={directory}  updateBusDirectory ={this.updateBusDirectory}/>
                      <br></br>
                        <Button className=" DeleteButton editandDeleteButton" onClick={()=>{this.deleteBusDirectory(directory.id)}}>DELETE</Button>
                        
                        </div>
                        <br>
                        </br>
                    </Card>
                    <div className="divider div-transparent div-dot"></div>
                        </Col>   
            )
        })
        return(
         <div>
                <h1>Directory List</h1>
                <div className = "DirectoryList">
             <Row>
             {directory}
             </Row>
             </div>
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
