function ContactEmail({ className = 'fill-green-9' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' className={className}>
      <circle cx='32' cy='32' r='31.5' stroke='none'></circle>
      <path
        fill='#3E7A02'
        d='M22 24v16h20V24H22zm7.981 9.7L32 35.267l2.019-1.567L39.4 38H24.6l5.381-4.3zM24 35.919v-6.875l4.357 3.389L24 35.919zm11.643-3.486L40 29.045v6.874l-4.357-3.486zM40 26v.511l-8 6.222-8-6.222V26h16z'></path>
    </svg>
  )
}

export default ContactEmail
