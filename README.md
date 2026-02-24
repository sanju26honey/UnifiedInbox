# UniBox: Messaging, Reimagined with AI

**UniBox** is a powerful communication platform designed to eliminate the friction of multi-channel outreach. By combining a smart AI-driven editor with direct API integrations, it allows users to compose, track, and manage campaigns across WhatsApp and SMS from a single, streamlined dashboard.

---

Live Demo: [https://unified-inbox-beta.vercel.app/](https://unified-inbox-beta.vercel.app/)

Note: To test Whatsapp messaging using the Twilio sandbox, send ```join dozen-fellow``` to ```+14155238886``` through Whatsapp.

---
## Highlights & Features

* **AI-Powered Editor:** Generate professional message hooks and content based on your brand voice and campaign goals.
* **Multi-Channel Support:** Toggle seamlessly between WhatsApp and SMS outreach.
* **Real-time Activity Feed:** Stay updated with a "Recents" sidebar tracking every sent message and status update.
* **Responsive Experience:** A mobile-first design featuring a "Thumb-Zone" optimized floating navigation bar.
* **Zero Friction Onboarding:** Clean, modern UI with a glassmorphism aesthetic for a premium feel.

---

## Tech Stack

* **Frontend:** [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/)
* **Database & ORM:** [Prisma](https://www.prisma.io/) with PostgreSQL
* **AI Engine:** Gemini API
* **Styling:** TailwindCSS

---

## Setup Steps

### 1. Prerequisites

Ensure you have **Node.js** and **npm/pnpm** installed.

### 2. Clone the Repository

```bash
git clone https://github.com/sanju26honey/unifiedinbox.git
cd unifiedinbox

```

### 3. Install Dependencies

```bash
npm install

```

---

## Environment Variables

Create a `.env` file in the root directory with the following information:

```env
NEXTAUTH_SECRET
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
GEMINI_API_KEY
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_WHATSAPP
TWILIO_PHONE

```

---

## How to run locally

### 1. Initialize Prisma

Generate the client and push your schema to the database:

```bash
npx prisma generate
npx prisma db push

```

### 2. Run Locally

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## Deployment (Vercel)

1. Push your code to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com).
3. Add your `.env` variables in the Vercel Project Settings.
4. **Important:** Ensure your build command includes `npx prisma generate`. In `package.json`, set:
* `"postinstall": "prisma generate"`


5. Deploy!
