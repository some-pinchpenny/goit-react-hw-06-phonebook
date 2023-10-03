import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380-32-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+980-32-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '180-32-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '380-32-227-91-26' },
];

const slice = createSlice({
  name: 'contacts',
  initialState: {
    value: initialContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value = [...state.value, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  slice.reducer
);

export const { addContact, deleteContact } = slice.actions;
// export const contactsReducer = slice.reducer;
export const getContacts = ({ contacts: { value } }) => value;
