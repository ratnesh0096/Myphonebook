import React from 'react';
import './style.css';

const Favourite = ({ allContacts, favourite, setFavourite, setContacts }) => {
    const handleClick=(id)=>{
        const copiedContacts=[...allContacts];
        const index=copiedContacts.findIndex((contact)=>id===contact.id);
        copiedContacts[index].isFavourite=false;
        setContacts(copiedContacts);
        const copiedFavourite=[...favourite];
        const findex=copiedFavourite.findIndex((contact)=>id===contact.id);
        // alert(findex);
        copiedFavourite.splice(findex,1);       
        setFavourite(copiedFavourite);
    }
    return (
        <div className="allContacts">
            <h1>Favourite</h1>
            <div className="contactDiv">{
                    favourite.map((contact) => {
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
                                {contact.isFavourite && <button className="favButton unfavButton" onClick={() => handleClick(contact.id)}>Un-Favourite</button>}
                            </div>
                        </>
                    })
                }</div>
        </div>
    );
};

export default Favourite;