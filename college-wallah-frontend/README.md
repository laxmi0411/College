# College Wallah - All-India College Admissions

A comprehensive static website for college admissions guidance across India, providing information on courses, universities, scholarships, and financial aid options like the Bihar Student Credit Card scheme.

## Project Status

**Status: Complete and Ready for Deployment**

This project is a fully functional static website built with modern web technologies. It includes:

- ✅ Main landing page with hero section, course listings, and university showcases
- ✅ Detailed course pages (e.g., BCA, B.Tech, MBA, etc.) with syllabus, job prospects, and college listings
- ✅ University-specific pages with admission details
- ✅ Interactive features like search, modals, and calculators
- ✅ Responsive design optimized for mobile and desktop
- ✅ SEO-optimized with schema markup and meta tags
- ✅ Contact forms and WhatsApp integration for lead generation

The site is production-ready and can be deployed to any static hosting service like GitHub Pages, Netlify, Vercel, or traditional web hosting.

## Features

### Core Functionality
- **Course Directory**: Comprehensive listings of popular courses (Engineering, Medical, Management, etc.) with eligibility, duration, and salary information
- **University Showcase**: Featured universities with ratings, fees, hostel options, and contact details
- **Admission Guidance**: Step-by-step process for college applications
- **Financial Aid**: Detailed information on Bihar Student Credit Card scheme with EMI calculator
- **Interactive Elements**: Search functionality, modals, accordions, and responsive navigation

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lightweight static site with fast loading times
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modern JavaScript**: Alpine.js for interactive components without heavy frameworks

## Project Structure

```
project/
├── index.html                 # Main landing page
├── course/                    # Course-specific pages
│   ├── bca.html              # BCA course details
│   ├── btech.html            # B.Tech course details
│   ├── mba.html              # MBA course details
│   └── ...                   # Other course pages
├── universities/              # University-specific pages
│   ├── gokul.html            # Gokul Global University
│   ├── mmu.html              # Maharishi Markandeshwar
│   └── ...                   # Other university pages
├── assete/                   # Static assets
│   ├── js/                   # JavaScript files
│   │   ├── alpine.js         # Alpine.js framework
│   │   ├── main.js           # Main site functionality
│   │   ├── streams.js        # Course stream data
│   │   └── colleges/         # College-specific JS
│   ├── logo/                 # University logos
│   └── ...                   # Images and other assets
├── partials/                 # Reusable HTML components
│   ├── header.html           # Site header
│   └── footer.html           # Site footer
└── README.md                 # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **Lucide Icons**: Modern icon library
- **JavaScript (ES6+)**: Vanilla JS for custom functionality
- **Schema.org**: Structured data for SEO

## How to Run Locally

Since this is a static website, you can run it locally using any web server:

### Option 1: Python (if installed)
```bash
cd /path/to/project
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Node.js (if installed)
```bash
npx serve .
# Visit the provided localhost URL
```

### Option 3: Live Server (VS Code Extension)
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## Deployment

The site can be deployed to any static hosting service:

### GitHub Pages
1. Push the code to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch" and choose `main` branch
4. The site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Custom domain support available

### Vercel
1. Import the project from GitHub
2. Deploy with zero configuration
3. Automatic HTTPS and CDN

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contact

For admissions guidance or technical inquiries:
- **Phone**: +91-83177-95774
- **WhatsApp**: https://wa.me/918317795774
- **Email**: apremraj9570raj@gmail.com

## License

