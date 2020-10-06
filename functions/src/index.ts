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

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().nodemailer.user,
        pass: functions.config().nodemailer.pass,
    }
});

let template = handlebars.compile(`<p style="font-size: 16px;">Hello Sales Team,</p>
<br />
<p>Below user requested quotation for {{selectedTour}}</p>
<br />
<div><p>Name : {{name}}</p></div>
<div><p>Email : {{email}}</p></div>
<div><p>Phone Number : {{phoneNumber}}</p></div>
<div><p>Passengers : {{adult}} Adults & {{children}} Childrens</p></div>
<div><p>Planned Dates : {{date}}</p></div>
<div><p>Requirements : {{requirement}}</p></div>
<br />
<p>Thanks,</p>
<p>Technical Team</p>`);

export const sendNodeMailerEmail = functions.https.onCall(async (data, context) => {        
    var htmlToSend = template(data.user);

    const mailOptions: Mail.Options = {
        from: 'saipavankumar99@gmail.com',            
        subject: data.subject,
        to: 'saipavankumar99@gmail.com',
        html: htmlToSend
    };

    // returning result
    await transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return { error: error.toString() };
        }

        return { success: 'Mail Sent' };
    });       
});