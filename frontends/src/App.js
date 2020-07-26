import React from 'react';
import Card from './components/statefullComponents/Card'
import Listing from './components/statefullComponents/Listing'

class App extends React.Component {

  state = {
    arr : [
        {cardName: 'Card One', cardNumber: '1234567', id: 1 },
        {cardName: 'Card Two', cardNumber: '567898', id: 2 },
        {cardName: 'Card Three', cardNumber: '87654567', id: 3 },
          ],
    changeMe: 'kiran'
  }

  onChangeName = (name) => {
    this.setState({
      changeMe: name
    })
  }

  render () {

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
      </div>
      <div>
        <Card cardList={this.state.arr} change={this.state.changeMe} changeNameEvent={this.onChangeName}/>
      </div>
      <br></br><br></br><br></br><br></br>

      <Listing array={this.state.arr}/>
    </div>
  );
}
}

export default App;
