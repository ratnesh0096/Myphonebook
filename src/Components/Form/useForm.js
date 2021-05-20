import { useEffect, useState } from "react";


const useForm = (validateDetails,
    allContacts,
    setContacts,
) => {
 
    const [userRegistration, setUserRegistration] = useState(
        {
            id: "",
            phone: "",
            fname: "",
            lname: "",
            dob: "",
            occupation: "",
            email: "",
            designation: "",
            isFavourite: false
        }
    );
    const [isValid, setValidation] = useState(
        {
            phone: "",
            fname: "",
            lname: "",
            dob: "",
            occupation: "",
            email: "",
            designation: ""
        }
    );
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserRegistration({ ...userRegistration, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(isValid).length === 0) {
            const copiedContacts = [...allContacts];
            const copiedRegistraion={...userRegistration};
            copiedRegistraion.id=Date.now();
            copiedContacts.push(copiedRegistraion);
            setContacts(copiedContacts);
            alert("Contact added sucessfully.");
        }

    }, [isValid])

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidation(validateDetails(userRegistration))
    }
    return { handleSubmit, handleInput, userRegistration, isValid /*, isSubmitted */ };
};

export default useForm;