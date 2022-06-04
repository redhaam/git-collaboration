
function handleSubmit(e) {
    e.preventDefault();

    var firstName = document.contact.firstName.value;
    var lastName = document.contact.lastName.value;
    var email = document.contact.email.value;
    var message = document.contact.message.value;
    var phone = document.contact.phone.value;
  
    if (firstName.length < 3) {
      alert("first name must have more than 3 characters");
      return;
    }
  
    if (lastName.length < 3) {
      alert("last name must have more than 3 characters");
      return;
    }
  
    var emailValidator = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailValidator.test(email)) {
      alert("type a valid email");
      return;
    }
  
  
    const phoneValidator = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneValidator.test(phone)) {
      alert("phone number not valid");
      return;
    }
  
    if (message.length < 5) {
      alert("Message must have more than 5 characters");
      return;
    }
  
    document.contact.reset(); 
}
  