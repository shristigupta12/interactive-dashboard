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

### 📋 **Data Management**
- **Order Management**: Comprehensive order list with search and pagination
- **User Management**: User avatars and contact management
- **Activity Tracking**: Real-time activity feed and notifications
- **Data Filtering**: Advanced search and filter capabilities

### 🔧 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing with nested routes
- **Recharts**: Professional data visualization library
- **Leaflet Maps**: Interactive geographic data visualization
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom theme support
- **Data Visualization**: Recharts, D3.js, Leaflet Maps
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

## 🎨 Theme System

The dashboard supports both light and dark themes:
- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Modern, eye-friendly interface
- **Theme Persistence**: User preference is saved across sessions

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
- **Phosphor Icons** for the beautiful icon set
