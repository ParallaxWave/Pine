export const user_db = require('quick.db');
const bcrypt = require('bcrypt');
export async function post(req, res, next){
  const data = req.body;
  const username = data.username;
  const password = await bcrypt.hash(data.password, 10);
  let success = false;
  if(!user_db.get(`user_${username}`)){
    user_db.set(`user_${username}`, {password: password});
    success = true;
  }
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({
    success: success
  }));
}
