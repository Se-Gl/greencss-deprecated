const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const URL = process.env.BASE_URL

const handler = async (req, res) => {
  const { amount } = req.body

  const items = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Sponsor greenCSS`
        },
        unit_amount: amount * 100
      },
      quantity: 1
    }
  ]

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    success_url: `${URL}/payment-successful`,
    cancel_url: URL
  })

  res.status(200).json({ id: session.id })
}

export default handler
