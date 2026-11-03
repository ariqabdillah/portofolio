/**
 * Chat feedback logger for ariq-abdillah.vercel.app
 * Paste into a Google Apps Script project bound to a Google Sheet,
 * then Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 * Copy the /exec URL into Vercel as FEEDBACK_WEBHOOK_URL.
 *
 * Optional: set the same random text as SECRET below and as FEEDBACK_SECRET in Vercel,
 * so only your website can write to the sheet.
 */
const SECRET = ''; // e.g. 'ganti-dengan-teks-acak'
const SHEET_NAME = 'Feedback';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (SECRET && d.secret !== SECRET) return out({ ok: false });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(['Timestamp', 'Type', 'Value', 'Comment', 'Question', 'Answer', 'AI Provider', 'Lang']);
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), d.type, d.value, d.comment, d.question, d.answer, d.provider, d.lang]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false });
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
