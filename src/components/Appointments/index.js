import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AddAppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: undefined,
    date: undefined,
    filtering: false,
    appointmentList: [],
  }

  addNewAppointment = event => {
    event.preventDefault()
    const {title, date, appointmentList} = this.state
    const newAppoint = {
      id: uuidv4(),
      title,
      isStarred: false,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
    }
    this.setState({appointmentList: [...appointmentList, newAppoint]})
  }

  addstatetitle = event => {
    this.setState({title: event.target.value})
  }

  addstatedate = event => {
    this.setState({date: event.target.value})
  }

  onChangeStarred = id => {
    const {appointmentList} = this.state
    const newlist = appointmentList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isStarred: !eachItem.isStarred}
      }
      return eachItem
    })
    this.setState({appointmentList: newlist})
  }

  changefilterStar = () => {
    const {filtering} = this.state
    this.setState({filtering: !filtering})
  }

  render() {
    const {appointmentList, filtering} = this.state
    let filterdList
    if (filtering === true) {
      filterdList = appointmentList.filter(
        eachItem => eachItem.isStarred === true,
      )
    } else {
      filterdList = appointmentList
    }
    return (
      <div>
        <div className="container1">
          <form onSubmit={this.addNewAppointment}>
            <h1>Add Appointment</h1>
            <div>
              <label htmlFor="titleinput">TITLE</label>
              <br />
              <input
                type="text"
                id="titleinput"
                onChange={this.addstatetitle}
              />
            </div>
            <br />
            <div>
              <label htmlFor="dateinput">DATE</label>
              <br />
              <input type="date" id="dateinput" onChange={this.addstatedate} />
            </div>
            <button type="submit">Add</button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </div>
        <hr />
        <div className="appointmentContainer">
          <div className="listContainerHead">
            <h1>Appointments</h1>
            <button type="button" onClick={this.changefilterStar}>
              Starred
            </button>
          </div>
          <div>
            <ul className="appointmentContainerlist">
              {filterdList.map(eachItem => (
                <AddAppointmentItem
                  details={eachItem}
                  key={eachItem.id}
                  onChangeStarred={this.onChangeStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
