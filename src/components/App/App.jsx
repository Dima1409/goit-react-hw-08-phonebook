import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactsForm from 'components/Form';
import Contacts from 'components/Contacts';
import EditContactModal from 'components/EditModal';
import ThemeBtn from 'components/ThemeBtn';
import { selectTheme } from 'redux/selectors';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'components/ThemeBtn/theme';
import {Container, ContainerList, ListTitle, FormTitle, Global, Heading, StyledApp} from './App.styled';
import ScrollToTop from 'components/Helpers/ScrollToTop';

const App = () => {
  const isDarkTheme = useSelector(selectTheme);
  return (
    <>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Container>
          <Global/>
          <ScrollToTop/>
          <Routes>
        <Route
          path="/"
          element={
            <>
            <Heading>
                     <FormTitle>Phonebook</FormTitle>
                     <ThemeBtn />
                   </Heading>
              <ContactsForm />
              <ContainerList>
            <ListTitle>Contacts</ListTitle>
          <Contacts />
          </ContainerList>
              
            </>
          }
        ></Route>
        <Route
          path="contact/edit/:contactId"
          element={<EditContactModal />}
        ></Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
        </Container>
      </StyledApp>
    </ThemeProvider>
      
    </>
  );
};

export default App;
