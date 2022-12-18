import { useNavigate } from "react-router-dom";
import { useDeleteContactMutation } from "../../redux/contactsSlice";
import { ListItem, Number, DeleteButton, ItemInfo, CallTo, MailTo} from './Contact.styled';
import { AiTwotoneDelete, AiOutlinePhone, AiOutlineMail, AiOutlineEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Loader from "components/Loader";

const Contact = ({item, index}) => {
  const navigate = useNavigate();
    const [deleteContact, {isLoading}] = useDeleteContactMutation();
    return (
        <ListItem key={item.id}>
          <ItemInfo>
                  <span>{index + 1}.</span>
                  <span>{item.name}:</span>
                  <Number>{item.number}</Number>
          </ItemInfo>

      <IconContext.Provider value={{ size: '25px' }}>
        <CallTo href={`tel:${item.number}`}>
        <AiOutlinePhone/>
      </CallTo>
      {item.email ? (
                    <MailTo href={`mailto:${item.email}`}>
                      <AiOutlineMail />
                    </MailTo>
                  ) : null}
      <DeleteButton type="button" onClick={() => navigate(`/contact/edit/${item.id}`)}>
        <AiOutlineEdit/>
      </DeleteButton>
     <DeleteButton
        type="button"
        onClick={() => deleteContact(item.id)}
        disabled={isLoading}
      >
        {/* {isLoading ? <Loader/> : <AiTwotoneDelete/>} */}
        <AiTwotoneDelete/>
      </DeleteButton>
      
      </IconContext.Provider>
      
    </ListItem>
    )
}

export default Contact;