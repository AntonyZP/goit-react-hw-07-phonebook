import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import {
  Section,
  Title,
  SubTitle,
  ListWrapper,
} from 'components/App/App.styled';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      <SubTitle>Contacts</SubTitle>
      <ListWrapper>
        <Filter />
        <ContactList />
        {isLoading && !error && <span>Please wait...</span>}
      </ListWrapper>
    </Section>
  );
};
