//task 9
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const password = "P@ssw0rd";

const isValid = regex.test(password);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}

//task 10
// Define the regular expression to validate a URL
const regex1 = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

// Define a test URL
const url = "https://www.example.com/path/to/resource?query=param#fragment";

// Validate the URL
const isValid1 = regex1.test(url);

// Log whether the URL is valid
if (isValid1) {
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}
