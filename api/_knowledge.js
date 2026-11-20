// Facts the assistant may use. Keep in sync with index.html and the CV when anything changes.
// Files starting with "_" are not exposed as Vercel functions.
module.exports = `
PROFILE
- Name: Ariq Abdillah. Lives in Tanjung Morawa, Deli Serdang (Medan area), North Sumatra, Indonesia.
- Open to administration, finance/accounting and data roles (any of these; not only data analyst). Also open to operations, warehouse, store and similar entry roles.
- Availability: can start immediately. Ready to relocate anywhere in Indonesia, including Java, Kalimantan, and mine or plantation sites. Willing to work shifts and night shifts and to live in a company mess.
- Driving: has a motorcycle licence (SIM C) and his own motorcycle. For anything about car licences or equipment he must bring, refer to Ariq directly.
- Languages: Indonesian (native); English at a basic level.
- Salary expectation, interview times, age, religion, marital status, health and other personal matters: not in these facts. Refer to Ariq directly.

CONTACT
- WhatsApp: 0813-2132-124 (+62 813-2132-124, https://wa.me/628132132124)
- Email: ariqabdillah2424@gmail.com
- LinkedIn: https://www.linkedin.com/in/ariq-abdillah/
- CV: "Resume"/"CV" button on the site (Indonesian CV in ID mode, English CV in EN mode).

SKILLS (be precise about level, never inflate)
- Administration & finance: petty cash records, weekly payroll for daily workers (overtime, cash advances, deductions), foreman bill verification against work volume and unit rates, weekly fund requests, cost reports, daily progress reports, document filing on Google Drive.
- Microsoft Excel: intermediate, still learning, not an expert. Uses IF/COUNTIF/SUMIF, VLOOKUP/XLOOKUP, PivotTables, charts, report templates with formulas.
- Google Sheets + Google Apps Script: built 2 working web apps (payroll, petty cash) with AI assistance.
- SQL: Google BigQuery and SQLite (RevoU training and internship).
- Python (pandas, NumPy, matplotlib, scikit-learn): training level from RevoU; used in course and internship projects.
- Tableau Public dashboards: from RevoU training and internship.
- EViews: panel data regression for his thesis. Financial statement analysis (coursework and thesis).
- Works daily with AI tools (Claude, ChatGPT, Gemini) to plan, write and build.
- NOT yet experienced with accounting software (Accurate, Jurnal, SAP, etc.) or POS systems: he is ready to learn them. Never claim otherwise.
- Coursework: cost accounting, management accounting, financial statement analysis.

EXPERIENCE
1) Project Admin & Site Coordinator, On-Site Execution Team (partner to PT Prima Indo Sentosa), Medan, Jul 2026 – Oct 2026.
   Project: BRT Jl. Sisingamangaraja underground utility relocation (infrastructure).
   - Managed the needs of a team of up to 23 daily workers: attendance, weekly pay (overtime, cash advances, deductions), meal and fuel allowances, mess, tools and materials.
   - Built the project's petty cash record format from scratch and prepared weekly fund requests to PT Prima Indo Sentosa based on work progress.
   - Measured the foreman's excavation length together with PT Prima Indo Sentosa and its Project Manager; this was the basis for paying the foreman every Saturday. Reported daily progress.
   - When weekly funds fell short, he found mismatches in the foreman's work and negotiated the foreman's bill down by about 48%, so every daily worker still got paid. (Never state Rupiah amounts for this.)
   - Led site operations (Jul–Sep 2026) while his supervisor was away (the supervisor only monitored via WhatsApp for weeks): assigned daily tasks, approved purchases, decided whether work continued (e.g. in bad weather), supervised night shifts.
   - Coordinated an emergency repair at 2 a.m. after a utility pole fell on the project route due to an accident, until the work was finished that morning.
   - Built Excel report templates with formulas (costs, excavation progress, materials) and a daily report database linked to scanned documents on Google Drive.
   - Built payroll and petty cash web apps that the current BRT project admin uses EVERY DAY. Ariq asked the admin for feedback on anything missing; so far there have been no complaints. (This is a fact, not a quoted testimonial: do not invent quotes.)
2) Data Analyst (Virtual Internship), RevoU x Telkom Indonesia, remote, May 2026 – Jun 2026.
   - Cleaned and unified 122,749 transaction records from 4 channels (WhatsApp, SMS, Email, Call) for 20 corporate clients with SQL in Google BigQuery.
   - Built a Tableau Public dashboard (revenue, monthly trends, peak hours, delivery, engagement, client risk).
   - Python Pareto segmentation: 3 power accounts (15% of clients) generated 59.8% of revenue (IDR 16.5M of IDR 27.6M).
   - Selected as one of the presenters: presented the 90-day client strategy (Protect, Strengthen, Grow, Expand) to the Head of Analytics at Telkom Indonesia via Zoom.
3) Founder & Head of Analysis, Nas-AI Data Analytics Center (personal startup, since Oct 2026, pre-release, no clients yet). See projects.
4) Family business (ongoing): his parents make home-made frozen chicken risol; Ariq handles the business side and sells to friends and acquaintances, often by phone. No formal records; online selling is only planned. Mention only if asked about sales or business experience, and describe it honestly as small and informal.
5) Earlier freelance data entry: typed handwritten data into spreadsheets (year not recorded).

EDUCATION
- Bachelor of Management (S1 Manajemen), finance concentration, Universitas Harapan Medan. Graduated Aug 2025, GPA 3.39/4.00.
- Thesis (2025): factors affecting stock returns of banks listed on the Indonesia Stock Exchange, 2019–2023. Variables CAR, ROE and LDR; 10 of 47 banks (purposive sampling); secondary data from annual reports; panel data regression in EViews with Chow, Hausman and LM tests. Result: CAR and ROE had a significant positive effect on stock returns; LDR did not.

CERTIFICATES (RevoU, issuer PT Revolusi Cita Edukasi, verifiable on certificates.revou.tech)
- Certificate of Excellence, Full-Stack Data Analytics, 28 weeks, June 26, 2026, No. NDA24-2026-06-031. Modules (all PASS): Data Exploration Sprint; Finance Industry Application (SQL on loan portfolio data); Virtual Internship Project 1: Dashboarding; Virtual Internship Project 2: Clustering.
- Certificate of Achievements, Full-Stack Data Analytics, 14 weeks, March 6, 2026, No. FSDA-2026-03-38664224539. Modules (all PASS): Understanding Business Problems; Statistics & Spreadsheet (incl. A/B testing); SQL; Python for Data Analyst; Data Visualization (Tableau).

PROJECTS (Projects tab, in this order; ids in brackets are for action buttons)
[nasai] Nas-AI Data Analytics Center: AI Data Analyst Team for SMEs (personal startup, since Oct 2026, pre-release, no clients yet)
   - Problem: many Indonesian SMEs (UMKM) have sales data but no analyst. Ariq designed a team of AI agents (CrewAI) that works like a data analyst division: 10 stages from business questions to recommendations.
   - Ariq's role: Founder & Head of Analysis. He owns the product concept, designs the workflow and quality standards, and directs and tests the AI agents. He does not write the code himself; the code was written with AI assistance.
   - Rules: doubtful values go to a "needs confirmation" list, never guessed; every change is logged; numbers are calculated by Python/SQL, and a separate checker recomputes report numbers against the database.
   - Results so far: data-cleaning precision 90.3%–100% on 6 practice datasets with answer keys; report numbers verified 15 of 16; a full rehearsal produced a report and deck for about USD 0.21 in AI cost, meeting 4 of 5 pass criteria.
   - Next: pass a blind v1.0 exam on new sales data, then offer a free "Profit Check" report to 5 online sellers for feedback. Weakest area: avoiding causal claims the data cannot prove.
   - Links: https://nasdac.my.id ; sample report (fictional data) https://nasdac.my.id/contoh-laporan.html
[payroll] Weekly Payroll System for Daily Workers (Google Sheets + Apps Script mobile web app; in use since Oct 2026)
   - Attendance, overtime, cash advances and weekly pay in one place; replaced an error-prone manual Excel recap (formula errors, half days paid as full days).
   - Safeguards: flags unusual dates, carries unpaid balances forward, late entries recorded as corrections, locks a week after payment, role-based PIN access; PDF reports, WhatsApp pay details, email reminders.
   - Results matched an earlier manual payroll report; every change must pass 17 automated pay-rule checks. Used every day by the BRT project admin, no complaints so far.
   - Live demo (fictional data, resets nightly): PIN 1111 = owner, 2222 = foreman.
[pettycash] Project Petty Cash System (Google Sheets + Apps Script mobile web app; in use since Nov 2026)
   - Cash in/out from a phone, running balance, monthly PDF + Excel reports; audit trail for edits/deletes, monthly lock, separate PIN per project, daily Drive backups and restore.
   - Core calculations passed 37 automated checks. Used every day by the BRT project admin, no complaints so far.
   - Live demo (fictional data, resets nightly): PIN 1111 = owner, 2222 = admin project A, 3333 = admin project B.
[ocasegmentation] OCA User Behavior & Client Segmentation (RevoU x Telkom internship; data adjusted for education)
   - 20 corporate clients, 122,749 transactions over 3 months, 3 rule-based segments (Power >20K tx, Active 6K–20K, Regular <6K).
   - Top 3 clients = 59.8% of revenue (IDR 16.5M) -> concentration risk. Top channel WhatsApp (40.7%). Peak hours 08:00–17:00. Top industries: Travel, Finance, Real Estate.
   - 90-day plan: Protect & Strengthen (days 0–30), Grow (31–60), Expand (61–90). Presented to Telkom's Head of Analytics.
[ocaperformance] OCA Messaging Performance Dashboard (SQL BigQuery + Tableau)
   - 122,749 records; revenue IDR 27.6M; delivery success 79.5%; engagement 38.38%. Monthly volume fell 49.5K -> 35.5K; the Email drop explained ~86% of it. SMS 99.7% delivery but 0.0% engagement; WhatsApp engagement 51.1%. Flagged 5 at-risk clients (activity down 23.5%–36.1%).
[revobank] RevoBank Credit Card Customer Segmentation (K-Means case study)
   - 6-month window; net profit IDR 5.83B; fraud losses IDR 1.01B (~0.22% of transaction value but ~14.8% of MDR income); 4 clusters, silhouette 0.467; DTI used as a post-clustering risk filter.
[creditech] Credit Card Default Risk Analysis (public UCI Taiwan 2005 dataset)
   - 30,000 clients, default rate 22.1%; high-risk vs others 60% vs 17% (3.5x); default jumps 13.8% -> 33.9% with 1 month delay -> 69.1% at 2 months. Logistic Regression ROC-AUC 0.695 (for interpretation). Recommendation: use latest payment status (PAY_0) as a monthly screening trigger.

STRONGEST EVIDENCE BY ROLE TYPE (use for job matching)
- Admin / finance / accounting / payroll / cashier: BRT petty cash format from scratch, weekly payroll for up to 23 workers, foreman bill checks and ~48% negotiation, weekly fund requests, payroll and petty cash apps in daily use, finance degree.
- Data / reporting / MIS: RevoU Certificate of Excellence, 122,749-record SQL cleaning, Tableau dashboard, 59.8% Pareto finding, Telkom presentation, Nas-AI, Excel reporting.
- Operations / site / warehouse / logistics: led site operations, daily reports, materials and tools, night shifts, 2 a.m. emergency repair, joint measurement with the client, willing to be placed at remote sites.
- HR / people admin: attendance and payroll for daily workers, pay breakdowns sent to each worker, coordination of a field team.
`;
