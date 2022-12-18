import { useNavigate, useParams } from 'react-router-dom';
import { Overlay, Modal } from 'components/Modal/Modal.styled';
import { ContactsEditForm } from '../ContactsEditorForm/ContactsEditorForm';
import { useGetContactByIdQuery, useUpdateContactMutation } from '../../redux/contactsSlice';

const EditContactModal = () => {
    const {contactId} = useParams();
    const {data: contact, isLoading} = useGetContactByIdQuery(contactId);
    const [updateContact] = useUpdateContactMutation();
    const navigate = useNavigate();
    const closeModal = () => navigate('/');

    const handleUpdateContact = async fields => {
        try {
            await updateContact({id: contactId, ...fields});
            closeModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <>
      <Overlay>
        {isLoading ? <div>Loading...</div> : <Modal>
        {contact && (
          <ContactsEditForm
            initialValues={{ name: contact.name, number: contact.number, email: contact.email }}
            btnText="Save"
            onSubmit={handleUpdateContact}
          />
        )}

        <button type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>}
            
        </Overlay>
      </>
        
    )
}

export default EditContactModal;