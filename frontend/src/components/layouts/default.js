import React from 'react';
import Card from '../statefullComponents/Card'
import Listing from '../statefullComponents/Listing'
import Jobs from "../statefullComponents/Jobs"

class Apps extends React.Component {

  state = {
    arr : [
        {cardName: 'Card One', cardNumber: '1234567', id: 1 },
        {cardName: 'Card Two', cardNumber: '567898', id: 2 },
        {cardName: 'Card Three', cardNumber: '87654567', id: 3 },
          ],
    changeMe: 'myyyy'
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
      <Jobs></Jobs>
      <Listing array={this.state.arr} update={this.updateLsit} />
      <Card cardList={this.state.arr} change={this.state.changeMe} changeNameEvent={this.onChangeName}/>
    </div>
  );
}
}

export default Apps;
