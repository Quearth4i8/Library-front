<<<<<<< HEAD
# Library App

A modern library management application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📚 **Book Management**: Add, edit, and track books in your library
- 👥 **Member Management**: Register and manage library members
- 📖 **Loan Tracking**: Monitor book loans and returns
- 📊 **Dashboard**: Overview of library statistics
- 🌙 **Dark Mode**: Built-in dark mode support
- 📱 **Responsive Design**: Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd library-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── books/          # Books management pages
│   ├── members/        # Members management pages
│   ├── loans/          # Loans tracking pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # Reusable components (to be added)
└── lib/               # Utility functions (to be added)
```

## Pages

- **Homepage** (`/`) - Dashboard with quick actions and statistics
- **Books** (`/books`) - Browse and manage library books
- **Members** (`/members`) - Manage library members
- **Loans** (`/loans`) - Track book loans and returns

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Development**: ESLint, Turbopack

## Next Steps

This is a frontend-only implementation with sample data. To make it a full application, consider adding:

1. **Backend API**: Connect to a database (PostgreSQL, MongoDB, etc.)
2. **Authentication**: User login and role-based access
3. **Real-time Updates**: WebSocket connections for live updates
4. **File Upload**: Book cover images and member photos
5. **Email Notifications**: Due date reminders
6. **Reports**: Advanced analytics and reporting
7. **Mobile App**: React Native or PWA

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
=======
# Library-front
repository for the front dev of our library app
>>>>>>> 1faa575b9c416a4d176f24418afa0a95b97ab4d5
