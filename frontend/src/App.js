import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jhgf: [],
      users: {
        full_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        street:'',
        country: ''
      }
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
      <div>
        <ul>
        {this.state.jhgf.map(hit =>
          <li key={hit.objectID}>
            {hit.city} ,  {hit.country}
          </li>
        )}
      </ul>
    </div>
    )
  }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
