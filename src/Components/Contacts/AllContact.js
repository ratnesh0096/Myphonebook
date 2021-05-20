import React, { useEffect, useState } from 'react';
import './style.css';
const AllContacts = ({ allContacts,
    favourite,
    setFavourite,
    setContacts,
}) => {
    const [searchText, setSearchText] = useState("");
    const [serchedObject, setSearchedObject] = useState(() => []);
    useEffect(() => {
        const copiedContacts = [...allContacts];
        copiedContacts.sort((a, b) => {
            let fa = a.fname.toLowerCase(),
                fb = b.fname.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setContacts(copiedContacts);
    }, [])

    useEffect(() => {
        const searchedContacts = allContacts.filter(object =>
            object.fname.toLowerCase().includes(searchText.toLowerCase()) ||
            object.lname.toLowerCase().includes(searchText.toLowerCase()) ||
            object.email.toLowerCase().includes(searchText.toLowerCase()) ||
            object.occupation.toLowerCase().includes(searchText.toLowerCase()) ||
            object.dob.toLowerCase().includes(searchText.toLowerCase()) ||
            object.designation.toLowerCase().includes(searchText.toLowerCase()) ||
            object.phone.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedObject(searchedContacts);
    }, [searchText])

    const handleClick = (id) => {
        const copiedContacts = [...allContacts];
        const index = copiedContacts.findIndex((contact) => id === contact.id);
        copiedContacts[index].isFavourite = true;
        setContacts(copiedContacts);
        const copiedFavourite = [...favourite];
        copiedFavourite.push(copiedContacts[index]);
        setFavourite(copiedFavourite);
    }
    const searchContact = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div className="allContacts">
            <h1>All Contacts</h1>
            <input
                type="text"
                value={searchText}
                onChange={searchContact}
                placeholder="Search contact"
                className="searchBox"
            />
            <h4>{searchText && <h2>Following might be your searched contacts</h2>}</h4>
            {!searchText &&
                <div className="contactDiv">{
                    allContacts.map((contact) => {
                        return <>
                            <div className="contactCard">
                                <h4 key={Date.now()}>
                                    {contact.fname + " " + contact.lname}
                                </h4>
                                <p> Phone : {contact.occupation} </p>
                                <p> {contact.phone} </p>
                                <p> {contact.dob} </p>
                                <p> {contact.email} </p>
                                <p> {contact.designation} </p>
                                <button
                                    className={!contact.isFavourite ? "favButton" : "hidden"}
                                    onClick={() => handleClick(contact.id)}>Favourite
                                </button>
                            </div>
                        </>
                    })
                }</div>
            }
            {searchText &&
                <div className="contactDiv">{
                    serchedObject.map((contact) => {
                        return <>
                            <div className="contactCard">
                                <h4 key={Date.now()}>
                                    {contact.fname + " " + contact.lname}
                                </h4>
                                <p> Phone : {contact.occupation} </p>
                                <p> {contact.phone} </p>
                                <p> {contact.dob} </p>
                                <p> {contact.email} </p>
                                <p> {contact.designation} </p>
                                <button
                                    className={!contact.isFavourite ? "favButton" : "hidden"}
                                    onClick={() => handleClick(contact.id)}>Favourite
                                </button>
                            </div>
                        </>
                    })
                }</div>
            }
        </div>
    );
};

export default AllContacts;