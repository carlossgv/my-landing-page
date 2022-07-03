import sgMail from '@sendgrid/mail';

type MailPayloadType = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};

const msg = {
  to: 'carlossgv@gmail.com', // Change to your recipient
  from: 'carlossgv@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const sendMail = async (msg: MailPayloadType) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }

  console.log('Mail sent');
};

sendMail(msg);

export default sendMail;
