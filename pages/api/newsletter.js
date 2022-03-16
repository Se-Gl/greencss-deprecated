export default async function handler(req, res) {
  fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    method: 'PUT',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },

    body: JSON.stringify({
      contacts: [{ email: `${req.body.mail}` }],
      list_ids: [process.env.SENDGRID_MAILING_ID]
    })
  })
    .then(async (response) => {
      const data = await response.json()
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status
        return Promise.reject(error)
      }
      res.status(200).json({ message: 'Success' })
    })
    .catch((error) => {
      res.status(400).json({ message: 'Bad Request' })
      // console.error('There was an error!', error)
    })
}
