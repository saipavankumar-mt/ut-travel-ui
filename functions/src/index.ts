import * as functions from 'firebase-functions';

import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;


export const genericEmail = functions.https.onCall(async (data, context) => {
    sgMail.setApiKey(API_KEY);
    console.log(data);
    const msg = {
        to: 'sales@uttranchalholidays.com',
        from: 'admin@uttranchalholidays.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            user: data.user,
        },
    };
    return await sgMail.send(msg).then(() => {
        return { success: true };
      })
      .catch(e => {
          console.error(e);
        return { error: e.toString() };
      });
});
