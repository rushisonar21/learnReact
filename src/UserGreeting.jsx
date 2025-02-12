import PropTypes from 'prop-types'
function userGreeting(props){
    const valid = <h2 className="welcome">Welcome {props.user}</h2>;
    const invalid = <h2 className="login">Please Login</h2>
    
    return(props.isLoggedIn ? valid : invalid);
}

userGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    user: PropTypes.string,
}
userGreeting.defaultProps = {
    isLoggedIn: false,
    user: "Guest",
}
export default userGreeting