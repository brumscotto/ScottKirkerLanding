# Scott Kirker - Personal Website

A modern, responsive personal website showcasing Scott Kirker's professional roles as Founder, Developer, Coach, and AI Education Specialist.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Interactive Sections**: Dynamic role switching and smooth animations
- **Professional Portfolio**: Showcases projects (Grativerse and Ultimately apps)
- **Skills & Expertise**: Comprehensive technical skills and certifications
- **Contact Integration**: Multiple contact methods with direct links

## Technology Stack

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Interactive features without framework dependencies
- **Performance**: Optimized for fast loading and smooth interactions

## Deployment to GitHub Pages

### Option 1: Direct Upload
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Using Git Commands
```bash
git init
git add .
git commit -m "Initial commit - Scott Kirker personal website"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

Then enable Pages in your repository settings.

## Local Development

To run the website locally:

1. **Simple HTTP Server** (Python):
   ```bash
   python3 -m http.server 8080
   ```

2. **Using Node.js**:
   ```bash
   npx serve .
   ```

3. **Using PHP**:
   ```bash
   php -S localhost:8080
   ```

Visit `http://localhost:8080` in your browser.

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
├── attached_assets/    # Images and media
│   └── generated_images/
│       ├── Professional_headshot_for_Scott_cc0462d5.png
│       ├── Grativerse_app_mockup_1c679411.png
│       └── Ultimately_app_mockup_afb19748.png
└── README.md           # This file
```

## Customization

### Colors and Theme
- Modify CSS custom properties in `:root` and `[data-theme="dark"]` selectors
- Update gradient definitions for different sections

### Content Updates
- Edit text content directly in `index.html`
- Update contact information and links as needed
- Replace project images in the `attached_assets` folder

### Adding Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `style.css`
3. Update navigation if needed in `script.js`

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Prefetching**: Important external links are prefetched
- **Responsive Images**: Optimized for different screen sizes
- **Minimal Dependencies**: No external frameworks or libraries

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Respects user motion preferences
- High contrast ratios for readability

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Mobile browsers optimized

## Contact Information

For questions about this website or to get in touch with Scott:

- Email: hello@scottkirker.com
- LinkedIn: [linkedin.com/in/scottkirker](https://www.linkedin.com/in/scottkirker/)

## License

This project is for portfolio purposes. Feel free to use as inspiration for your own personal website.

---

Built with passion for meaningful technology by Scott Kirker.