import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  let body = JSON.parse(req.body);

  body = {
    ...body,
    from: process.env.SENDGRID_FROM_EMAIL,
    to: process.env.SENDGRID_FROM_EMAIL,
    subject: process.env.SENDGRID_SUBJECT,
  };

  await sgMail.send(body);

  res.status(200).json({ message: "Mail sent" });
};

export default sendEmail;
