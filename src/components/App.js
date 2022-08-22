import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import AddMaterial from "./AddMaterial";
import MaterialList from "./MaterialList";
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addMaterialHandler = (contact) => {
    const newUser = { id: uuidv4(), ...contact }
    console.log("fufu", contact,newUser);
    setContacts(old => [...old, newUser]);
  };

  const removeContactHandler = (id) => {
    const newMaterialList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newMaterialList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddMaterial AddMaterialHandler={addMaterialHandler}/>
      <MaterialList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;