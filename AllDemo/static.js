class user {
  static usercount = 0;
  constructor(username) {
    this.username = username;
    user.usercount++;
  }
}
const user1 = new user("spongebob");
console.log(user1.username);
console.log(user.usercount);
