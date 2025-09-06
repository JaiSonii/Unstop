# Unstop Frontend Assessment

A responsive frontend application built with **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**.  
Implements authentication, protected routes, form validation, and profile view as per the Unstop assessment requirements.

---

## Features
- **Authentication**
  - Login form with username, email, and password fields
  - Validation:
    - Username must be `emilys`
    - Email must be a valid format (e.g. `example@gmail.com`)
    - Password must be at least 8 characters
  - “Remember me” option
  - Dummy API integration (`https://dummyjson.com/auth/login`)
- **OAuth Buttons**: Google & Facebook (UI only, no backend binding)
- **Auth Flow**
  - Redirects to `/home` on successful login
  - Redirects to `/auth/login` if not authenticated
  - Logout clears tokens and returns to login
- **Protected Routes**
  - Middleware redirects `/` → `/auth/login`
  - `/home` guarded by auth state
- **Responsive UI**
  - Mobile-first layout, optimized for small screens (e.g. Galaxy Z Fold)
  - Flex-based layout that adapts for desktop

---

## Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📂 Project Structure
