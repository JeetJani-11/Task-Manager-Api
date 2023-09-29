var postmark = require("postmark");


postmark.apikey = process.env.API_KEY
var client = new postmark.ServerClient("0ad59dec-cd2e-4050-bd28-9cb572335465");

const sendWelcomeEmail = (email , name) => {
  client.sendEmail({
    "From": "202251060@iiitvadodara.ac.in",
    "To": email,
    "Subject": "Welcome to Task-Manager",
    "TextBody": `Welcome to the app , ${name} . Let me know how you get along with the app .`,
    "MessageStream": "broadcast"
  })
}

const sendCancelEmail = (email , name) => {
  client.sendEmail({
    "From": "202251060@iiitvadodara.ac.in",
    "To": email,
    "Subject": `GoodBye ${name}`,
    "TextBody": `GoodBye , ${name} .Is there anything we could have done to have kept you on board.`,
    "MessageStream": "broadcast"
  })
}

module.exports = {
  sendWelcomeEmail  ,
  sendCancelEmail
}
