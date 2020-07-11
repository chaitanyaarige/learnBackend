let users = []
fetch('http://localhost:5200/api/users/')
  .then(result => {
    // this.users = result.data
    console.log(result)
  })
  .catch(error => console.log(error))

export default users
