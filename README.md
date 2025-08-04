# Avi Aggarwal - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, education, projects, and passions in mechanical engineering and technology.

## 🌟 Features

### 🏠 Home Page (`index.html`)
- **Hero Section**: Professional introduction with call-to-action buttons
- **Features Section**: Highlighting engineering excellence, technical skills, and leadership
- **Stats Section**: Key metrics and achievements
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: CSS animations and hover effects

### 📁 Portfolio Page (`portfolio.html`)
- **Professional Experience**: Detailed work history with descriptions and skills
- **Education**: Academic background and achievements
- **Projects Carousel**: Horizontal scrolling showcase of projects with navigation controls
  - **Clickable Projects**: Each project links to LinkedIn projects section
  - **Scroll Controls**: Left/right arrow buttons for easy navigation
  - **Keyboard Support**: Arrow keys for navigation when focused
  - **Mouse Wheel Support**: Horizontal scrolling with mouse wheel
  - **Touch Support**: Swipe gestures on mobile devices
  - **Visual Indicators**: Dynamic scroll position feedback
  - **Scalable Design**: Easy to add unlimited projects without layout issues
- **Certifications**: Professional licenses and certifications
- **Skills Tags**: Visual representation of technical competencies

### ❤️ Passions Page (`passions.html`)
- **Technology Interests**: AI, 3D Printing, Computer Building
- **Mechanical Interests**: Formula One, Woodworking, Aircraft
- **Other Interests**: Infrastructure, Transportation, Travel
- **Detailed Descriptions**: In-depth exploration of each passion area
- **Engineering Connections**: How interests relate to professional work

### 📞 Contact & Booking Page (`contact.html`)
- **Contact Information**: Email, LinkedIn, location, and current status
- **Contact Form**: Direct email integration with mailto functionality
- **Meeting Scheduler**: Embedded Reclaim.ai booking widget
- **Social Links**: Quick access to professional profiles

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **JavaScript**: Interactive functionality and form handling
- **External Integration**: Reclaim.ai meeting scheduler

### Design Features
- **Color Scheme**: Professional gradient (Purple to Blue)
- **Typography**: Segoe UI font family for readability
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Responsive design for all screen sizes

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 File Structure

```
portfolio-website/
├── index.html          # Home page
├── portfolio.html      # Portfolio/experience page
├── passions.html       # Interests and passions page
├── contact.html        # Contact and booking page
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Direct File Opening
1. Download all HTML files to a folder
2. Open `index.html` in your web browser
3. Navigate between pages using the navigation menu

### Option 2: Local Web Server
```bash
# Using Python (recommended for testing)
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🌐 Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all HTML files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder containing all HTML files to [Netlify Drop](https://app.netlify.com/drop)
2. Get an instant live URL
3. Optional: Connect to GitHub for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts for deployment

### Traditional Web Hosting
1. Upload all HTML files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Access your domain to view the site

## ⚙️ Customization

### Adding New Projects to the Carousel
To add new projects to the horizontal scrolling carousel:

1. **Locate the Projects Section**: Find the `projects-grid` div in `portfolio.html`
2. **Copy the Project Template**: Duplicate one of the existing project `<a>` elements
3. **Update Project Information**:
   ```html
   <a href="https://www.linkedin.com/in/aviaggarwal05/details/projects/" target="_blank" class="project-item" style="text-decoration: none; color: inherit;">
       <div class="project-header">
           <h3>Your Project Title</h3>
           <div class="project-duration">Start Date - End Date</div>
       </div>
       <div class="project-content">
           <div class="project-description">
               Your project description here...
           </div>
           <div class="skills-tags">
               <span class="skill-tag">Skill 1</span>
               <span class="skill-tag">Skill 2</span>
               <span class="skill-tag">Skill 3</span>
           </div>
       </div>
   </a>
   ```
4. **No Layout Changes Needed**: The carousel automatically accommodates new projects
5. **Test Scrolling**: Verify that scroll controls work with the new projects

### Removing Placeholder Projects
The portfolio currently includes two placeholder projects ("Future Project 1" and "Future Project 2"). To remove them:
1. Delete the corresponding `<a>` elements from the `projects-grid` div
2. The carousel will automatically adjust to show only your real projects

### Updating Contact Information
Edit `contact.html` to update:
- Email address (currently: agrwl.avi@gmail.com)
- LinkedIn profile URL
- Location information
- Current status/position

### Modifying Content
- **Experience**: Update the experience section in `portfolio.html`
- **Projects**: Add new projects or modify existing ones
- **Passions**: Edit interests and descriptions in `passions.html`
- **Personal Info**: Update bio and introduction in `index.html`

### Styling Changes
All styles are embedded in each HTML file within `<style>` tags. Key customization areas:
- **Colors**: Modify the gradient values in CSS variables
- **Fonts**: Change the font-family in the body selector
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Modify transition and animation properties

### Meeting Scheduler
The booking functionality uses Reclaim.ai. To update:
1. Replace the `data-id` in the script tag in `contact.html`
2. Update with your own Reclaim.ai scheduling link ID

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Breakpoint**: 768px for mobile/tablet transition
- **Navigation**: Simplified mobile navigation
- **Grid Layouts**: Responsive grid systems that stack on mobile
- **Touch-Friendly**: Appropriate button sizes and spacing
- **Readable Text**: Optimized font sizes for mobile screens

## 🔧 Maintenance

### Regular Updates
- Update experience and projects as they change
- Refresh contact information when needed
- Add new certifications and skills
- Update the passions section with new interests

### Performance Optimization
- Images are minimal (using emojis for icons)
- CSS and JavaScript are embedded (no external dependencies)
- Optimized for fast loading
- Minimal HTTP requests

## 🐛 Troubleshooting

### Common Issues

**Navigation not working**
- Ensure all HTML files are in the same directory
- Check that file names match exactly (case-sensitive)

**Booking widget not loading**
- Verify internet connection
- Check that the Reclaim.ai script URL is correct
- Ensure the data-id is valid

**Email links not working**
- Verify email client is configured
- Check that mailto links are properly formatted

**Mobile display issues**
- Clear browser cache
- Test in different mobile browsers
- Verify viewport meta tag is present

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 👤 Contact

**Avi Aggarwal**
- Email: agrwl.avi@gmail.com
- LinkedIn: [linkedin.com/in/aviaggarwal05](https://www.linkedin.com/in/aviaggarwal05/)
- Location: Golden, Colorado, United States

---

*Last updated: August 2025*

