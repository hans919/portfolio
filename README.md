# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, inspired by professional developer portfolios.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Smooth animations and transitions
- 🌓 Dark mode toggle
- 📊 Interactive sections:
  - Hero section with stats
  - About section with expertise tags
  - Experience timeline
  - Projects showcase
  - Tech stack with filters
  - Certifications
  - Social links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
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

## Deployment to Netlify

### Option 1: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Build your project
```bash
npm run build
```

3. Deploy to Netlify
```bash
netlify deploy --prod
```

### Option 3: Drag and Drop

1. Build your project
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## Customization

### Update Personal Information

Edit the following files to add your information:

- `src/components/Hero.tsx` - Name, title, location, stats
- `src/components/About.tsx` - About text and expertise
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Projects.tsx` - Your projects
- `src/components/TechStack.tsx` - Technologies you use
- `src/components/Certifications.tsx` - Your certifications
- `src/components/Footer.tsx` - Social links

### Update Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  /* ... other colors */
}
```

### Add Images

Replace placeholder images in:
- Hero section profile image
- Project images

Store your images in `public/images/` folder.

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── About.tsx/css
│   │   ├── Experience.tsx/css
│   │   ├── Projects.tsx/css
│   │   ├── TechStack.tsx/css
│   │   ├── Certifications.tsx/css
│   │   └── Footer.tsx/css
│   ├── App.tsx       # Main app component
│   ├── App.css       # App styles
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── netlify.toml      # Netlify config
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript config
└── vite.config.ts    # Vite config
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
