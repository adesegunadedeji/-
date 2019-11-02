import React, {Component} from 'react'
// import { connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import SimpleMap from '../SimpleMap'
// import * as actionCreators from '../../actions/index'
import { Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';
class NewBusiness extends Component{
    constructor(){
        super()
        this.state={
            company: "",
            founder: "",
            revenue: "",
            logo: "",
            redirect:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('SUBMIT FORM')
       this.createBusDirectory(this.state);
      this.setState({
          redirect: true
      })
    }


    createBusDirectory =async(formData) =>{
        try{
            console.log("CREATING NEW PLAYER")
            const newDirectory = await fetch('http://localhost:3001/directories',{
                method:"POST",
                credentials: "include",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json",
                    "acccept": "application/json"
                }
            })
            const parsedResponse = await newDirectory.json();
            console.log(parsedResponse)
            if(parsedResponse){
                this.setState({
                    directory: [parsedResponse,...this.state.directory]
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }

render(){
    const redirectToReferrer = this.state.redirect;
        if (redirectToReferrer === true) {
            return <Redirect to="/directory" />
        }
return(
    <div>
    <div className="NewBusiness">
            <p>Interested in partnering with us? Create a Business Profile and elevate your business potential</p>
      <br></br>
      <div>
        <Form onSubmit = {this.handleSubmit} className="NewBusinessForm">
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Company</Label>
                <Col sm={5}>
                <Input type="text" name="company" onChange={this.handleChange} placeholder="Company"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Founder</Label>
                <Col sm={5}>
                <Input type="text" name="founder" onChange={this.handleChange} placeholder="Founder"/>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Logo</Label>
          <Col sm={5}>
                <Input type="text" name="logo" onChange={this.handleChange} placeholder="Add Image url"/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Objective</Label>
          <Col sm={5}>
                <Input type="text" name="revenue" onChange={this.handleChange} placeholder="Objective"/>
                </Col>
        </FormGroup>
        <Button>Add Business</Button>
        </Form>
        </div>
        <br></br>
         </div>
         <br></br>
         <div className="divider div-transparent div-dot"></div>
         <SimpleMap/>
         </div>
        )
    }
}
// const mapStateToProps =(state)=>{
//     console.log("New Business", state)
//     return state 
// //     const {directory} = state
// //   return {directory: directory.directoryArray}
  
// }
// export default connect (mapStateToProps, actionCreators)(NewBusiness)

export default NewBusiness
