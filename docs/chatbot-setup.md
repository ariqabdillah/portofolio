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

## Update November 2026: smarter assistant

- `api/_knowledge.js` holds every fact the assistant may use (BRT details, skill levels, thesis, Nas-AI, availability). Update it whenever the site or CV changes.
- The model ends each reply with two hidden lines, `ACTIONS:` and `SUGGEST:`. `api/chat.js` (`splitReply`) strips them and returns `{ reply, actions, suggestions }`; the widget turns them into buttons (CV, WhatsApp, project, live demo) and follow-up questions. Unknown action keys are ignored.
- Job matching: a visitor can paste a job ad (up to 3,000 characters). The assistant answers with a fit score and one ✅/🟡/⚠️ line per requirement.
- Personal questions (religion, age, marital status, etc.) are declined politely.

## Visitor statistics (Vercel Web Analytics)

The page loads `/_vercel/insights/script.js`. To see visitors, open the project in Vercel → **Analytics** → **Enable** (free on the Hobby plan). Data appears after the next deploy.

## Reading job ad images (November 2026)

- The 📷 button in the chat lets a visitor upload a photo or screenshot of a job ad. The browser shrinks it to a JPEG (max ~1600 px, usually 150–400 KB) and sends it as `image: { mime, data }` with the latest message.
- `api/chat.js` passes it to Gemini as `inlineData`. If Gemini fails, Groq uses a vision model (`GROQ_VISION_MODEL`, default `meta-llama/llama-4-scout-17b-16e-instruct`; set the env var if Groq renames it).
- Only the text goes into the chat history; the image is sent once.
- `vercel.json` raises the chat function limit to 60 s because reading an image takes longer.
