import React from 'react'
import { Link } from 'react-router-dom'



const UserInfo = ({ company, market, location, joined, approve, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id)
  }
  return (

    <div className="row e-commerce">
      <div className="col-md-3">
        <div className="container">
          <div className="row company-flex">
            <div className="pic-box"></div>
            <div className="">{company}</div>
          </div>
        </div>
      </div>
      <div className="col-md-2">{market}</div>
      <div className="col-md-2">{location}</div>
      <div className="col-md-2">{joined}</div>
      <div className="col-md-1">
        <i className="far fa-check-square green-text"></i>
      </div>
      <div className="col-md-2 action-flex">
        <div className="pen">
          <span title='Edit'><Link to={`/edit/${id}`}><i className="fas fa-pencil-alt white-text"></i></Link></span>
        </div>
        <div className="trash">
          <span>
            <a> <i onClick={handleClick} className="far fa-trash-alt white-text" title='delete'></i> </a>

          </span>
        </div>
      </div>
    </div>

  )
}
export default UserInfo;