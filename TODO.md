## Step that I follow to build that application

**Initial Setup**

1. Create a NextJs application with tailwind css
2. Install and setup Shadcn UI
   **Database & Drizzle ORM setup**
3. Installing Driver (`I'm using PG`)

```console
pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit
```

4. Setup docker compose on our project because I'm using docker for running PG in my local mechine
5. Setup drizzle studio
   **NextAuth setup for authentications**
6. Installing `next-auth` package
7. setup api endpoint on `app/api/auth/[...nextauth]/route.ts`
8. Setup drizzle adapter

```console
pnpm add @auth/drizzle-adapter
```
