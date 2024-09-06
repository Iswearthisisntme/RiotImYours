import nodemailer from 'nodeemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER, // Your email address
              pass: process.env.EMAIL_PASS, // Your email password
            },
          });

          const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO, // Your email address to receive the message
            subject: `New message from ${name}`,
            text: message,
          };

          try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
          } catch (error) {
            res.status(500).json({ message: 'Error sending email', error });
          }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}