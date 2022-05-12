export default function search(req, res) {
  let posts
  posts = require('../../cache/data').posts

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category, classNames, plainText } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1 ||
      classNames.toLowerCase().indexOf(req.query.q) != -1 ||
      plainText.toLowerCase().indexOf(req.query.q) != -1
  )
  //   console.log(results.length)
  res.status(200).json(JSON.stringify({ results }))
}
