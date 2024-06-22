
// dispatch hook from redux
import { useDispatch } from "react-redux";

// actions from contact Reducer
import { setShowContact } from "../Redux/Reducers/contactReducer";

//import proptypes
import PropTypes from 'prop-types';


// add a single list item to the contact list
const ListItem = (props) => {

    // dispatch variable for calling function
    const dispatch = useDispatch();

    // getting values of name and contact from the props
    const {name, phone} = props.contact;

    // when user click on a contact item
    const handleClick = () =>{
        // set the contact value inside the showContact variable and show the contact's more info
        dispatch(setShowContact(props.contact));
    }


    // render the list item
    return(
        // container
        <div className="w-full flex justify-between 
                        h-12 cursor-pointer font-semibold
                        md:flex-col md:h-16 
                        min-[1100px]:flex-row min-[1100px]:h-12
                        hover:bg-[#8975cc] 
                        border-b-2 border-slate-400 hover:border-[#5C4B99] 
                        p-2 hover:text-white" 
            onClick={handleClick}>
            
            {/* name of the person */}
            <div>
                {name}
            </div>

            {/* phone number of the person */}
            <div>
                <small>
                    {phone}
                </small>
            </div>
            
        </div>
    )
}

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired,
};
  

export default ListItem;