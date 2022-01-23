

const getMentors = (db) => {
  const mentorsArr = []
  db.map( user => {
    if (user.mentor){
      mentorsArr.push(user)
    }
  })
  return mentorsArr;
}

export default getMentors;

