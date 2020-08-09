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
        <div className="Jobs__maincontainer">
          <div className="Jobs__gridcontainer">
            <div className="Jobs__serialNumber Jobs__topHeader">
              Serial Number
            </div>
            <div className="Jobs__serialNumber Jobs__topHeader">
              Employee Name
            </div>
            <div className="Jobs__serialNumber Jobs__topHeader">
              Employee Age
            </div>
            <div className="Jobs__serialNumber Jobs__topHeader">
              Employee Salary
            </div>
          </div>
        </div>

        {
          this.state.jobs.length ? this.state.jobs.map((item) => {
            return (
              <div className="Jobs__maincontainer" key={item.id}>
                {
                  <div className="Jobs__gridcontainer">
                    <div className="Jobs__serialNumber">
                      {item.id}
                    </div>
                    <div className="Jobs__serialNumber">
                      {item.employee_name}
                    </div>
                    <div className="Jobs__serialNumber">
                      {item.employee_age}
                    </div>
                    <div className="Jobs__serialNumber">
                      {item.employee_salary}
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
