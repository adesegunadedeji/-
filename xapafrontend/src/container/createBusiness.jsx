// CreateBusiness.js

import { connect } from 'react-redux';
import {createBusiness } from '../actions';
import NewBusiness from '../components/Directory/NewBusiness'

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: business => {
      dispatch(createBusiness(business));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewBusiness);