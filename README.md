# Interactive Dashboard

A modern, responsive dashboard built with React, TypeScript, and Tailwind CSS featuring analytics, data visualization, and interactive components.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Interactive Components**: Charts, maps, tables, and data visualizations
- **Client-side Routing**: Smooth navigation with React Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Recharts**: Beautiful and customizable charts
- **Leaflet Maps**: Interactive maps for location-based data

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

## 🛠️ Development

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

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `CI=false npm run build`
   - Publish directory: `build`
3. **Environment variables**: None required
4. **Deploy!**

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

3. **Configure redirects** for client-side routing:
   ```
   /*    /index.html   200
   ```

### Troubleshooting Deployment Issues

#### Common Issues:

1. **"Unexpected token '<'" Error**:
   - This usually means the server is returning an HTML error page instead of JavaScript
   - Ensure your hosting provider supports client-side routing
   - Check that redirects are properly configured

2. **Manifest.json Syntax Error**:
   - ✅ Fixed: Updated manifest.json with proper JSON syntax
   - ✅ Fixed: Removed unused imports and variables

3. **Routing Issues**:
   - ✅ Fixed: Added catch-all route in router configuration
   - ✅ Fixed: Updated netlify.toml with proper redirects
   - ✅ Fixed: Added security headers

4. **Build Warnings**:
   - ✅ Fixed: Removed all unused imports and variables
   - ✅ Fixed: Clean build with no warnings

#### Deployment Checklist:

- [x] All ESLint warnings resolved
- [x] Build completes successfully
- [x] Client-side routing configured
- [x] Redirects properly set up
- [x] Manifest.json syntax correct
- [x] Security headers added

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── modules/            # Feature-based modules
│   ├── contexts/       # React contexts
│   ├── left-sidebar/   # Left sidebar components
│   ├── main/           # Main content area
│   ├── navbar/         # Navigation bar
│   └── right-sidebar/  # Right sidebar components
├── App.tsx             # Main app component
└── router.tsx          # Routing configuration
```

## 🎨 Customization

### Themes
The application supports dark and light themes. Theme context is available throughout the app.

### Styling
Built with Tailwind CSS for easy customization. Component styles can be modified in their respective files.

### Data
Mock data is located in the `data/` folders within each module. Replace with real API calls as needed.

## 🔧 Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `public/_redirects`: URL redirects for client-side routing
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## 📝 Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run format`: Format code with Prettier
- `./deploy.sh`: Automated deployment script

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and formatting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
