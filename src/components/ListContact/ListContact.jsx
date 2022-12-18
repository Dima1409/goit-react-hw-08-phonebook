// import React from 'react';
// import {
//   List,
//   ListItem,
//   Number,
//   DeleteButton,
//   ItemInfo,
//   CallTo,
//   MailTo,
// } from './ListContact.styled';
// import { selectContacts, selectByFilter, selectLoading } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';
// import { AiTwotoneDelete, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
// import { IconContext } from 'react-icons';

// const ListContact = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectByFilter);
//   const loading = useSelector(selectLoading);
//   const dispatch = useDispatch();

//   const onDeleteItem = id => {
//     dispatch(deleteContact(id));
//   };

//   const getSortContacts = () => {
//     const normalizedValue = filter.toLowerCase().trim();
//     return contacts.filter(elem =>
//       elem.name.toLowerCase().includes(normalizedValue)
//     );
//   };
//   const sortedContacts = getSortContacts().sort((a, b) =>
//     a.name.localeCompare(b.name)
//   );

//   return (
//     <List>
//       {sortedContacts.length === 0
//         ? null
//         : sortedContacts.map(({ id, name, number, email }, index) => {
//             return (
//               <ListItem key={id}>
//                 <ItemInfo>
//                   <span>{index + 1}.</span>
//                   <span>{name}:</span>
//                   <Number>{number}</Number>
//                 </ItemInfo>

//                 <IconContext.Provider value={{ size: '25px' }}>
//                   <CallTo href={`tel:${number}`}>
//                     <AiOutlinePhone />
//                   </CallTo>
//                   {email ? (
//                     <MailTo href={`mailto:${email}`}>
//                       <AiOutlineMail />
//                     </MailTo>
//                   ) : null}
//                   <DeleteButton
//                     disabled={loading}
//                     onClick={() => onDeleteItem(id)}
//                   >
//                     <AiTwotoneDelete />
//                   </DeleteButton>
//                 </IconContext.Provider>
//               </ListItem>
//             );
//           })}
//     </List>
//   );
// };

// export default ListContact;
