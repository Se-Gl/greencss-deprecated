import axios from 'axios'

// TODO refactor - use fetch and not axios
export default async function handler(req, res) {
  if (req.method === 'PUT') {
    axios
      .put(
        'https://api.sendgrid.com/v3/marketing/contacts',
        {
          contacts: [{ email: `${req.body.mail}` }],
          list_ids: [process.env.SENDGRID_MAILING_ID]
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
          }
        }
      )
      .then((result) => {
        res.status(200).send({
          message: 'Success'
        })
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Problem'
        })
      })
  }
}
