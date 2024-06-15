import './index.css'

const AddAppointmentItem = props => {
  const {details, onChangeStarred} = props
  const {title, date, id, isStarred} = details
  const changestar = () => {
    onChangeStarred(id)
  }
  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="listItem">
      <div className="listContainer">
        <div className="listhead">
          <h2 className="headinglist">{title}</h2>
          <buttton data-testid="star" type="buttton" onClick={changestar}>
            <img src={starImg} alt="star" />
          </buttton>
        </div>
        <p className="listdate">Date: {date}</p>
      </div>
    </li>
  )
}

export default AddAppointmentItem
