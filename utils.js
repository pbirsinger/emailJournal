
function sendEmail(email, subject, body){
	console.log("Sending email to %s ...", email);
	var Mailgun = require('mailgun').Mailgun;
    var mg = new Mailgun('key-ec80cc905bae764f07a8cb4496b01f5f');

    mg.sendText(email,
        'pcbss91@gmail.com',
        subject,
        body,
        function(err) { err && console.log(err) }
    );
}

function storeEmail(email, body, timestamp){
    console.log("Storing email from %s ...", email);
}

exports.sendEmail = sendEmail;
exports.storeEmail = storeEmail;