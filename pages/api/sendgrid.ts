import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

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

const sendEmail = async (req, res) => {
  const body = JSON.parse(req.body);

  console.log('BODY IN SENDEMAIL: ', body);

  try {
    const response = await sgMail.send(body);
    console.log('Mail sent', response);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: 'Mail sent' });
};

export default sendEmail;
