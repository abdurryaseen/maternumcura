# MaternumCura

Responsive prenatal doula website for Medicaid and private-pay families. The site uses static HTML, CSS, and JavaScript and can be served from any static host, including GitHub Pages.

## Connect the practice's services

Set the public HTTPS URLs in [config.js](config.js).

| Setting | Destination |
| --- | --- |
| `medicaidScheduling` | Booking page for Medicaid introductory calls |
| `privateScheduling` | Booking page for private-pay introductory calls |
| `medicaidIntake` | The practice’s separate Medicaid intake portal |

Both scheduling settings can use the same booking page if the practice uses one calendar. Empty settings display an unavailable message. Keep Medicaid eligibility, intake information, and billing in the practice’s separate service. The site does not collect intake data.

### Stripe after package confirmation

Configure the payment amount and the package description in Stripe once the client confirms the package. Send that client their hosted Stripe invoice or checkout URL directly. To change the Stripe link, update or replace it in Stripe and share the new link with the client. Keep client-specific URLs and Stripe credentials out of this public repository. The website explains exactly when families can expect their payment link.

## Preview

Run `python3 -m http.server 8000` in the repository root and visit `http://localhost:8000`.

The photos in `assets/` were generated with OpenAI ImageGen for illustrative use. The brief was a warm, candid maternity photo of a Black expectant parent and partner at home and a matching portrait of a South Asian parent cradling a swaddled newborn. The childbirth education photo depicts a Black doula talking with Black and white expectant parents in a sunlit community studio.
