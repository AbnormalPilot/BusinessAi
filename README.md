# BusinessAi

<div align="center">

![BusinessAi Logo](public/icon.svg)

### Your AI Business Brain for MSMEs

*Revolutionizing how small business owners in India manage their operations through conversational AI*

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## Local Setup Guidelines

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/business-ai.git
   cd business-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [https://business-ai-dusky.vercel.app/] to see the application.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## Problem Statement

### The Challenge Facing Indian MSMEs

India has over **63 million MSMEs** (Micro, Small, and Medium Enterprises) that form the backbone of the economy. However, these businesses face critical operational challenges:

#### 1. Complex Billing & GST Compliance
- Manual invoice generation is time-consuming and error-prone
- GST calculations (CGST, SGST, IGST) are confusing for non-accountants
- Maintaining compliance requires expensive professional help

#### 2. Inefficient Inventory Management
- Stock tracking is often done manually on paper
- Surprise stock-outs lead to lost sales and frustrated customers
- No visibility into which products are selling well

#### 3. Lack of Financial Visibility
- Most owners don't know their daily/weekly profit margins
- Tracking receivables and payables is chaotic
- No data-driven insights for business decisions

#### 4. Language Barriers
- Most business software is available only in English
- Small business owners often prefer communicating in Hindi or regional languages
- Technical interfaces are intimidating for non-tech-savvy users

#### 5. Payment Collection Struggles
- Tracking who owes money is manual and tedious
- Following up with customers for payments is awkward
- No systematic reminder system

#### 6. Time Constraints
- Owners spend 8-18 hours/week on administrative tasks
- Time spent on paperwork is time not spent growing the business
- Hiring dedicated staff is expensive for small operations

---

## Our Solution

### BusinessAi: AI That Speaks Your Language

BusinessAi is an intelligent business assistant that transforms how MSMEs operate through natural conversation in **Hindi and English**.

### Core Features

| Feature | Description |
|---------|-------------|
| **GST Billing** | Voice-powered invoicing with automatic GST calculation |
| **Smart Inventory** | AI predicts stock-outs before they happen |
| **Profit Tracking** | Real-time visibility into profits and losses |
| **Bilingual Support** | Natural conversation in Hindi & English |
| **Decision AI** | Clear, actionable business recommendations |
| **Voice Commands** | Hands-free operation for busy owners |

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: Ask in Your Language                                   │
│  ─────────────────────────────                                  │
│  "Mera stock kab khatam hone wala hai?"                         │
│  (When will my stock run out?)                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: AI Understands & Acts                                  │
│  ─────────────────────────────                                  │
│  • Auto-generates GST invoices                                  │
│  • Sends reorder alerts                                         │
│  • Initiates WhatsApp payment reminders                         │
│  • Logs all transactions automatically                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: Grow Your Business                                     │
│  ─────────────────────────────                                  │
│  • AI-powered insights to increase profits                      │
│  • Trend predictions for proactive decisions                    │
│  • Identify opportunities before problems occur                 │
└─────────────────────────────────────────────────────────────────┘
```

### Target Users

- Kirana Store Owners
- Retail Shops
- Restaurants & Cafes
- Salons & Beauty Parlors
- Medical Stores
- Auto Parts Shops
- Workshops
- And all MSMEs across India

### Key Differentiators

1. **No Technical Knowledge Required** - Designed for non-technical users
2. **Voice-First Interface** - Speak naturally, get results
3. **Context Awareness** - AI remembers your complete business history
4. **Indian-First Design** - Built for GST, Hindi, and Indian business practices
5. **Affordable** - Free tier available, paid plans starting at ₹499/month

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | TailwindCSS 4, Framer Motion |
| **UI Components** | shadcn/ui, Radix UI |
| **Forms** | React Hook Form, Zod |
| **Charts** | Recharts |
| **Analytics** | Vercel Analytics |

---

## Future Scope

### Short-Term Roadmap

- [ ] **Multi-language Expansion** - Support for Tamil, Telugu, Marathi, Gujarati, and more regional languages
- [ ] **Mobile App** - Native iOS and Android applications for on-the-go management
- [ ] **Offline Mode** - Core functionality available without internet connection
- [ ] **Barcode/QR Scanning** - Quick product entry and billing through camera

### Medium-Term Goals

- [ ] **Bank Integration** - Direct connection with Indian banks for automatic transaction reconciliation
- [ ] **Supplier Marketplace** - Connect MSMEs directly with wholesalers for better rates
- [ ] **Credit Score for MSMEs** - Build business credit history for easier loan access
- [ ] **Multi-Store Management** - Single dashboard for owners with multiple locations

### Long-Term Vision

- [ ] **AI-Powered Demand Forecasting** - Predict seasonal trends and local events impact
- [ ] **Automated Reordering** - System places orders with suppliers automatically
- [ ] **Community Features** - Connect business owners for peer learning and bulk purchasing
- [ ] **Government Scheme Integration** - Automatic eligibility detection and application assistance for MSME schemes
- [ ] **Export Compliance** - Help MSMEs expand to international markets with compliance support

### Technical Improvements

- [ ] **Real-time Sync** - WebSocket-based live updates across devices
- [ ] **Advanced Analytics Dashboard** - Deeper business intelligence and visualizations
- [ ] **API Platform** - Allow third-party integrations and custom extensions
- [ ] **White-label Solution** - Enable banks and distributors to offer branded versions

---

## Project Structure

```
business-ai/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   └── ...                 # Custom components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── icon.svg            # Main logo
│   ├── mascot.png          # Brand mascot
│   └── ...                 # Other assets
├── styles/                 # Global styles
```

---

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License.

---

<div align="center">

**Built with love for Indian MSMEs**

*Empowering 63 million small businesses, one conversation at a time*

</div>
