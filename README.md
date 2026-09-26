# SHAHZAIB Milk Shop

A mobile-first Next.js, TypeScript and Tailwind storefront for pickup orders through WhatsApp.

## Live Website

[Visit SHAHZAIB Milk Shop](https://local-shop-ordering-system.vercel.app/)

Hosted on Vercel. Browse products, prepare your order, and send it through WhatsApp for pickup from the shop.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` then `npm start`.

## Customize

- `data/business.ts`: shop name, address, phone, WhatsApp number (international digits only), hours and map links. Replace demo details before accepting orders and set `isDemo` to false.
- `data/products.ts`: product names, descriptions, prices in PKR, pack sizes, categories, images and availability. Quantities refer to the displayed pack size; e.g. 2 × 500 g jalebi is 1 kg.
- `app/layout.tsx`: SEO and local business structured data. Replace sample location and metadata for the real shop.
- `components/shop.tsx`: sample testimonials and brand presentation.
- `app/globals.css`: colors, typography and responsive styling.

Images are illustrative Unsplash placeholders. Replace them with accurate shop photography, especially snack varieties, before publishing. Sample testimonials are explicitly labeled, and the map shows a demo area rather than a verified shop.

The basket is saved locally on the customer's browser. WhatsApp opens a prepared message; the customer must send it and the shop confirms availability, prices and pickup time. There are no accounts or online payments.

Validation: `npm run typecheck` and `npm run build`.
