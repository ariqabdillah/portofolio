# Live Chat Bot: Setup

The chat bubble works right away with FAQ buttons, the "Tebak Insight" game, and WhatsApp/Email buttons. Free-text AI answers turn on once the API keys are added in Vercel.

## 1. Gemini API key (main AI)
1. Open https://aistudio.google.com/apikey and sign in with a Google account.
2. Click **Create API key** and copy the key.

## 2. Groq API key (backup when Gemini's quota runs out)
1. Open https://console.groq.com/keys and sign up (free, no card needed).
2. Click **Create API Key** and copy the key.

## 3. Add the keys to Vercel
Vercel → project **ariq-abdillah** → **Settings** → **Environment Variables**:

| Name | Value |
|---|---|
| `GEMINI_API_KEY` | the key from step 1 |
| `GROQ_API_KEY` | the key from step 2 |

Then open **Deployments**, click the three dots on the newest deployment, and choose **Redeploy** so the keys take effect.

Optional: `GEMINI_MODEL` / `GROQ_MODEL` change the model if the default model is retired (defaults: `gemini-2.5-flash`, `llama-3.3-70b-versatile`).

## 4. (Optional) Feedback to Google Sheets
1. Create a new Google Sheet, then **Extensions → Apps Script**.
2. Paste the contents of `docs/feedback-apps-script.gs` and save.
3. **Deploy → New deployment →** type **Web app**, Execute as **Me**, Who has access **Anyone** → Deploy and grant access.
4. Copy the URL ending in `/exec` and add it in Vercel as `FEEDBACK_WEBHOOK_URL`, then Redeploy.
5. The **Feedback** sheet fills with 👍/👎, star ratings, comments, and quiz scores.

## How it works
- `api/chat.js`: Gemini first. If it errors or the quota runs out, it switches to Groq. If both fail, the chat shows the FAQ buttons and WhatsApp.
- `api/_knowledge.js`: the facts the bot is allowed to use. **Update this file whenever the portfolio changes.**
- `api/feedback.js`: forwards feedback to Apps Script. The keys never appear in the browser.
