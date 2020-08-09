import React from 'react'


class Card extends React.Component {
  state = {
    showFormField: null,
    cardName: '',
    cardNumber: ''
  }

  changeName = () => {
    this.props.changeNameEvent(this.state.name)
  }

  showForm = (item) => {
    this.setState({
      showFormField: item.id,
      cardName: item.cardName,
      cardNumber: item.cardNumber
    })
  }

  cancelEdit = () => {
    this.setState({
      showFormField: null
    })
  }

  changeCardName = (e) => {
    this.setState({
      cardName: e.target.value
    })
  }

  changeCardNo = (e) => {
    this.setState({
      cardNumber: e.target.value
    })
  }

  saveDetails = (id) => {
    const data = {
      cardName: this.state.cardName,
      cardNumber: this.state.cardNumber,
      id: id
    }
    this.props.update(data)
  }

  render() {
    return (
      <div>
        {
          this.props.array.map((item) => {
            return (
              <div key={item.id}>
                {
                  this.state.showFormField === item.id ? (
                    <div>
                      <input type="text" value={this.state.cardName} onChange={this.changeCardName}/><br />
                      <input type="text" value={this.state.cardNumber} onChange={this.changeCardNo}/> <span onClick={this.cancelEdit}>X</span> <button onClick={() => this.saveDetails(item.id)}>save</button>
                    </div>
                  ) : (
                    <div>
                      <span>{item.cardName}</span>&nbsp;<span>{item.cardNumber}</span> <button onClick={() => this.showForm(item)}>edit</button> <button>delete</button>
                    </div>
                  )
                }

              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Card
