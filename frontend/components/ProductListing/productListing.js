import React from 'react';
// import ReactDOM from 'react-dom';

class productListing extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      jhgf: [],
      // users: {
      //   full_name: '',
      //   email: '',
      //   phone: '',
      //   address: '',
      //   city: '',
      //   street:'',
      //   country: ''
      // }
    }
  }

  async getData() {
    await fetch('http://localhost:5200/api/customers/')
      .then(response => response.json())
      .then(response => {
          this.setState({ jhgf: response.data })
          console.log(this.state.jhgf)
        })
      .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div class="main__container">
        {this.state.jhgf.map(hit =>
          <div class="border__container" key={hit.objectID}>
            <div>Name: <span class='title'> {hit.full_name} </span> </div>
            <div>Email: {hit.email} </div>
            <div>Phone: {hit.phone} </div>
            <div>City: {hit.city}</div>
            <div>Country: {hit.country} </div>
          </div>
        )}
    </div>
    )
  }
}

export default productListing;

