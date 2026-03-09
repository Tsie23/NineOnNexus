# Nine On Nexus Media

A modern, responsive static website for Nine On Nexus Media, a photography and media production company based in Pretoria, South Africa. The site showcases services, portfolio, and provides a contact form for inquiries.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Scroll effects, hamburger menu, portfolio filtering
- **Contact Form**: Secure form submission via Vercel serverless functions and Zapier integration
- **Modern UI**: Clean design with FontAwesome icons and custom CSS animations
- **SEO Friendly**: Proper meta tags and semantic HTML

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Deployment**: Vercel (with serverless functions)
- **Automation**: Zapier for email notifications
- **Icons**: FontAwesome 6.5.0
- **Fonts**: Google Fonts (Playfair Display, Space Mono, Cormorant Garamond, Montserrat)

## Project Structure

```
NineOnNexus/
├── index.html          # Home page
├── about.html          # About Us page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page with form
├── style.css           # Main stylesheet
├── main.js             # JavaScript for interactions
├── api/
│   └── contact.js      # Serverless function for form handling
├── Assets/             # Images and assets
│   ├── favicon.png
│   ├── Logo.png
│   └── [other images]
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd NineOnNexus
   ```

2. **No dependencies required** for static files. For local development with Vercel functions:
   - Install Vercel CLI: `npm install -g vercel` or `pnpm install -g vercel`

3. **Local Development** (optional):
   - Create `.env.local` with your Zapier webhook URL:
     ```
     ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID
     ```
   - Run `vercel dev` to start local server

## Deployment

### Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   # or
   pnpm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to authenticate and deploy.

3. **Set Environment Variables** in Vercel Dashboard:
   - Go to Project Settings > Environment Variables
   - Add: `ZAPIER_WEBHOOK_URL` = `https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID`
   - Set for Production environment

4. **Redeploy after changes**:
   - Commit and push to GitHub (if linked, auto-deploys)
   - Or run `vercel --prod` manually

## Usage

- **Navigation**: Use the navbar to browse pages
- **Portfolio**: Filter projects by category
- **Contact**: Fill out the form to send inquiries (emails go to nineonnexusmedia@gmail.com via Zapier)

## Customization

- **Styling**: Edit `style.css` for design changes
- **Content**: Update HTML files for text/images
- **Functionality**: Modify `main.js` for JS interactions
- **Form Handling**: Edit `api/contact.js` for backend logic

## Security Notes

- Webhook URL is stored securely in Vercel environment variables
- No sensitive data exposed in client-side code
- Form data is validated and sanitized before forwarding

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test locally
4. Submit a pull request

## License

© 2026 Nine on Nexus Media. All visual narratives protected.

## Contact

- Email: nineonnexusmedia@gmail.com
- Phone: +27 81-404-5420
- Location: Pretoria North, Gauteng, South Africa

## Visit the Site
[nine-on-nexus.vercel.app ](https://nine-on-nexus.vercel.app/)