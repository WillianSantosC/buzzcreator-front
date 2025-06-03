# BuzzCreator Front

**BuzzCreator Front** is a web application developed with Next.js and TypeScript, designed to manage a book catalog and facilitate orders through a public e-commerce interface. The admin panel provides product management functionalities such as adding, editing, and deleting books.

---

## Backend

This frontend consumes the API available in the repository: **[buzzcreator-back](https://github.com/WillianSantosC/buzzcreator-back)**

---

## Features

- **Public display** of the book catalog
- **Book filtering** by author and title
- **Shopping cart** with state management via Zustand
- Simplified **order flow**
- **Admin panel** for book CRUD
- Action feedbacks with **React Hot Toast**
- Responsive layout with **PandaCSS**
- Consumes RESTful API via **fetch**

---

## Technologies Used

- **Next.js** + **TypeScript** (framework and typing)
- **PandaCSS** (styling)
- **Zustand** (cart state management)
- **React Hook Form** (forms, if applicable)
- **Fetch** (API consumption)
- **Vercel** (deployment)
- **ESLint** + **Prettier** (code standardization)
- **Storybook** (documentation)
- **Jest** + **React Testing Library** (testing)
- **Husky** + **Lint-staged** (pre-commit validation)
- **Github Actions** (CI/CD)

---

## Architecture and Technical Decisions

- **Framework**: Chose **Next.js** to leverage hybrid rendering (SSG and SSR) and automatic performance optimization.
- **Typing**: **TypeScript** is used throughout the codebase to increase safety and facilitate maintenance.
- **Styling**: **PandaCSS** was adopted for fast, responsive, and consistent styling, eliminating the need for complex CSS files.
- **State Management**: **Zustand** is used as a lightweight and efficient solution for global cart state, avoiding Redux complexity.
- **Organization**: Clear separation between components (`components`), pages (`templates`), style configuration (`styles`), documentation (`storybook`), and state stores (`store`).
- **React Hot Toast**: provides fast and user-friendly notifications.
- **Husky** + **Lint-staged**: used for pre-commit code validation, ensuring quality and consistency.
- **Jest** + **React Testing Library**: adopted for component testing, ensuring application stability.
- **Deployment**: Carried out via **Vercel**, taking advantage of direct integration with GitHub repositories and native support for Next.js.
- **Authentication**: Authentication is implemented using **JSON Web Tokens (JWT)**, where the backend generates a signed token with user information upon successful login. Token validation occurs both on the frontend (for UI control and redirects) and backend (for protected API validation).

  > Due to **compatibility issues and cookie restrictions when deploying frontend and backend on different domains**, the JWT token is stored in the browser's **localStorage**. This approach simplifies token access in the frontend without the common CORS and SameSite issues of cross-site cookies, simplifying the authentication flow.

  > **Important:** However, for local environments and testing, there is an alternative version that uses **HTTP-only cookies**, which is more secure for production. This version is available in the `with-cookies` branches in both the backend and frontend. The `main` branches remain configured for authentication via localStorage.

---

## Useful Scripts

```bash
# Development environment
pnpm dev

# Production build
pnpm build

# Run the compiled application
pnpm start

# Lint to check style and errors
pnpm lint

# Run all tests
pnpm test

# Run Storybook to access documentation
pnpm storybook
```

---

## How to Run the Project Locally

### Prerequisites

- Node.js 22+
- PNPM (recommended)
- Backend application running

### 1. Clone the repository

```bash
git clone https://github.com/WillianSantosC/buzzcreator-front.git
&&
cd buzzcreator-front
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file at the project root with the following content:

```env
NEXT_PUBLIC_API_URL=https://buzzcreator-back.onrender.com
JWT_SECRET=your_secret_key
```

> Adjust the `NEXT_PUBLIC_API_URL` variable according to the environment: localhost or production.

---

## How to Use

1. Start the development server:

```bash
pnpm dev
```

2. Access in your browser:

```
http://localhost:3000
```

> The application will automatically reload whenever you make changes to the files.

---

## API Documentation

The documentation is automatically generated with Storybook and can be accessed at:

```
http://localhost:6006
```

---

## Deployment

This project was deployed on the **Vercel** platform.

🔗 Access the application in production:
**[https://buzzcreator-front.vercel.app](#)**
