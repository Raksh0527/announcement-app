# Shopify Announcement App

A custom Shopify embedded application that allows merchants to create announcements and store them in both MongoDB and Shopify metafields. This project extends the official Shopify React Router template with custom backend logic, database integration, and Shopify GraphQL API usage.

---

## Features

- Embedded Shopify Admin Application
- Create and manage announcements
- Store announcements in MongoDB database
- Sync announcements to Shopify metafields using GraphQL API
- Shopify OAuth authentication using Shopify App Bridge
- Prisma session storage for Shopify sessions
- Secure backend API with Express + Node.js

---

## Tech Stack

- React Router (Frontend + Routing)
- Node.js (Backend runtime)
- Express (Server framework via Shopify CLI)
- MongoDB (Mongoose ORM)
- Prisma (Session storage)
- Shopify App Bridge
- Shopify GraphQL Admin API

---

## Project Structure

announcement-app/
│
├── app/
│ ├── routes/
│ │ ├── app.jsx
│ │ ├── app._index.jsx
│ │ ├── api.announcement.jsx
│ │
│ ├── lib/
│ │ └── mongodb.js
│ │
│ ├── models/
│ │ └── Announcement.js
│ │
│ └── shopify.server.js
│
├── prisma/
│ └── schema.prisma
│
├── extensions/
├── .env
├── package.json
├── vite.config.js
└── README.md



---
## Environment Variables

Create a `.env` file in the root directory and add the following:


SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_APP_URL=your_app_url
SCOPES=write_products,read_products
MONGODB_URI=your_mongodb_connection_string
SHOP_CUSTOM_DOMAIN=optional


---

## How to Run This Project

### 1. Clone the repository


git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd announcement-app


---

### 2. Install dependencies


npm install


---

### 3. Generate Prisma client


npx prisma generate


---

### 4. Setup environment variables

Create a `.env` file and configure all required keys:


SHOPIFY_API_KEY=your_shopify_api_key_here
SHOPIFY_API_SECRET=your_shopify_api_secret_here
SHOPIFY_APP_URL=https://your-app-url.com
SCOPES=write_products,read_products
MONGODB_URI=your_mongodb_connection_string_here
SHOP_CUSTOM_DOMAIN=optional


---

### 5. Run development server


npm run dev


or


shopify app dev


---

### 6. Open the application

- Shopify CLI will provide a development URL
- Install the app on a Shopify development store
- Open the embedded app inside Shopify Admin

---

## How It Works

1. User installs the Shopify app
2. Opens embedded admin dashboard
3. Creates an announcement
4. Clicks Save
5. Data is stored in:
   - MongoDB database
   - Shopify metafields via GraphQL API

---

## API Flow

- Authentication handled via `authenticate.admin()`
- MongoDB connection via `connectDB()`
- Announcement stored using Mongoose model
- Shopify metafield updated using GraphQL mutation

---

## Important Notes

- Do not commit `.env` file
- Do not push `node_modules`
- Requires Node.js 20+ (22 LTS recommended)
- Shopify CLI is required for development

---

## Author

Rakshith

---

## License

This project is for educational and portfolio purposes only
