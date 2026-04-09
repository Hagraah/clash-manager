export default async function handler(req, res) {
  const { tag } = req.query;
  const key = req.headers['x-api-key'];
  if (!tag || !key) return res.status(400).json({ error: 'Paramètres manquants' });
  try {
    const r = await fetch(`https://api.clashroyale.com/v1/clans/${encodeURIComponent(tag)}`, {
      headers: { 'Authorization': `Bearer ${key}` }
    });
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
