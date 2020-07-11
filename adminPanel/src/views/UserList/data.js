let users = []
fetch('http://localhost:5200/api/customers/')
  .then(response => response.json())
  .then(response => users = response)
  .catch(error => console.log(error))

export default users
