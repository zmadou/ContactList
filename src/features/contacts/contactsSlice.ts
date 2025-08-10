import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type Contact = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
};

type ContactsState = {
  items: Contact[];
};

const initialState: ContactsState = {
  items: []
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (
      state,
      action: PayloadAction<Omit<Contact, 'id'>>
    ) => {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Omit<Contact, 'id'>> }>
    ) => {
      const idx = state.items.findIndex(c => c.id === action.payload.id);
      if (idx >= 0) {
        state.items[idx] = { ...state.items[idx], ...action.payload.changes };
      }
    }
  }
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
