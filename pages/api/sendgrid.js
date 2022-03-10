import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${process.env.SENDGRID_EMAIL}`,
      from: `${process.env.SENDGRID_EMAIL}`,
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>omenCSS Mail</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
    
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            <div style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
              </div>
              <img src="https://www.omen.design/images/brand/omencss_logo_dark.svg" style="height: 50px;width: 50px;border-radius: 12.5px;overflow: hidden;">
              <p style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #101010;">Regards<br>Se Gl<br>omenCSS<br></p>
              <div style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.omen.design" style="text-decoration: none;margin: 8px;color: #101010;">Website</a>
                <a href="https://www.omen.design/blog/" style="text-decoration: none;margin: 8px;color: #101010;">Blog</a>
                <a href="https://www.omen.design/docs/" style="text-decoration: none;margin: 8px;color: #101010;">Documentation</a>
                <a href="https://github.com/Se-Gl/omencss" style="text-decoration: none;margin: 8px;color: #101010;">GitHub</a>
                <a href="https://linkedin.com/in/segl/" style="text-decoration: none;margin: 8px;color: #101010;">LinkedIn</a>
                <a href="https://twitter.com/omenCSS" style="text-decoration: none;margin: 8px;color: #101010;">Twitter</a>
              </div>
            </div>
        </div>
      </body>
    </html>`
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
