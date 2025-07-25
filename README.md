# Interactive Dashboard

A modern, responsive eCommerce analytics dashboard built with React, TypeScript, and Tailwind CSS. This comprehensive dashboard provides real-time insights into sales performance, revenue analytics, and business metrics through interactive visualizations and data tables.

## 🚀 Features

### 📊 Analytics Dashboard
- **Overall Details**: Key performance indicators and summary metrics
- **Revenue Analytics**: Interactive revenue graphs and trend analysis
- **Projections vs Actuals**: Comparative analysis of projected vs actual performance
- **Top Selling Products**: Detailed product performance table with sorting and filtering
- **Sales Distribution**: Pie chart visualization of sales categories
- **Geographic Revenue**: Interactive map showing revenue by location

### 🛍️ Order Management
- **Order List**: Comprehensive order management with status tracking
- **Order Status Badges**: Visual status indicators for different order states
- **Pagination**: Efficient navigation through large datasets
- **User Avatars**: Visual representation of order customers

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Animated Transitions**: Smooth page transitions using Framer Motion
- **Collapsible Sidebar**: Space-efficient navigation with expandable sections
- **Interactive Components**: Hover effects and smooth interactions

### 📱 Navigation & Layout
- **Left Sidebar**: Navigation menu with collapsible sections
- **Right Sidebar**: Activities, notifications, and contacts
- **Top Navbar**: Search functionality and user controls
- **Breadcrumb Navigation**: Clear path indication

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Charts**: Recharts for data visualization
- **Maps**: Leaflet with React-Leaflet for geographic data
- **Tables**: TanStack Table for advanced table functionality
- **Icons**: Phosphor React for consistent iconography
- **Build Tool**: Create React App with custom configurations

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd interactive-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

## 🚀 Development

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Format code
npm run format

# Check code formatting
npm run format:check
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (graphs, tables, inputs)
├── modules/            # Feature-based modules
│   ├── contexts/       # React contexts (theme, sidebar states)
│   ├── left-sidebar/   # Navigation sidebar components
│   ├── main/           # Main content area
│   │   ├── home/       # Dashboard components
│   │   │   ├── overall-details/      # KPI cards
│   │   │   ├── revenue-graph/        # Revenue charts
│   │   │   ├── projections-vs-actuals-graph/  # Comparison charts
│   │   │   ├── revenue-by-location-map/       # Geographic data
│   │   │   ├── top-selling-products-table/    # Product analytics
│   │   │   └── total-sales-pie-chart/        # Sales distribution
│   │   └── order-list/ # Order management system
│   ├── navbar/         # Top navigation bar
│   └── right-sidebar/  # Activities, notifications, contacts
├── App.tsx             # Main app component
└── router.tsx          # Routing configuration
```

## 🎨 Key Components

### Dashboard Features
- **Overall Details**: Displays key metrics in card format
- **Revenue Graph**: Line chart showing revenue trends over time
- **Projections vs Actuals**: Stacked bar chart for performance comparison
- **Revenue by Location**: Interactive map with revenue data
- **Top Selling Products**: Sortable table with product performance
- **Sales Pie Chart**: Visual breakdown of sales categories

### Order Management
- **Order List Table**: Comprehensive order data with filtering
- **Status Badges**: Color-coded order status indicators
- **Pagination**: Efficient data navigation
- **User Avatars**: Customer identification

### Navigation & UI
- **Collapsible Sidebar**: Space-efficient navigation
- **Theme Toggle**: Dark/light mode switching
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: Page transitions and interactions

## 🔧 Configuration

### Environment Setup
- **React 19**: Latest React features and performance improvements
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization

### Build Configuration
- **Source Maps**: Disabled for production builds
- **Code Formatting**: Prettier for consistent code style
- **Linting**: ESLint for code quality
- **Testing**: Jest with React Testing Library

## 📊 Data Visualization

The dashboard includes various chart types:
- **Line Charts**: Revenue trends and time-series data
- **Bar Charts**: Comparative analysis and projections
- **Pie Charts**: Sales distribution and category breakdown
- **Interactive Maps**: Geographic revenue visualization
- **Data Tables**: Sortable and filterable product/order data

## 🎯 Features in Detail

### Analytics Dashboard
- Real-time KPI monitoring
- Revenue trend analysis
- Performance projections
- Geographic revenue mapping
- Product performance tracking
- Sales category breakdown

### Order Management
- Comprehensive order listing
- Status tracking and updates
- Customer information display
- Pagination for large datasets
- Search and filtering capabilities

### User Experience
- Intuitive navigation
- Responsive design
- Smooth animations
- Theme customization
- Accessibility considerations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚀 Deployment

The application is configured for deployment on various platforms:

- **Netlify**: Configured with `netlify.toml`
- **Vercel**: Ready for Vercel deployment
- **Static Hosting**: Build output can be deployed to any static hosting service

### Build Output
- Optimized production build
- Static assets for CDN deployment
- Client-side routing support
- Responsive design for all devices
