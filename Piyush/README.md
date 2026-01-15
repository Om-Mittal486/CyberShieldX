# CyberShieldX - AI-Powered Cybercrime Investigation Platform

CyberShieldX is an AI-powered cyberbullying detection and cybercrime investigation platform built with Next.js, React, TypeScript, and Supabase.

## 🚀 Quick Start Guide

Follow these steps to run the project on your local machine:

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Om-Mittal486/CyberShieldX.git
cd CyberShieldX/Piyush
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 16.1.2
- React 19
- TypeScript
- Supabase client
- Tesseract.js (OCR)
- Recharts (analytics)
- jsPDF (report generation)
- And more...

### Step 3: Set Up Supabase Database

#### Option A: Use Supabase (Recommended for Full Features)

1. **Create a Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for a free account

2. **Create a New Project**
   - Click "New Project"
   - Enter project name (e.g., "CyberShieldX")
   - Set a strong database password
   - Choose a region close to you
   - Wait for the project to be created (~2 minutes)

3. **Run the Database Schema**
   - In your Supabase dashboard, go to **SQL Editor**
   - Click "New Query"
   - Copy the entire contents of `supabase/schema.sql` from this project
   - Paste it into the SQL editor
   - Click "Run" to create all tables and security policies

4. **Get Your API Credentials**
   - Go to **Project Settings** → **API**
   - Copy the **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - Copy the **anon/public key** (starts with `eyJ...`)

5. **Update Environment Variables**
   - Open `.env.local` in the Piyush folder
   - Replace the placeholder values:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

#### Option B: Run Without Database (Limited Features)

If you want to test the app without setting up Supabase:
- The `.env.local` file already has placeholder values
- The app will run but database features (history, evidence storage) won't work
- Analysis and OCR features will still work locally

### Step 4: Run the Development Server

```bash
npm run dev
```

Or if port 3000 is already in use:
```bash
npm run dev:clean
```

### Step 5: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see the CyberShieldX application running! 🎉

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run dev:clean` | Kill port 3000 process and start dev server |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code quality checks |
| `npm run kill-port` | Kill any process on port 3000 |

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.2 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **OCR:** Tesseract.js 7.0
- **Charts:** Recharts 3.6
- **Icons:** Lucide React
- **PDF Generation:** jsPDF 4.0
- **File Upload:** React Dropzone

## 🌟 Features

### Core Features
- ✅ **Message Analysis** - Analyze text messages for cyberbullying, threats, and toxic content
- ✅ **OCR Analysis** - Extract and analyze text from images using Tesseract.js
- ✅ **Crime Pattern Detection** - Identify patterns and categorize cyber crimes
- ✅ **Investigation Assistant** - Step-by-step investigation guidance
- ✅ **PDF Report Generation** - Generate detailed investigation reports
- ✅ **Analytics Dashboard** - Visualize threat data and trends
- ✅ **Evidence Vault** - Store and manage digital evidence

### Database Features (Requires Supabase)
- 📊 **Analysis History** - Track all analyzed messages
- 🔒 **Evidence Storage** - Securely store evidence files
- 📄 **Report Archive** - Save generated reports
- 👥 **User Management** - Multi-user support with roles
- 🔐 **Row Level Security** - Data isolation per user

## 📁 Project Structure

```
Piyush/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Analytics dashboard
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── evidence/          # OCR analyzer
│   │   ├── investigation/     # Investigation assistant
│   │   └── text/              # Text analyzer
│   ├── lib/                   # Utilities and libraries
│   │   ├── analyzer/          # Message analysis engine
│   │   ├── crime/             # Crime pattern detection
│   │   ├── pdf/               # PDF report generator
│   │   └── supabase/          # Supabase client
│   ├── styles/                # CSS and design system
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── supabase/
│   └── schema.sql            # Database schema
├── .env.local                # Environment variables
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev:clean
```

### Dependencies Not Installing
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check your Node.js version:
```bash
node --version  # Should be 18 or higher
```

### Environment Variable Errors
1. Make sure `.env.local` exists in the Piyush folder
2. Restart the dev server after changing environment variables
3. Check that your Supabase URL and key are correct

### Database Connection Issues
1. Verify your Supabase project is active
2. Check that the schema.sql has been run in Supabase SQL Editor
3. Confirm your API credentials are correct in `.env.local`

### OCR Not Working
- Tesseract.js downloads language data on first use
- Wait a few seconds for the initial download
- Check your internet connection

## 🔐 Security Notes

- Never commit `.env.local` to Git (it's in `.gitignore`)
- Use environment variables for all sensitive data
- The Supabase anon key is safe to expose in client-side code
- Row Level Security (RLS) policies protect user data

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Other Platforms
- **Netlify:** Similar process to Vercel
- **Railway:** Supports Next.js with auto-deploy
- **AWS Amplify:** Full-stack deployment option

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

- **Om Mittal** - [@Om-Mittal486](https://github.com/Om-Mittal486)
- **Piyush Raj**

## 📞 Support

Need help? Here's how to get support:

1. 📖 Check this README first
2. 🐛 [Open an issue](https://github.com/Om-Mittal486/CyberShieldX/issues) on GitHub
3. 💬 Contact the maintainers

---

**Made with ❤️ for a safer digital world**
