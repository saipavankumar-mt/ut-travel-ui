import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
//import * as cors from 'cors';
import * as handlebars from 'handlebars';

import * as sgMail from '@sendgrid/mail';
import Mail = require('nodemailer/lib/mailer');

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const genericEmail = functions.https.onCall(async (data, context) => {

    const msg = {
        to: 'saipavankumar99@gmail.com',
        from: 'saipavankumar99@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            user: data.user,
        },
    };
    await sgMail.send(msg);
    return { success: true };
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().nodemailer.user,
        pass: functions.config().nodemailer.pass,
    }
});

let template = handlebars.compile(`<p style="font-size: 16px;">Hello Sales Team,</p>
<br />
<p>Below user requested quotation for {{data.user.selectedTour}}</p>
<br />
<div><p>Name : {{data.user.name}}</p></div>
<div><p>Email : {{data.user.email}}</p></div>
<div><p>Phone Number : {{data.user.phoneNumber}}</p></div>
<div><p>Passengers : {{data.user.adult}} Adults & {{data.user.children}} Childrens</p></div>
<div><p>Planned Dates : {{data.user.date}}</p></div>
<div><p>Requirements : {{data.user.requirement}}</p></div>
<br />
<p>Thanks,</p>
<p>Technical Team</p>`);

export const sendNodeMailerEmail = functions.https.onCall((data, context) => {        
    var htmlToSend = template(data);

    const mailOptions: Mail.Options = {
        from: 'Technical Team <saipavankumar99@gmail.com>',            
        subject: data.subject,
        to: 'saipavankuamr99@gmail.com',
        html: htmlToSend
    };

    // returning result
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return { error: error.toString() };
        }

        return { success: 'Mail Sent' };
    });       
});