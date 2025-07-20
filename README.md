# Biology Club Website - STEM October

![Project Logo](/public/images/logo.png)

A modern, dynamic website for the STEM October Biology Club built with Next.js, TypeScript, and Tailwind CSS. The website serves as a platform for high school students in Egypt to engage with biology-related activities, competitions, and research.

## Tech Stack

- **Framework**: Next.js 14.0.0
- **Language**: TypeScript 5.0.0
- **Styling**: Tailwind CSS 3.3.0
- **Animations**: Framer Motion 10.16.0
- **3D Graphics**: Three.js with React Three Fiber
- **Authentication**: NextAuth.js 4.24.0
- **Database**: Prisma ORM 5.7.0
- **HTTP Client**: Axios 1.6.0

## Features

### 1. Home Page (/)
- Hero section with animated graphics
- Features section showcasing club activities
- Call-to-action buttons for joining the club

### 2. BioLeague Page (/bioleague)
- Competition format and rules
- Registration information
- Prize details
- Timeline and important dates

### 3. Research Page (/research)
- Research areas and topics
- Program descriptions
- Application process
- Current research projects

### 4. Magazines Page (/magazines)
- Digital magazine issues grid
- Read and download functionality
- Article submission system
- Magazine archive

### 5. Board Page (/board)
- Board member profiles
- Role descriptions
- Contact information
- Board application information

### 6. Contact Page (/contact)
- Contact form with validation
- Club location and contact details
- Social media links
- FAQ section

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/biology-club-website.git
cd biology-club-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

## Scripts

```bash
# Development
npm run dev      # Start development server

# Production
npm run build    # Build for production
npm run start    # Start production server

# Linting
npm run lint     # Run ESLint
```

## Project Structure

```
Biology website/
├── src/
│   ├── app/                    # Next.js 14 app directory
│   │   ├── page.tsx           # Home page
│   │   ├── bioleague/        # BioLeague competition page
│   │   ├── research/         # Research programs page
│   │   ├── magazines/        # Club magazines page
│   │   ├── board/           # Board members page
│   │   └── contact/         # Contact page
│   │
│   └── components/           # Reusable components
│       ├── layout/          # Layout components (Navbar, Footer)
│       ├── home/           # Home page components
│       └── shared/         # Shared components
│
├── public/                   # Static assets
├── styles/                   # Global styles
├── prisma/                   # Database schema and migrations
└── package.json             # Project dependencies and scripts
```

## Development Guidelines

1. Follow TypeScript best practices
2. Use functional components with hooks
3. Implement responsive design
4. Write clean, documented code
5. Follow accessibility guidelines
6. Optimize for performance

## Future Enhancements

1. **Authentication System**
   - User registration and login
   - Member-only content access
   - Profile management

2. **Interactive Features**
   - Online biology quizzes
   - Virtual lab simulations
   - Study group formation

3. **Content Management**
   - Admin dashboard
   - Content editor for articles
   - Event management system

4. **Community Features**
   - Discussion forums
   - Project collaboration tools
   - Resource sharing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team

- **Mohamed Ashraf** - President
- **Omar Khaled** - Vice President
- **Youssef Ahmed** - Head of Research
- **Ziad Mohamed** - Events Coordinator

## Contact

For any inquiries, please reach out to us at contact@biologyclub.org
