import Intro from './intro';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { updateProfileInfo} from "../../actions/profile_actions";



const mapStateToProps = (state, ownProps) => ({
    profile: state.entities.profiles[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    // signup: (user) => dispatch(signup(user))
    updateProfileInfo: (profile) => dispatch(updateProfileInfo(profile))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));