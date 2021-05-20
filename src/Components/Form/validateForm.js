const validateForm = (userRegistration) => {
    console.log("Hello validation");
    let errors = {};
    if (!userRegistration.phone) {
        errors.phone = 'phone Required'
    }
    else if (userRegistration.phone.length !== 10) {
        errors.phone = 'phone required exact 10 numbers'
    }

    if (!userRegistration.fname.trim()) {
        errors.fname = 'First name required'
    }


    if (!userRegistration.lname.trim()) {
        errors.lname = 'Last name required'
    }

    if (!userRegistration.dob) {
        errors.dob = 'Date of birth Required'
    }

    if (!userRegistration.occupation) {
        errors.occupation = 'Occupation Required'
    }

    if (!userRegistration.email) {
        errors.email = 'Email required'
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userRegistration.email)) {
        errors.email = 'Invalid Email'
    }

    if (!userRegistration.designation) {
        errors.designation = 'Designation Required'
    }
    return errors;
};

export default validateForm;