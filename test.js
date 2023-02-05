const axios = require("axios");

function fun(){
const obj = {name: "John", age: 30, city: "New York", passwordConfirm: 12345}

    fetch('http://localhost:5000/auth/register',
    {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-Type': 'application/json'
        }
    })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}

const tum = async()=> 
{
  try {
    const obj = {name: "sandeep", age: 23, city: "Allahbad", passwordConfirm: 12345}
    const response = await axios.post('http://localhost:5000/auth/register', obj,{
        headers: 
        {
            'Content-Type': 'application/json'
        }
    }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
  
tum();



axios.get("http://localhost:5000/login", query={username: "username", "pass": "pass"}).then(res=>{console.log(res.jwttoken)}; storeToken(res.jwtToken)


// Store token in local storage
const storeToken = (jwtToken) => {
  localStorage.setItem("token", jwtToken);
  setToken(jwtToken);
};

// Retrieve token from local storage
const getToken = () => {
  const jwtToken = localStorage.getItem("token");
  setToken(jwtToken);
};