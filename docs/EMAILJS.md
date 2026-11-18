# Appointment requests with EmailJS

The booking page (`/book-appointment`) sends appointment requests by email using
[EmailJS](https://www.emailjs.com/) directly from the browser. There is **no backend**:

- requests are **not stored** anywhere except the email the hospital receives;
- there is **no appointment management or admin dashboard**; staff confirm by phone or email;
- a request is never shown as "confirmed": the page and emails say it awaits confirmation.

The form only works once the steps below are done. Until then it shows patients a polite
"not available at the moment" message with the hospital phone number. Nothing is faked.

## 1. Create the EmailJS service

1. Create a free account at <https://www.emailjs.com/> (ideally signed in as the hospital).
2. **Email Services → Add New Service → Gmail**, connect `victoryspecialist1960@gmail.com`.
3. Note the **Service ID**.

## 2. Hospital notification template (required)

**Email Templates → Create New Template**, then set:

| Setting | Value |
|---|---|
| Subject | `New Appointment Request – Victory Specialist Hospital ({{reference}})` |
| To Email | `victoryspecialist1960@gmail.com` (fixed here, so visitors cannot change the recipient) |
| From Name | `Victory Specialist Hospital Website` |
| Reply To | `{{reply_to}}` (replying goes straight to the patient) |

Content (switch the editor to code/HTML view and paste):

```html
<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;color:#1e2a3a;">
  <h2 style="color:#0a2a52;margin:0 0 8px;">New appointment request</h2>
  <p style="margin:0 0 16px;padding:10px 12px;background:#fff4e5;border-left:4px solid #e08a00;">
    <strong>Status: {{request_status}}.</strong> Please contact the patient to confirm or arrange a suitable date and time.
  </p>
  <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:14px;">
    <tr><td style="color:#5b6b7f;width:40%;">Request reference</td><td><strong>{{reference}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Patient name</td><td><strong>{{patient_name}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Phone number</td><td><strong>{{patient_phone}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Email address</td><td><strong>{{patient_email}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Patient status</td><td>{{patient_status}}</td></tr>
    <tr><td style="color:#5b6b7f;">Consultation type</td><td><strong>{{consultation_type}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Specialty</td><td>{{specialty}}</td></tr>
    <tr><td style="color:#5b6b7f;">Preferred date</td><td><strong>{{preferred_date}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Preferred time</td><td><strong>{{preferred_time}}</strong></td></tr>
    <tr><td style="color:#5b6b7f;">Additional information</td><td>{{additional_info}}</td></tr>
    <tr><td style="color:#5b6b7f;">Submitted</td><td>{{submitted_at}}</td></tr>
  </table>
</div>
```

Note the **Template ID**.

## 3. Patient acknowledgement template (optional)

Create a second template:

| Setting | Value |
|---|---|
| Subject | `Appointment Request Received - Victory Specialist Hospital` |
| To Email | `{{patient_email}}` |
| From Name | `Victory Specialist Hospital` |
| Reply To | `victoryspecialist1960@gmail.com` |

```html
<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;color:#1e2a3a;line-height:1.6;">
  <p>Hello {{patient_name}},</p>
  <p>Thank you for choosing Victory Specialist Hospital.</p>
  <p>We have received your appointment request (reference <strong>{{reference}}</strong>):</p>
  <ul>
    <li>Consultation: {{consultation_type}} ({{specialty}})</li>
    <li>Preferred date: {{preferred_date}}</li>
    <li>Preferred time: {{preferred_time}}</li>
  </ul>
  <p>Our hospital team will review your request and contact you to confirm your appointment date and time.</p>
  <p><strong>Please note: this email confirms that we received your request. It does not mean your appointment has been confirmed.</strong></p>
  <p>For further assistance, call Victory Specialist Hospital on <a href="tel:{{hospital_phone}}">{{hospital_phone}}</a>.
     If you need urgent medical care, do not wait for a reply: come to the hospital or call us.</p>
  <p>Thank you for trusting us with your healthcare needs.</p>
  <p><strong>Victory Specialist Hospital</strong><br>
     Providing Trusted, Continuous Secondary Healthcare to Ijebu Igbo Since 1991.</p>
</div>
```

Note its **Template ID**. Each acknowledgement uses one extra email from your EmailJS quota,
so check your plan's monthly limit.

## 4. Add the keys to the website

Copy `.env.example` to `.env` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx          # Account > General > Public Key
VITE_EMAILJS_PATIENT_TEMPLATE_ID=template_yyyyyy   # optional
```

Rebuild (`npm run build`) after changing these: Vite builds them into the website. On a hosting
platform (Netlify, Vercel, etc.), add the same variables in its environment settings instead.

The public key is designed for browser use. The private key and account password are **never**
needed by the website and must not be added.

## 5. Protect the form (EmailJS dashboard)

- **Account → Security**: restrict requests to your website's domain if your plan offers it, and
  set a rate limit.
- Keep the template's **To Email** fixed (step 2), so the form cannot be used to email others.
- The website already ignores headless (automated) browsers, limits one request every 10 seconds
  per browser, and includes a hidden spam-trap field.

## 6. Test before going live

1. Submit a request on the live site with your own email address.
2. Check the hospital inbox (and Spam the first time) for the notification, and your inbox for the
   acknowledgement.
3. Check the EmailJS dashboard **History** page shows the sends.

Template variables sent by the website: `reference`, `request_status`, `patient_name`,
`patient_phone`, `patient_email`, `patient_status`, `consultation_type`, `specialty`,
`preferred_date`, `preferred_time`, `additional_info`, `submitted_at`, `reply_to`,
`hospital_name`, `hospital_phone` (see `src/lib/appointmentEmail.js`).
