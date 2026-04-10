export default async function handler(req, res) {
  const { tag } = req.query;
  if (!tag) return res.status(400).json({ error: 'Tag manquant' });
  try {
    const r = await fetch(`https://api.clashroyale.com/v1/clans/${encodeURIComponent(tag)}`, {
      headers: { 'Authorization': `Bearer ${process.env.CR_KEY}` }
    });
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
