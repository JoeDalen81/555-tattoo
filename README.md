# 555 Tattoo - Website

A modern, dark-themed React website for 555 Tattoo, owned by Denis Craig. This site showcases the studio's passion for tattooing and commitment to safety.

## Features

- 🎨 **Dark Atmospheric Theme** - Professional, moody design that reflects the tattoo industry aesthetic
- 🖼️ **Image Carousel** - Showcase featured work with an auto-playing carousel
- 📸 **Gallery with Filters** - Filterable gallery to display work by category
- 🛡️ **Safety Section** - Highlights the studio's commitment to safety and hygiene
- 👥 **Artist Profiles** - Bio sections for each artist with placeholder text
- 📱 **Fully Responsive** - Works on all device sizes
- ✉️ **Contact Form** - Easy booking inquiry form

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization Guide

### Replacing Placeholder Images

All images use placeholder URLs from Unsplash. To replace them with actual tattoo work:

1. **Hero Background** - Edit `src/components/Hero.css`, find the `.hero` class and update the `background` URL

2. **Gallery Images** - Edit `src/components/Gallery.jsx`, update the `galleryItems` array:

```javascript
const galleryItems = [
  {
    id: 1,
    category: "blackwork",
    title: "Your Tattoo Title",
    image: "/path/to/your/image.jpg",
  },
  // Add more items...
];
```

3. **Featured Work Carousel** - Edit `src/components/FeaturedWork.jsx`, update the `featuredItems` array:

```javascript
const featuredItems = [
  {
    image: "/path/to/your/image.jpg",
    title: "Piece Title",
    description: "Description of the work",
  },
  // Add more items...
];
```

4. **Artist Photos** - Edit `src/components/Artists.jsx`, update the `artists` array with actual photos

### Updating Artist Bios

Edit `src/components/Artists.jsx` and update the `artists` array:

```javascript
const artists = [
  {
    id: 1,
    name: "Denis Craig",
    role: "Owner & Lead Artist",
    image: "/path/to/photo.jpg",
    specialties: ["Blackwork", "Realism", "Custom Design"],
    bio: "Your custom bio text here...",
    instagram: "https://instagram.com/yourhandle",
  },
  // Add more artists...
];
```

### Updating Contact Information

Edit `src/components/Contact.jsx` to update:

- Address
- Phone number
- Email
- Business hours

Edit `src/components/Footer.jsx` to update the same information in the footer.

### Changing Colors

The color scheme is defined in `src/index.css` using CSS custom properties:

```css
:root {
  --color-bg-dark: #0a0a0a; /* Main background */
  --color-bg-darker: #050505; /* Darker sections */
  --color-bg-card: #111111; /* Card backgrounds */
  --color-primary: #c9a227; /* Gold accent color */
  --color-primary-dark: #a68520; /* Darker gold */
  --color-primary-light: #e6c547; /* Lighter gold */
  --color-text: #e8e8e8; /* Main text */
  --color-text-muted: #888888; /* Secondary text */
  --color-accent: #8b0000; /* Red accent */
}
```

### Adding Local Images

1. Create a `public/images` folder
2. Add your images there
3. Reference them in components as `/images/your-image.jpg`

Or for images that should be processed by Vite:

1. Create a `src/assets/images` folder
2. Import images in components:

```javascript
import myImage from "../assets/images/my-image.jpg";
```

## Project Structure

```
555-tattoo/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx & About.css
│   │   ├── Artists.jsx & Artists.css
│   │   ├── Carousel.jsx & Carousel.css
│   │   ├── Contact.jsx & Contact.css
│   │   ├── FeaturedWork.jsx & FeaturedWork.css
│   │   ├── Footer.jsx & Footer.css
│   │   ├── Gallery.jsx & Gallery.css
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   └── Safety.jsx & Safety.css
│   ├── App.jsx & App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Google Fonts** - Cinzel & Raleway fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for 555 Tattoo. All rights reserved.

---

**555 Tattoo** - Where Art Meets Skin  
Owned by Denis Craig
