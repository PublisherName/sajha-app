# Sajha : UK Nepali Community Hub

A React Native/Expo app for the UK Nepali community to post and browse jobs, rooms, and marketplace listings.

## Tech Stack

- **React Native** 0.81 + **Expo SDK** 54
- **Expo Router** v6 (file-based routing entry) + **React Navigation** v7 (drawer + stack)
- **Supabase** - Auth (email/password, MFA/TOTP), PostgreSQL database
- **TypeScript**, **Biome** linter, **pnpm**

## Features

- **Auth** - Sign up, log in, log out, forgot password, change password
- **2FA** - TOTP-based two-factor authentication via authenticator apps
- **Sidebar navigation** - Twitter-style drawer with profile, menu, new post
- **Listings** - Post, edit, delete jobs/rooms/market items with image picker
- **Saved listings** - Save/unsave any listing (persisted to Supabase)
- **My listings** - View and manage your own listings
- **Profile** - Edit name, phone number, notification preferences
- **Settings** - Account, notifications, privacy, appearance, support

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Fill in your Supabase credentials:

```
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Database setup

Run the SQL schemas in your Supabase SQL Editor (in order):

1. `schemas/profiles.sql` - User profiles table
2. `schemas/listings.sql` - Listings table
3. `schemas/saved_listings.sql` - Saved listings table

For existing databases, run the migrations instead:

```sql
-- schemas/profiles_migrations.sql
```

### 4. Start the app

```bash
pnpm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | Start Expo dev server |
| `pnpm android` | Start Expo dev server for Android |
| `pnpm ios` | Start Expo dev server for iOS |
| `pnpm web` | Start Expo dev server for web |
| `pnpm type:check` | Run TypeScript type checking |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Run Biome linter with auto-fix |
| `pnpm format` | Format all files with Biome |
| `pnpm check` | Run Biome checks (lint + format) |
| `pnpm check:fix` | Run Biome checks with auto-fix |
