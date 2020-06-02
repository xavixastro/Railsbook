import Search from './search';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.entities.users, 
    profiles: state.entities.profiles

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)