# Referral System

This repository contains a referral system built with **Node.js**, **TypeScript**, **PostgreSQL**, and **Redis**.  The project allows subscribing to events, tracking invites and ranking users.

## 🚀 Technologies

- **Node.js** – JavaScript runtime for the backend.
- **TypeScript** – Static typing for better security and scalability.
- **PostgreSQL** – Relational database for storing structured data.
- **Redis** – Used for managing the referral ranking and tracking link clicks using hashes and sorted sets.
- **Fastify** – Framework for building the REST API.
- **Drizzle ORM** – Database management with efficient queries and easy migration generation.
- **Docker** – Containers to easily create development environment.

## 📌 Features

- Subscribe to events referring the user who indicated.
- Access invite links redirecting to web page URL.
- Tracking clicks on invite links.
- Count a user's invites by referrals in subscriptions.
- Ranking users by invites.
- REST API documented with Swagger.

## 📦 How to Run the Project

### Prerequisites

- Node.js (>= 18.x)
- Docker

### Steps to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/daniel-sm/nlw-connect-nodejs.git
```

2. Enter to project folder:

```bash
cd nlw-connect-nodejs/server
```

3. Install dependencies:

```bash
pnpm install
```

4. Set up environment variables:  
   Copy the .env.example file to .env and adjust it as needed.

5. Start services with Docker:

```bash
docker compose up -d
```

6. Run database migrations:

```bash
pnpm exec drizzle-kit migrate
```

7. Start the server:

```bash
pnpm dev
```

The API will be available at http://localhost:3333.

## 📖 Documentation

The API documentation is avaliable via Swagger at http://localhost:3333/docs.
