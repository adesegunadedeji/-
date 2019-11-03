
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Col, Form, FormGroup, Label, Input} from 'reactstrap';

class EditPlayer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      company: props.directory.company,
      founder:props.directory.founder,
      logo:props.directory.logo,
      revenue: props.directory.revenue,
    }

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
handleChange = (e)=>{
this.setState({
    [e.target.name]: e.target.value
})
}

handleSubmit= async (e)=>{
    e.preventDefault();
    console.log("Ready to Edit", this.props)
    const validUpdate = await this.props.updateBusDirectory(this.props.directory.id, this.state);
    if(validUpdate){
        this.toggle(); 
    }
}

  render() {
    return (
      <div>
        <Button className = "EditButton editandDeleteButton" onClick={this.toggle}>EDIT</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charCode="X">{this.state.name}
          <img src ="https://bootstraplogos.com/wp-content/uploads/edd/2018/04/logo-3.png" width="60" height="60" alt="BusinessLogo"/> 
         </ModalHeader>
          <ModalBody className ="modal-body">
              <Form onSubmit = {this.handleSubmit}>
              <FormGroup row>
          <Label className="labelEdit" sm={2}>Company</Label>
          <Col sm={10}>
                <Input type="text" name="company"  className="LoginForm" onChange={this.handleChange} value={this.state.company}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="labelEdit" sm={2}> Founder</Label>
          <Col sm={10}>
                <Input type="text" name="founder" className="LoginForm" onChange={this.handleChange}value={this.state.founder}/>
                </Col>
        </FormGroup>

        <FormGroup row>
          <Label className="labelEdit" sm={2}> Logo</Label>
          <Col sm={10}>
                <Input type="text"  className="LoginForm" name="logo"onChange={this.handleChange}value={this.state.logo}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="labelEdit" sm={2}>Objective</Label>
          <Col sm={10}>
                <Input type="text"  className="LoginForm" name="revenue" onChange={this.handleChange}value={this.state.revenue}/>
                </Col>
        </FormGroup>
              </Form>
           </ModalBody>
          <ModalFooter>
            <Button className = "EditButton editandDeleteButton" onClick={this.handleSubmit}>Edit{' '}</Button>
            <Button className = "DeleteButton editandDeleteButton"  onClick={this.toggle}>Cancel {' '}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default EditPlayer;