# Trophi — GitHub Pages Store

A minimal static storefront for Trophi slow air-dried beef.

## What is included
- Responsive premium landing page
- Product cards
- Shopping bag / cart hooks
- Checkout integration using Snipcart
- Newsletter form placeholder using Formspree
- Mobile layout
- GitHub Pages compatible: no server required

## 1. Publish on GitHub Pages
1. Create a new GitHub repository, for example `trophi`.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save. GitHub will give you your public site URL.

## 2. Enable orders and card payments
This site is prepared for Snipcart, which works with static sites such as GitHub Pages.

1. Create a Snipcart account.
2. Add your live domain to Snipcart.
3. Configure a supported payment gateway in Snipcart.
4. Copy your **public API key**.
5. In `index.html`, replace:

`YOUR_SNIPCART_PUBLIC_API_KEY`

with your real public API key.

Your **secret** payment/API keys must never be committed to GitHub.

## 3. Change products and prices
Inside `index.html`, find each product button and edit:
- `data-item-price`
- `data-item-name`
- `data-item-description`
- `data-item-weight`

Also update the visible price shown above each button.

Current demo products:
- Trophi Classic — 50g — €8.90
- Trophi Mountain Heat — 50g — €9.40
- Trophi Mixed 6-Pack — €49.00

These are sample launch prices only.

## 4. Shipping
Configure delivery countries, rates, VAT/tax and order emails in the Snipcart dashboard before accepting live orders.

## 5. Newsletter
The newsletter form currently contains:

`https://formspree.io/f/YOUR_FORM_ID`

Replace `YOUR_FORM_ID` with your Formspree form ID, or connect another mailing platform.

## 6. Before selling food online
Before launch, replace all sample text with your final legally compliant product information, including ingredients, allergens where applicable, net weight, producer/business details, storage instructions, best-before/lot information, nutrition information where required, pricing/VAT, delivery terms, returns/cancellation rules where applicable, privacy/cookie information, and any mandatory food-business disclosures for the markets you serve.

## Custom domain
You can connect `trophi.gr` or `trophi.com` from GitHub Pages **Settings → Pages → Custom domain**, then point your DNS records to GitHub Pages according to GitHub's current instructions.
