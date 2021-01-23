const user_db = require('quick.db');
export async function post(req, res, next){
  let success = true;
  let data = req.body;
  let username = data.username;
  let chats = [];
  console.log(data);
  chats = user_db.get(`user_${username}.chats`);
  //console.log(JSON.stringify(user_db.all()));
  //console.log(user_db.get(`user_${username}`));
  //console.log(chats);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({
    success: success,
    chats: chats
  }));
}
