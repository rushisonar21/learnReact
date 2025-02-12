import PropTypes from 'prop-types'

function List(props){
    let item_list = props.items
    let category = props.category

    let new_list = item_list.map(item=>{
        return (<li key={item.id}>{item.name}:{item.calories}</li>)
        });

    return(
    <>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{new_list}</ul>
    </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number}))
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List