export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = '8d20ab7d199d4a6787134aa1af75f370'; // Replace with your key

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
