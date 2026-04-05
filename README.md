# 🧘‍♀️ Yogalax - Modern Yoga & Wellness Platform

Yogalax is a high-performance, aesthetically pleasing React-based wellness platform designed for yoga studios and practitioners. It features a modern, glassmorphic UI, responsive design, and a complete user authentication flow.

![Yogalax Preview](/public/images/bg_2.jpg)

## 🚀 Features

- **📱 Fully Responsive Design**: Seamless experience across mobile, tablet, and desktop devices.
- **✨ Premium UI/UX**: Modern glassmorphism aesthetics with smooth transitions and micro-animations.
- **🔐 Auth Flow**: Complete registration and login system with client-side validation.
- **📊 User Dashboard**: Personalized dashboard with practice stats, performance streak, and recent activity tracking.
- **🛣️ Protected Routing**: Secure routes that ensure only authenticated users can access the dashboard.
- **🔔 Notifications**: Real-time feedback using `react-hot-toast` for all user actions.
- **🔄 Scroll Restoration**: Automatic scroll-to-top on route changes for a better browsing experience.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Authentication**: LocalStorage based Auth Context (State Management)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Language**: TypeScript

## 📁 Project Structure

```text
src/
├── assets/             # Static images and icons
├── components/         # Reusable UI components
│   ├── auth/           # ProtectedRoute component
│   ├── layout/         # Navbar, Footer, Layout
│   └── shared/         # Common headings, cards, etc.
├── context/            # Authentication context
├── pages/              # Main page views (Home, About, etc.)
└── index.css           # Global styles and tailwind config
public/
└── images/             # Publicly accessible static assets
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📄 License
This project is for demonstration and portfolio purposes. Feel free to use and modify it.

---
Built with ❤️ for Yogis everywhere.