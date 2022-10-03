$(document).ready(function () {
  
  $(".contact-forms").validate({
    rules: {
      name: {
       lettersonly: true,
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      contact: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 200,
      },
    },
    messages: {
      name: {
        minlength: "Minimum 5 characters without space",
        required: "This field is required",
      },
      email: {
        email: "Please enter a valid Email id",
        required: "This field is required"
      },
      contact: {
        minlength: "Please enter a valid contact number",
        maxlength: "Please enter a valid contact number",
        required: "This field is required"
      },
      message: {
        minlength: "Its too short! minimum 10 characters",
        maxlength: "Oh no! it's too large",
        required: "This field is required"
      },
    },
    submitHandler: function (form) {
      console.log("True");
      console.log("in function submit");
      submit();
    },
  });
});
function submit() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbze8kJOWOhSnq6FPHXiKgOL9zByNIouTd0wn94BI8nmrK7vVfb0P3VjhTgDN9MYqhRU/exec",
    data: $(".contact-forms").serialize(),
    method: "POST",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
}
