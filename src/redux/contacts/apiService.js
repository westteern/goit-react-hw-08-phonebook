import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, API) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      return API.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, API) => {
    try {
      const responce = await axios.post(`/contacts`, newContact);
      return responce.data;
    } catch (error) {
      return API.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`contacts/${contactId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
