

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

// const users = [
//   {
//     "id":1,
//     "name":"Anne",
//     "email":"anne@example.com",
//     "password":"myPassword",
//     "mentor":false,
    
//   },

//   {
//     "id":2,
//     "name":"John Mayer",
//     "email":"john@mayer.com",
//     "password":"myPassword2",
//     "picture":"https://unsplash.com/photos/c_GmwfHBDzk",
//     "mentor":true,
//   }
  
// ]

// console.log("object::", getMentors(users));