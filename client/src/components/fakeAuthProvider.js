
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuthProvider;
