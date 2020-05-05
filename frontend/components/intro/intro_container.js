import Intro from './intro';
import { connect } from 'react-redux';
import { withRouter } from "react-router";



const mapStateToProps = (state, ownProps) => ({
    profile: state.entities.profiles[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    // signup: (user) => dispatch(signup(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));