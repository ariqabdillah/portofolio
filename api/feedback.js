// Forwards chat feedback (👍/👎, star ratings, quiz scores) to a Google Apps Script
// web app that appends a row to a Google Sheet. See docs/chatbot-setup.md.
// Env vars: FEEDBACK_WEBHOOK_URL (Apps Script /exec URL), FEEDBACK_SECRET (optional, must match the script).
const clip = (v, n) => (v === undefined || v === null) ? '' : String(v).slice(0, n);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  const url = process.env.FEEDBACK_WEBHOOK_URL;
  if (!url) return res.status(204).end();

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  const type = ['vote', 'rating', 'quiz'].includes(b.type) ? b.type : null;
  if (!type) return res.status(400).json({ error: 'type' });

  const row = {
    secret: process.env.FEEDBACK_SECRET || '',
    type,
    value: clip(b.value, 20),
    comment: clip(b.comment, 500),
    question: clip(b.question, 500),
    answer: clip(b.answer, 1000),
    provider: clip(b.provider, 20),
    lang: b.lang === 'id' ? 'id' : 'en'
  };
  try {
    await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(row) });
  } catch (e) {
    console.error('feedback forward failed:', e && e.message);
  }
  return res.status(204).end();
};
