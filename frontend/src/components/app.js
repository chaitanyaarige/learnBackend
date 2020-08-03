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

  updateLsit = (data) => {
    console.log('data', data)
    const idOFdata = this.state.arr.findIndex(item => item.id === data.id)
    console.log('data', idOFdata)
    this.setState((prevState) => {
      console.log('af', prevState)
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

      <Listing array={this.state.arr} update={this.updateLsit} />
    </div>
  );
}
}

export default App;
