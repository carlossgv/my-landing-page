import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (req, res) => {
  let body = JSON.parse(req.body);

  body = {
    ...body,
    from: process.env.SENDGRID_FROM_EMAIL,
    to: process.env.SENDGRID_FROM_EMAIL,
    subject: process.env.SENDGRID_SUBJECT,
  };
  console.log('BODY IN SENDEMAIL: ', body);

  try {
    const response = await sgMail.send(body);
    console.log('Mail sent', response);
  } catch (error) {
    console.log('ERROR: ', JSON.stringify(error, null, 2));
  }

  res.status(200).json({ message: 'Mail sent' });
};

export default sendEmail;
