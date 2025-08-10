import { FormEvent, ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addContact } from '../features/contacts/contactsSlice';
import { Card, Row, Input, Button } from '../styles';
import InputMask from 'react-input-mask';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert('Preencha nome, e-mail e telefone.');
      return;
    }
    const emailOk = /\S+@\S+\.\S+/.test(email);
    if (!emailOk) {
      alert('Informe um e-mail válido.');
      return;
    }

    dispatch(addContact({ fullName, email, phone }));
    setFullName('');
    setEmail('');
    setPhone('');
  }

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <Row>
        <Input
          placeholder="Nome completo"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <Input
          as={InputMask}
          mask="(99) 99999-9999"
          maskChar=""
          placeholder="Telefone"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />

        <Button type="submit">Adicionar</Button>
      </Row>
    </Card>
  );
}
