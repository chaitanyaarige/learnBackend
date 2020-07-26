import React from 'react'

class Card extends React.Component {
  state = {
    name: 'Chaitanya'
  }

  changeName = () => {
    this.props.changeNameEvent(this.state.name)
  }


  render () {

    const {cardList, change} = this.props;

    const list = cardList.map((card, index) => {
      return (
          <div key={index}>
            {/* <h3>{index + 1}</h3> <h3>{card.cardName} {card.cardNumber}</h3> */}
            {
              index !== 1 ? (
                <div>{card.cardName}</div>
              ) : ('asdfghj')
            }
          </div>
        )
      })

    return (
      <div className="Card">
        {this.state.name.toUpperCase()}
        <br />

        <h1>{change}</h1> <button onClick={this.changeName}>change name</button>

        {/* <h2>{this.props.cardList}</h2> */}

        {list}
        {this.state.name === 'kiran' ? 'yes': 'no'}

      </div>
    )
  }
}

export default Card
