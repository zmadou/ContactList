import { Provider } from 'react-redux';
import { store } from './app/store';
import { GlobalStyle, Container } from './styles';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  );
}
