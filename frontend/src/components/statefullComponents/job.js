import React from 'react';

class Jobs extends React.Component {
  state = {
    jobs : {},
    isLoading: true
  }


  getJobs() {
    fetch('https://5cac1d41c85e05001452eef0.mockapi.io/jobs')
    .then(response => response.json())
    .then(response => {
      this.setState({jobs: response.jobs})
      this.setState({isLoading: false})
    })
  }

  async componentDidMount () {
    await this.getJobs()
  }

  render () {
    // console.log(this.state.jobs, this.state.isLoading)
       let job = !this.state.isLoading ? this.state.jobs.map(item => {
        return(
        <div>
            {item.id}
        </div>
      )}
    ) : {}

    return(
      !this.state.isLoading && job ?
      <div>
        {job.id}
      </div> : <div> fjdfhldf</div>
      )
  }
}

export default Jobs
