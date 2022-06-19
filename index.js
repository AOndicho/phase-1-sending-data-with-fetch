// Add your code here

const response = document.querySelector("#response");
const message = document.querySelector("#error");
const user = {
  name: "Steve",
  email: "steve@steve.com",
};
const userObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(user),
};

function submitData() {
  fetch("http://localhost:3000/users", userObject)
    .then((response) => response.json())
    .then((data) => {
      console.log(response);
      response.innerHTML = `${data.id}`;
    })
    .catch((error) => {
      message.innerHTML = `${error}`;

      console.log(error);
    });
}

// submitData()

//
