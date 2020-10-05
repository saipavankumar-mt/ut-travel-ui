import * as functions from 'firebase-functions';

import * as sgMail from '@sendgrid/mail';

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