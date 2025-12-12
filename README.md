# Portfolio

A modern, responsive portfolio website built with React and TypeScript.

## Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=flat&logo=vite&logoColor=white)

### Styling
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

### Routing
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?style=flat&logo=react-router&logoColor=white)

## Features

- Responsive design with mobile-first approach
- Dark/Light theme toggle with persistent preference
- Custom animated cursor
- Smooth scrolling navigation
- Dynamic content management
- Tech stack filtering with dropdown
- Project showcase with detailed views
- Experience timeline
- Certifications display
- Contact integration

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Projects.tsx
│   │   ├── Sidebar.tsx
│   │   └── TechStack.tsx
│   ├── contexts/          # React context providers
│   │   ├── AuthContext.tsx
│   │   └── DataContext.tsx
│   ├── data/              # Application data
│   │   └── portfolioData.json
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/hans919/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Configuration

### Update Portfolio Data

Edit `src/data/portfolioData.json` to customize:
- Personal information
- About section
- Projects
- Experience
- Tech stack
- Certifications

### Theme Customization

Modify CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1a1a1a;
  --text-secondary: #64748b;
  --accent-color: #3b82f6;
  --border-color: #e2e8f0;
}
```

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build settings are configured in `netlify.toml`
4. Deploy

Build command: `npm run build`  
Publish directory: `dist`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License with Attribution Requirement.

### Terms

You are free to:
- Use this template for personal or commercial projects
- Modify and adapt the code
- Distribute copies

### Attribution Requirement

**REQUIRED**: Before using this template, you must:
1. Keep this license notice in your project
2. Add visible credit in your portfolio footer: "Template by Hans Christian Delos Santos"
3. Link back to the original repository: https://github.com/hans919/portfolio

Failure to provide proper attribution means you are not authorized to use this template.

---

MIT License

Copyright (c) 2025 Hans Christian Delos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

**The above copyright notice, this permission notice, and the attribution requirement 
shall be included in all copies or substantial portions of the Software.**

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.i

## Author

Hans Christian Delos Santos

## Links

![GitHub](https://img.shields.io/badge/GitHub-hans919-181717?style=flat&logo=github&logoColor=white)
