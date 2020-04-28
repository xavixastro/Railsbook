import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)