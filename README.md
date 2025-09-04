# My Portfolio

This is a Next.js portfolio project with voice input functionality in the contact form.

## Features

- Modern Next.js portfolio with TypeScript
- Voice input functionality using Web Speech API
- Responsive design with Tailwind CSS
- Dark/Light theme toggle
- Contact form with speech-to-text capability

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. From the project root directory, run:
```bash
vercel
```

3. Follow the prompts to link or create a new Vercel project.

4. Vercel will build and deploy your portfolio automatically.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.

3. Click "New Project" and import your repository.

4. Vercel will automatically detect it's a Next.js project and deploy it.

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)

2. Connect your GitHub, GitLab, or Bitbucket account

3. Select your portfolio repository

4. Vercel will handle the deployment automatically

## Voice Input Feature

The contact form includes a voice input button that uses the Web Speech API to convert speech to text. This feature:

- Works in modern browsers that support the Web Speech API
- Allows users to dictate their message instead of typing
- Appends transcribed text to the existing message
- Provides visual feedback when listening

**Note:** Voice input requires microphone permissions and works best in Chrome, Edge, and Safari.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 15.4.5
- React 19.1.0
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Radix UI components
- Web Speech API (for voice input)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Vercel Deployment Docs](https://vercel.com/docs/deployments/overview) - deployment documentation.
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - voice input documentation.
