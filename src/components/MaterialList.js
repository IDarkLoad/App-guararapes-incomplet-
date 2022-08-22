import React from 'react';
import MaterialCard from "./MaterialCard";

const MaterialList = ({ contacts, getContactId }) => {

    const deleteContactHandler = (id) => {
        getContactId(id);
    };

    return (
        <>
            {contacts.length > 0 ?
                contacts.map(contact => (
                    <MaterialCard contact={contact}
                        clickHander={deleteContactHandler}
                        key={contact.id}
                    />
                )) :
                <p>Digite algum valor</p>}
        </>
    )
};


export default MaterialList;