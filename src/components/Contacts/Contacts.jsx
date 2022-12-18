import ContactList from "components/ContactList";
import { useGetContactsQuery } from "redux/contactsSlice";
import SearchInput from "components/SearchInput";
import { ListIsEmpty } from "components/App/App.styled";
import Loader from "components/Loader";
// import { useSelector } from "react-redux";
// import { selectByFilter } from "redux/selectors";

const Contacts = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
//   const resultContacts = () => {
//     if(isLoading===false) {
//     return contacts;
//   }  return [];
// };



  // console.log(resultContacts(), 'resultContacts')
  
  // const filter = useSelector(selectByFilter);
 

  return (
    <div>
      {error && (
        <p>
          error!
        </p>
      )}
        {isLoading === false && contacts.length > 0 && (
              <SearchInput></SearchInput>
             )}  
             {isLoading === false && contacts.length === 0 && (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
             )}
             
            {isLoading ? (
        <Loader/>
      ) : (
        <> 
        <ContactList items={contacts} />
       
        </>
        
      )}
    </div>
  );
}

export default Contacts;