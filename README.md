# Interactive Dashboard

A modern, responsive interactive dashboard built with React, TypeScript, and Tailwind CSS. This project provides a comprehensive analytics interface with real-time data visualization, user management, and interactive components.

## 🚀 Features

### 📊 **Data Visualization**
- **Revenue Analytics**: Interactive charts showing revenue trends and projections
- **Sales Performance**: Pie charts displaying total sales distribution
- **Geographic Data**: Interactive map showing revenue by location
- **Product Analytics**: Top-selling products table with detailed metrics

### 🎨 **Modern UI/UX**
- **Dark/Light Theme**: Toggle between dark and light themes
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Sidebar Navigation**: Collapsible left sidebar with organized navigation
- **Smooth Animations**: Framer Motion powered animations and transitions

### 📋 **Data Management**
- **Order Management**: Comprehensive order list with search and pagination
- **User Management**: User avatars and contact management
- **Activity Tracking**: Real-time activity feed and notifications
- **Data Filtering**: Advanced search and filter capabilities with custom dropdowns

### 🔧 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing with nested routes
- **Recharts**: Professional data visualization library
- **Leaflet Maps**: Interactive geographic data visualization
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Advanced animations and micro-interactions
- **TanStack Table**: Powerful table management with sorting and filtering

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom theme support
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Data Visualization**: Recharts, D3.js, Leaflet Maps
- **Table Management**: TanStack React Table for advanced table features
- **Icons**: Phosphor React Icons
- **Build Tool**: Create React App
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── graph/          # Chart and visualization components
│   ├── search-input.tsx
│   ├── separator.tsx
│   ├── sidebar.tsx
│   └── table.tsx
├── modules/            # Feature-based modules
│   ├── components/     # Layout components
│   ├── contexts/       # React contexts for state management
│   ├── left-sidebar/   # Navigation sidebar
│   ├── main/          # Main dashboard content
│   │   ├── home/      # Dashboard home page
│   │   ├── order-list/ # Order management
│   │   └── components/
│   ├── navbar/        # Top navigation bar
│   └── right-sidebar/ # Activity and notifications sidebar
├── App.tsx            # Main app component
└── router.tsx         # Application routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interactive-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm run build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm run format`** - Formats code with Prettier
- **`npm run format:check`** - Checks code formatting

## 🎯 Key Features Explained

### Dashboard Overview
The main dashboard provides a comprehensive view of business metrics:
- **Revenue Graphs**: Line charts showing revenue trends over time
- **Sales Distribution**: Pie charts displaying sales by category
- **Geographic Data**: Interactive map with revenue by location
- **Product Performance**: Table showing top-selling products

### Navigation System
- **Left Sidebar**: Collapsible navigation with favorites and recent items
- **Top Navbar**: Search functionality and user controls
- **Right Sidebar**: Activity feed, notifications, and contacts

### Data Management
- **Order List**: Complete order management with search and pagination
- **User Management**: Contact list with user avatars and details
- **Activity Tracking**: Real-time activity monitoring

### Advanced Features
- **Custom Filter Components**: Modern dropdown filters with smooth animations
- **Responsive Tables**: TanStack Table integration for advanced table features
- **Smooth Animations**: Framer Motion powered transitions throughout the app
- **Theme System**: Comprehensive dark/light theme support

## 🎨 Theme System

The dashboard supports both light and dark themes:
- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Modern, eye-friendly interface
- **Theme Persistence**: User preference is saved across sessions
- **Primary Color**: Consistent branding with `#C6C7F8` primary color

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full feature set with sidebars
- **Tablet**: Adaptive layout with collapsible sections
- **Mobile**: Touch-friendly interface with mobile navigation

## 🚀 Deployment

The project is configured for deployment on Netlify with:
- **Automatic builds** from Git repository
- **Client-side routing** support
- **Optimized production builds**
- **CDN distribution** for fast loading

## 🔧 Configuration Files

- **`netlify.toml`** - Netlify deployment configuration
- **`public/_redirects`** - Client-side routing support
- **`.eslintrc.js`** - ESLint configuration
- **`tailwind.config.js`** - Tailwind CSS configuration

## 🎭 Animation Features

The dashboard includes sophisticated animations powered by Framer Motion:
- **Page Transitions**: Smooth route transitions
- **Component Animations**: Hover effects and micro-interactions
- **Sidebar Animations**: Collapsible sidebar with smooth transitions
- **Loading States**: Animated loading indicators
- **Notification Animations**: Smooth notification appearances

## 📊 Data Visualization Features

Advanced data visualization capabilities:
- **Interactive Charts**: Recharts-powered responsive charts
- **Geographic Maps**: Leaflet.js interactive maps
- **Real-time Updates**: Dynamic data updates with animations
- **Custom Tooltips**: Enhanced user experience with detailed tooltips

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for the data visualization components
- **Framer Motion** for the smooth animations
- **TanStack** for the powerful table management
- **Phosphor Icons** for the beautiful icon set
