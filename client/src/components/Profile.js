import React from 'react'

function Profile(props) {
  const {avatar, buttonColor, name, Bio, university} = props
 
  return (
    <section className="Profile">
    <img className="user-picture" src={avatar} alt="" />
    <div className="user-details">
      <h4>{name}</h4>
      <h5><span id="bio">Bio:</span>{Bio}</h5>
      <h5><span id="uni">University:</span>{university}</h5>
    </div>
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="new__message text--semi-bold"
        type="text"
        placeholder="Enter Your Question Here"
      />
      </form>
   </section>
  )
}

export default Profile
