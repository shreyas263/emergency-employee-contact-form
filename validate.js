function validate() {
    // Get the form elements
    const form = document.forms["emergencyEmployeeContactForm"];
    const requiredFields = [
        "employee_fname",
        "employee_lname",
        "employee_id",
        "email",
        "phone",
        "primary_contact_fname",
        "primary_contact_lname",
        "primary_contact_email",
        "primary_contact_phone"
    ];

    // Check required text fields
    for (let field of requiredFields) {
        if (form[field].value.trim() === "") {
            alert(`Please fill out the ${field.replace(/_/g, " ")} field.`);
            form[field].focus();
            return false;
        }
    }

    // Check if employee ID is a valid number
    const employeeID = form["employee_id"].value;
    if (isNaN(employeeID) || employeeID <= 0) {
        alert("Please enter a valid Employee ID.");
        form["employee_id"].focus();
        return false;
    }

    // Check email format
    const emailFields = ["email", "primary_contact_email", "secondary_contact_email", "physician_email"];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    for (let field of emailFields) {
        if (form[field] && form[field].value && !emailPattern.test(form[field].value)) {
            alert(`Please enter a valid email address for ${field.replace(/_/g, " ")}.`);
            form[field].focus();
            return false;
        }
    }

    // Check phone number format
    const phoneFields = ["phone", "primary_contact_phone", "secondary_contact_phone", "physician_phone"];
    const phonePattern = /^\d{10}$/; // Assuming a 10-digit format
    for (let field of phoneFields) {
        if (form[field] && form[field].value && !phonePattern.test(form[field].value)) {
            alert(`Please enter a valid 10-digit phone number for ${field.replace(/_/g, " ")}.`);
            form[field].focus();
            return false;
        }
    }

    // Check that a sex option is selected
    if (![...form["sex"]].some(radio => radio.checked)) {
        alert("Please select a gender.");
        form["sex"][0].focus();
        return false;
    }

    // Check that a blood group is selected
    if (form["blood_group"].value === "-1") {
        alert("Please select a blood group.");
        form["blood_group"].focus();
        return false;
    }

    // Check that a department is selected
    if (form["Department"].value === "-1") {
        alert("Please select a department.");
        form["Department"].focus();
        return false;
    }

    // Check that a state is selected
    if (form["state"].value === "-1") {
        alert("Please select a state.");
        form["state"].focus();
        return false;
    }

    // Check that a primary emergency relationship is selected
    if (relationship === "-1") {
        alert("Please select a valid relationship.");
        return false; // Prevent form submission
    }// If everything is valid, allow the form to be submitted
    return true;
}