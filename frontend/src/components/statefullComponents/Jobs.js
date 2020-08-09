import React from 'react'
import './Jobs.scss'

class Card extends React.Component {
  state = {
    jobs: {},
    loading: true
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
    return (
      <div>
        {
          this.state.jobs.length ? this.state.jobs.map((item) => {
            return (
              <div key={item.id}>
                {
                  <div className="Jobs__maincontainer">
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
