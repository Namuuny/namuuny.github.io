# Knowledge Hub payments — QPay & bank transfer

## Status

Official checkout is live for all three Knowledge Hub plans via:

1. **Static merchant QPay QR** (scan with any Mongolian bank app)
2. **Bank transfer** to Trade Development Bank (TDB / ХХБ)

| Plan | Amount (MNT) | Purpose tag | QR asset |
|------|--------------|-------------|----------|
| Monthly | 88,000₮ | `Sariintulbur` | `images/qpay-monthly.svg` |
| Yearly | 882,244₮ | `jiliintulbur` | `images/qpay-yearly.svg` |
| Single course | 244,000₮ | `khicheeliintulbur` | `images/qpay-single.svg` |

Merchant: **NAMUUN** · Ulaanbaatar · currency **MNT**.

### Bank transfer

- Bank: Trade Development Bank (Худалдаа Хөгжлийн Банк / TDB)
- Account: `MN470004000427007081`
- Account holder: Namuun Baatarjav / Smart City Design
- Transfer description: plan name + payer full name

Pages:

- Plans: `pay.html` / `pay-mn.html`
- Checkout: `checkout.html?plan=yearly|monthly|single` (and MN twins)

Flow: customer pays via QPay QR or TDB transfer, then emails a payment reference so access can be unlocked. No card number / CVC fields on the site.

## Later: dynamic invoices

Per-order invoices (unique amount, expiry, webhook confirmation) need:

1. QPay merchant API credentials
2. A small serverless function to create invoices and verify webhooks
3. Replacing static QR images with API-generated QR / deeplinks

Until then, the static merchant EMV QR payloads and the published TDB account are the official live path.
