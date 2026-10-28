# Outreach kaise chalana hai (sirf GitHub par)

Sab kuch GitHub par hota hai. Is folder ki files tum GitHub website par hi edit karoge: file kholo → ✏️ (Edit) → badlaav karo → **Commit changes**.

## Ek baar ka setup
1. Repo **private** rehna chahiye (abhi hai).
2. Repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `BRAVE_SEARCH_API_KEY`
   - Value: Brave Search API key ([brave.com/search/api](https://brave.com/search/api/)). Iske bina websites apne-aap nahi milengi.
3. [`campaign.json`](campaign.json) already set hai: **koi bhi industry, worldwide**.
   - `countries`: `["US","AU","CA","ALL"]`. Pehle US ki saari searches, phir Australia, phir Canada, phir baaki duniya (`ALL`). Order badalna ho toh yahi list badlo.
   - `search_queries`: kis tarah ke business dhoondhne hain (plumbing, roofing, law firm, wagairah). Add ya hata sakte ho.
   - `industry: "any"` aur `city_region: ""` matlab koi limit nahi.
   - Sender details check karo. Sahi hon toh `"sender_verified": true` karo.

## 📊 Live dashboard
Repo ke **Issues** tab mein **"📊 Outreach Dashboard (live)"** naam ka issue pehle run par apne-aap ban jaata hai. Run chalte waqt ye **har 20 second update** hota hai, aur GitHub mobile app mein bhi dikhta hai. Isme dikhta hai:
- kitni websites mili, kitni tumne approve/reject ki
- kitne forms dry run mein pass hue, kitne live submit hue
- kitno par website ne success message dikhaya, kitne unclear rahe, kitne errors aaye
- CAPTCHA wale, duplicates jo roke gaye, aur kya reconcile karna baaki hai
- latest activity aur latest submissions ki list
- replies ki ginti (neeche dekho)

Issue par 🔔 **Subscribe** kar do, toh update notification bhi aayega.

### Replies (jawab) track karna
Business ka jawab tumhare email/WhatsApp par aata hai. Tool tumhara inbox nahi padh sakta, isliye [`responses.csv`](responses.csv) mein ek line likh do:
```
domain,response,date,notes
acme.com,interested,2026-11-02,price poocha
xyz.com.au,opt_out,2026-11-03,mana kiya
```
`response` ye ho sakta hai: `replied`, `interested`, `meeting`, `client`, `not_interested`, `opt_out`. `opt_out` likhte hi wo domain hamesha ke liye suppress ho jaata hai.

## Har baar ka flow

### 1. Websites dhoondo (discovery)
1. **Actions → outreach-run → Run workflow** par jao, mode `discovery` chuno, phir **Run workflow** dabao.
2. Chalte hue job par click karo. **Process run** step mein live log dikhega: kaunsi website khuli, form mila, screenshot save hua, wagairah.
3. Job khatam hone par: branch dropdown se **`outreach-state`** chuno → `reports/` folder kholo.
   - `README.md` → overview: kitni websites mili, kitne submit hue, errors, wagairah
   - `review-queue.md` → har website ka contact page, screenshot, notes aur warnings

Kuch submit nahi hota.

### 2. Review karo
[`review.csv`](review.csv) mein har website ke liye ek line likho:

```
domain,decision,i_checked_it_is_permitted,adapter,business_name,business_name_verified,notes
acme.in,approve,yes,approve,Acme Dental,yes,official site, general enquiry form
spam-site.com,reject,,,,,not a real business
optout.in,suppress,,,,,asked not to be contacted
```

- **`decision`:** `approve`, `reject`, `suppress` (kabhi contact mat karo) ya `pending`.
- **`i_checked_it_is_permitted`:** `approve` ke liye `yes` zaroori hai. Iska matlab hai ki tumne check kiya:
  - site official hai
  - form general enquiry ka hai
  - site par "no solicitation" nahi likha
- **`adapter`:** `approve` likho jab form ki mapping theek lage.
- **`business_name`** + **`business_name_verified=yes`:** message "Hi Acme Dental team," se shuru hoga. Warna "Hi there,".

CAPTCHA wale, "no solicitation" wale, job, booking, complaint ya login forms kabhi approve nahi hote. Unhe khud manually handle karna.

### 3. Dry run (test, kuch submit nahi hota)
1. **Actions → outreach-run → Run workflow** par mode `dry_run` chuno.
2. Ye har approved form ko check karta hai aur exact message banata hai. Pass hua toh form "passed" ho jaata hai.
3. Report `reports/runs/` mein milegi.

### 4. Live run (asli submit)
1. `campaign.json` mein `"allow_live": true` karo (aur `"sender_verified": true`).
2. **Actions → outreach-run → Run workflow** par jao:
   - mode `live` chuno
   - `confirm_live` box mein **`START LIVE`** likho
3. Sirf wahi websites submit hongi jo approved hain, jinka adapter approved hai aur jo dry run mein pass hui hain.
4. Har business ko zindagi mein **sirf ek baar** message jaata hai.

### Rokna
- **Aaram se rokna:** **Actions → outreach-stop → Run workflow**. Current website khatam karke ruk jaayega.
- **Turant rokna:** chalte job par **Cancel workflow**.
  - Jo submit beech mein tha, wo "uncertain" maana jayega.
  - Reports ke `README.md` mein uska attempt ID dikhega.
  - Website ya inbox check karke [`reconcile.csv`](reconcile.csv) mein likho:
    ```
    attempt_id,outcome,notes
    <poora attempt id>,sent,checked
    ```
    `sent` = message gaya maan lo (dobara kabhi nahi bhejega). `not_sent` = pakka nahi gaya.
  - Iske bina agla live run nahi chalega.

### Records aur screenshots
- **`outreach-state` branch → `reports/runs/<run>.md`:** har attempt ka form URL, exact message, field values, confirmation text, aur teen screenshots (inspected page, filled form, after submit).
- **`reports/attempts.csv`** aur **`reports/candidates.csv`:** poora record.
- **Har job page ke neeche `outreach-evidence` artifact:** us run ki CSV + saare screenshots ka zip (30 din tak).

### Kuch galat ho toh
Job ke page par **Summary** dekho. Wahan likha hota hai ki `campaign.json`, `review.csv` ya template ki kaunsi line galat hai aur kyun.

## Templates
`templates/short.txt` aur `templates/standard.txt` (kaunsa use ho, wo `campaign.json` → `active_template` mein chuno). Format:

```
Subject: ...
Offer-Facts: $199; 16,999; negotiable
---
message ...
```

Message mein `{{service_link}}` (yaani https://devsarun.io/aeo-geo/) hona **zaroori** hai, warna template reject ho jayega. File badalte hi agle run mein naya version ban jaata hai (purane versions history mein rehte hain).
