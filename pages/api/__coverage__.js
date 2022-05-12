export default function __coverage__(req, res) {
  return res.status(200).json({
    coverage: global.__coverage__ || null
  })
}
