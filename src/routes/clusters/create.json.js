export const db = require('quick.db');
export async function post(req, res, next){
  const data = req.body;
  const groupName = data.groupName;
  const creator = data.creator;
  let success = false;
  if(!db.get(`group_${groupName}`)){
    db.set(`group_${groupName}`, {messages: [], users: [creator]});
    db.push(`user_${creator}.chats`, groupName);
    console.log(db.get(`user_${creator}`));
    success = true;
  }
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({
    success: success
  }));
}
