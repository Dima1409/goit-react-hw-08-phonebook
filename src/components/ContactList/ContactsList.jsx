import Contact  from "../Contact";
import { useGetContactsQuery } from "redux/contactsSlice";


const ContactList = ({items, ...otherProps}) => {
    const { data: contacts} = useGetContactsQuery();
    console.log(contacts)
      
    return (
        <ul>
            {items.map((item, index) => (
                    <Contact index={index} key={item.id} item={item} {...otherProps}/>
            ))}
        </ul>
    )
}

export default ContactList;