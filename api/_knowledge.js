// Facts the assistant may use. Keep in sync with index.html when the portfolio changes.
// Files starting with "_" are not exposed as Vercel functions.
module.exports = `
PROFILE
- Name: Ariq Abdillah. Role sought: Junior Data Analyst.
- Based in Medan, North Sumatra, Indonesia. Open to relocation, on-site, or remote roles.
- Background: Management graduate (finance concentration) with hands-on finance and field operations experience; trained in data analytics at RevoU.
- Tools: SQL (Google BigQuery), Python (pandas, NumPy, matplotlib, scikit-learn, K-Means clustering with Elbow & Silhouette), Tableau Public dashboards, Excel and Google Sheets, Google Apps Script, Google Drive.
- Finance skills: petty cash control, weekly payroll for daily workers, foreman billing/invoice verification, cost reporting; coursework in cost accounting, management accounting, financial statement analysis.

CONTACT
- WhatsApp: +62 838-6667-2738 (https://wa.me/6283866672738)
- Email: ariqabdillah2424@gmail.com
- LinkedIn: https://www.linkedin.com/in/ariq-abdillah/
- Tableau Public: https://public.tableau.com/app/profile/ariq.abdillah/vizzes
- CV: downloadable from the "CV"/"Resume" button on the site (CV_Ariq_Abdillah.pdf).

EXPERIENCE
1) Project Admin & Site Coordinator — On-Site Execution Team, partner to PT Prima Indo Sentosa, Medan (Jul 2026 – Oct 2026).
   Project: BRT Jl. Sisingamangaraja underground utility relocation infrastructure project.
   - Petty cash control: recorded site expenses and prepared weekly fund requests from recorded spending.
   - Foreman billing checks: checked bills against work volume and unit rates, including cash advance and lost material deductions, before payment.
   - Weekly payroll for daily workers: calculated and paid weekly wages incl. overtime, cash advances and deductions; sent each worker a pay breakdown.
   - On-site coordination (Jul–Sep 2026) when the project lead was away: assigned daily tasks, approved purchases and expenses, decided whether work continued in bad weather.
   - Excel reporting: templates with formulas for costs, excavation progress and materials, plus a daily report database linked to scanned documents on Google Drive.
2) Data Analyst (Virtual Internship) — RevoU x Telkom Indonesia, remote (May 2026 – Jun 2026).
   - Cleaned, normalized and unified 122,749 transaction records across 4 channels (WhatsApp, SMS, Email, Call) for 20 corporate accounts using SQL in Google BigQuery.
   - Built an interactive Tableau Public dashboard (revenue, monthly trends, peak hours, delivery, engagement, client risk).
   - Python Pareto segmentation: 3 power accounts (15% of clients) generated 59.8% of revenue (IDR 16.5M of IDR 27.6M).
   - Selected presenter: presented the 90-day client strategy (Protect, Strengthen, Grow, Expand) to the Head of Analytics at Telkom Indonesia via Zoom.

EDUCATION
- Bachelor of Management (Finance Concentration), Universitas Harapan Medan. Graduated Aug 2025. GPA 3.39/4.00.
- Thesis: Factors Influencing Stock Returns of Banking Corporations on the Indonesia Stock Exchange (IDX).

CERTIFICATES (RevoU, issuer PT Revolusi Cita Edukasi, verifiable on certificates.revou.tech)
- Certificate of Excellence, Full-Stack Data Analytics, 28 weeks, June 26, 2026, No. NDA24-2026-06-031. Modules (all PASS): Data Exploration Sprint; Finance Industry Application (SQL on loan portfolio data); Virtual Internship Project 1: Dashboarding (multi-channel dashboard); Virtual Internship Project 2: Clustering (client usage segmentation).
- Certificate of Achievements, Full-Stack Data Analytics, 14 weeks, March 6, 2026, No. FSDA-2026-03-38664224539. Modules (all PASS): Understanding Business Problems; Statistics & Spreadsheet (incl. A/B testing); SQL; Python for Data Analyst; Data Visualization (Tableau).

PROJECTS (see "Case Studies & Projects" tab)
1) OCA User Behavior & Client Segmentation (RevoU x Telkom virtual internship; data adjusted for education)
   - 20 corporate clients, 122,749 transactions over 3 months, 3 rule-based segments: Power Users (>20K tx, avg revenue IDR 5.5M), Active Users (6K–20K tx), Regular Users (<6K tx).
   - Top 3 clients = 59.8% of revenue (IDR 16.5M) and 60% of transactions -> concentration risk. Top channel WhatsApp (40.7%). Peak hours 08:00–17:00. Top industries: Travel (IDR 5.90M), Finance (IDR 5.87M), Real Estate (IDR 5.83M).
   - Rule-based segmentation chosen because only 20 clients with clear volume gaps.
   - 90-day plan: Protect & Strengthen (days 0–30), Grow (31–60), Expand (61–90). Selected to present to Telkom's Head of Analytics.
2) OCA Messaging Performance Dashboard (SQL BigQuery + Tableau)
   - 122,749 records combined; total revenue IDR 27.6M; delivery success 79.5%; engagement 38.38%.
   - Monthly volume fell 49.5K -> 35.5K; Email dropped 20K -> 8K, explaining ~86% of the decline.
   - SMS 99.7% delivery but 0.0% recorded engagement; WhatsApp leads engagement at 51.1%.
   - WhatsApp (IDR 11.9M) and SMS (IDR 11.8M) generate ~86% of revenue. Risk table flagged 5 clients with activity down 23.5%–36.1%, incl. one top-3 revenue client.
3) Weekly Payroll System for Daily Workers (personal project, live pilot since Oct 2026, used by an admin and a foreman)
   - Google Sheets + Apps Script mobile web app for attendance, overtime, cash advances and weekly pay; replaces an error-prone manual Excel recap.
   - Safeguards: flags unusual dates, carries unpaid balances forward, late entries recorded as corrections, locks a week after payment; role-based PIN access; PDF reports, WhatsApp pay details, email reminders.
   - Results matched an earlier manual payroll report; every change must pass 17 automated pay-rule checks. Next: measure time saved and error reduction.
   - LIVE DEMO anyone can try (fictional data, no emails sent, resets nightly): https://script.google.com/macros/s/AKfycbxcI778j5B3bCdCCLIU5QHEnBb02Xx7lmfbHvRk8_xokU4IgccgxgZUkR0Qsin6cu5T/exec — PIN 1111 = owner, 2222 = foreman. Also linked on the Projects tab ("Live Demo").
4) Project Petty Cash System (personal project, live pilot since Nov 2026 with 1 field admin)
   - Mobile web app on Google Sheets + Apps Script to record cash in/out, running balance, monthly PDF + Excel reports.
   - Audit trail for edits/deletes, monthly lock after report, separate PIN per project, daily Drive backups and restore.
   - Core calculations passed 37 automated checks. Next: complete first monthly cycle and measure reporting time.
   - LIVE DEMO anyone can try (fictional data, no emails sent, resets nightly): https://script.google.com/macros/s/AKfycbyxXbAA-6cdYfueiiE6dwUG2fGqVsgzLKGSIeaCNLhcJzPA48Wlm6qqNsRKO_kDNPku/exec — PIN 1111 = owner, 2222 = admin project A, 3333 = admin project B. Also linked on the Projects tab ("Live Demo").
5) RevoBank Credit Card Customer Segmentation (K-Means, portfolio case study)
   - 6-month behavior window; net profit IDR 5.83B; fraud losses IDR 1.01B; silhouette 0.467 at k=4.
   - Fraud is ~0.22% of transaction value but ~14.8% of MDR income. Clustering on spend, transaction count, credit limit; DTI used as a post-clustering risk filter.
   - Personas: High-Value Spenders (avg 6M spend IDR 791.4M, 1,025 tx), High-Capacity Growers (avg limit headroom IDR 260.9M), plus two more personas targeted with cashback and re-engagement.
6) Credit Card Default Risk Analysis (CrediTech, public UCI Taiwan 2005 dataset)
   - 30,000 clients, default rate 22.1%, 4 payment-behavior segments, Logistic Regression for interpretation (ROC-AUC 0.695).
   - High-risk vs others default: 60% vs 17% (3.5x). Default jumps 13.8% (on-time) -> 33.9% with 1 month delay -> 69.1% at 2 months.
   - Severely Late segment had the lowest limits yet highest default (63%). Threshold 0.5: recall 52%, precision 50%; 0.3: recall 92.6%, precision 23.1%.
   - Recommendation: use latest payment status (PAY_0) as a monthly risk screening trigger.
`;
