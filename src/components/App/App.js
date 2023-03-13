import { ContactForm } from '../ContactForm/ContactForm'
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Section,  Title, SubTitle, ListWrapper} from "components/App/App.styled";

export const App = () => {
  return ( 
    <Section>
      <Title>Phonebook</Title>
      <ContactForm ></ContactForm>
        <SubTitle>Contacts</SubTitle>
      <ListWrapper>
        <Filter />      
        <ContactList />
      </ListWrapper>
    </Section>
    );
  };


