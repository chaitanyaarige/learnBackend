import React from 'react'
import './listing.css'


class Card extends React.Component {
  state = {
    showFormField: null,
    cardName: '',
    cardNumber: '',
    jobs: {},
    loading: true
  }

  changeName = () => {
    // this.props.changeNameEvent(this.state.name)
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

  async componentDidMount() {
    await this.getJobs()
  }

  async getJobs() {
    const response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const data = await response.json()
    this.setState({ jobs: data.data })
    this.setState({ loading: false })
  }

  render() {
    // return (
    //   <div>
    //     {
    //       this.props.array.map((item) => {
    //         return (
    //           <div key={item.id}>
    //             {
    //               this.state.showFormField === item.id ? (
    //                 <div>
    //                   <input type="text" value={this.state.cardName} onChange={this.changeCardName}/><br />
    //                   <input type="text" value={this.state.cardNumber} onChange={this.changeCardNo}/> <span onClick={this.cancelEdit}>X</span> <button onClick={() => this.saveDetails(item.id)}>save</button>
    //                 </div>
    //               ) : (
    //                 <div>
    //                   <span>{item.cardName}</span>&nbsp;<span>{item.cardNumber}</span> <button onClick={() => this.showForm(item)}>edit</button> <button>delete</button>
    //                 </div>
    //               )
    //             }

    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    // )


    return (
      <div>
        {
          this.state.jobs.length ? this.state.jobs.map((item) => {
            return (
              <div key={item.id}>
                {
                  <div className="maincontainer">
                    <div>
                      {item.id}
                    </div>
                    <div>
                      {item.employee_name}
                    </div>
                  </div>
                }

              </div>
            )
          }) :
            <div>
              fdfd
            </div>
        }
      </div>
    )
  }
}

export default Card
