import styles from './Button.module.css'
import PropTypes from 'prop-types'
function Button(props){
    let username = props.name
    return(
    <button className={styles.Button1} onClick={(e,name)=>{
        if(e.target.textContent==="Click Me"){
            e.target.textContent = `clicked by ${username}`;
        } 
        else{
        e.target.textContent="Click Me"
        }
    }}>Click Me</button>
    );
}

Button.defaultProps= {
    name: "User",
}
Button.propTypes = {
    name: PropTypes.string
}

export default Button