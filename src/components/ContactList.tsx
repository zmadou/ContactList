import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { removeContact, updateContact, Contact } from '../features/contacts/contactsSlice';
import { Card, Row, Input, Button } from '../styles';

export default function ContactList() {
  const contacts = useAppSelector(s => s.contacts.items);
  const dispatch = useAppDispatch();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Omit<Contact, 'id'>>({
    fullName: '', email: '', phone: ''
  });

  function startEdit(c: Contact) {
    setEditingId(c.id);
    setDraft({ fullName: c.fullName, email: c.email, phone: c.phone });
  }
  function cancelEdit() {
    setEditingId(null);
  }
  function saveEdit() {
    if (!editingId) return;
    if (!draft.fullName.trim() || !draft.email.trim() || !draft.phone.trim()) {
      alert('Preencha todos os campos.');
      return;
    }
    dispatch(updateContact({ id: editingId, changes: draft }));
    setEditingId(null);
  }

  return (
    <Card>
      {contacts.length === 0 && <p>Nenhum contato ainda. Adicione o primeiro ✨</p>}

      {contacts.map(c => (
        <Row key={c.id} style={{ marginBottom: 10 }}>
          {editingId === c.id ? (
            <>
              <Input value={draft.fullName} onChange={(e) => setDraft(d => ({ ...d, fullName: e.target.value }))} />
              <Input type="email" value={draft.email} onChange={(e) => setDraft(d => ({ ...d, email: e.target.value }))} />
              <Input value={draft.phone} onChange={(e) => setDraft(d => ({ ...d, phone: e.target.value }))} />
              <div style={{ display: 'flex', gap: 8, justifySelf: 'end' }}>
                <Button onClick={saveEdit}>Salvar</Button>
                <Button variant="ghost" onClick={cancelEdit} type="button">Cancelar</Button>
              </div>
            </>
          ) : (
            <>
              <div><strong>{c.fullName}</strong></div>
              <div>{c.email}</div>
              <div>{c.phone}</div>
              <div style={{ display: 'flex', gap: 8, justifySelf: 'end' }}>
                <Button onClick={() => startEdit(c)} type="button">Editar</Button>
                <Button variant="ghost" onClick={() => dispatch(removeContact(c.id))} type="button">Remover</Button>
              </div>
            </>
          )}
        </Row>
      ))}
    </Card>
  );
}
