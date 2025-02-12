import PropTypes from 'prop-types'
function Student(props){
    return(
        <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </>
    );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Student",
    age: 0,
    isStudent: true,
}

export default Student