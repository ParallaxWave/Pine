const user_db = require('quick.db');
const bcrypt = require('bcrypt');
export async function post(req, res, next){
  let success = false;
  let data = req.body;
  let username = data.username;
  let password = await bcrypt.hash(data.password, 10);
  let user = user_db.get(`user_${username}`);
  if(user){
    if(bcrypt.compare(password, user.password)){
      success = true;
    }
  }
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({
    success: success
  }));
}
