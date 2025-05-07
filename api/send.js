// Questo file sarà eseguito da Vercel come funzione serverless

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.MY_EMAIL,
        subject: `${subject} - from ${name}`,
        reply_to: email,
        text: message,
      });
  
      return res.status(200).json({ message: 'Message sent successfully! ✅' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Submission failed ❌' });
    }
};
  
