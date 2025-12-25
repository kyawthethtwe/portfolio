export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  liveDemo?: string;
  githubRepo?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "secondhand-ecommerce-platform",
    name: "Secondhand E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product catalog, cart management and wishlist functionality.",
    longDescription: "This comprehensive e-commerce solution was designed to facilitate the buying and selling of secondhand goods. It features a robust frontend built with Next.js and a scalable backend. The platform ensures a seamless user experience from product discovery to checkout, emphasizing performance and usability.",
    image: "/Ecommerce.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Hook Form", "React Query", "Axios", "Shadcn Ui"],
    githubRepo: "https://github.com/kyawthethtwe/E-commerce",
    liveDemo: "https://she-liart.vercel.app/",
    features: [
      "User Authentication & Authorization",
      "Product Search & Filtering",
      "Shopping Cart & Wishlist Management",
      "Responsive Design for Mobile & Desktop",
      "Secure Payment Integration",
    ],
    challenges: [
      "Managing complex global state for the shopping cart and user sessions.",
      "Optimizing image loading and performance for listing pages with many items.",
      "Implementing secure and efficient API communication between frontend and backend.",
    ],
  },
  {
    id: 2,
    slug: "secondhand-ecommerce-backend",
    name: "Secondhand E-commerce Backend",
    description: "The backend server for the e-commerce platform, handling user authentication, product management, and order processing.",
    longDescription: "Serving as the backbone of the e-commerce platform, this backend system is architected using Nest.js. It provides a secure and efficient API for managing users, products, orders, and transactions. It leverages Cloudinary for media management and Supabase for reliable data storage.",
    image: "/Ecommerce.png",
    techStack: ["Nest.js", "TypeScript", "Cloudinary", "Supabase", "TypeORM"],
    githubRepo: "https://github.com/kyawthethtwe/second-hand-backend",
    features: [
      "RESTful API Architecture",
      "JWT-based Authentication",
      "Image Upload & Optimization via Cloudinary",
      "Database Modeling with TypeORM",
      "Scalable Folder Structure",
    ],
    challenges: [
      "Designing a normalized database schema to handle complex e-commerce relationships.",
      "Implementing role-based access control (RBAC) for admins and users.",
      "Ensuring data consistency during order processing transactions.",
    ],
  },
  {
    id: 3,
    slug: "room-rental-frontend",
    name: "Room Rental Website Frontend",
    description: "A platform for renting rooms and apartments, allowing users to search and book accommodations.",
    longDescription: "This frontend application simplifies the process of finding rental accommodations. Users can browse listings, filter by various criteria, and view detailed information about properties. The project focuses on providing a clean, intuitive interface and smooth interactions.",
    image: "/s-project.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Shadcn Ui"],
    githubRepo: "https://github.com/Cee-X/Room-Rental-Frontend",
    features: [
      "Advanced Search Filters (Location, Price, Amenities)",
      "Interactive Property Galleries",
      "User Dashboards for Booking Management",
      "Dynamic Routing for Property Details",
    ],
    challenges: [
      "Creating a responsive and accessible UI for diverse user groups.",
      "Handling asynchronous data fetching and state management for search results.",
      " integrating with the backend API to provide real-time availability updates.",
    ],
  },
  {
    id: 4,
    slug: "room-rental-backend",
    name: "Room Rental Website Backend",
    description: "The backend server for the room rental website project. It handles user authentication, room booking, and data management.",
    longDescription: "This backend service powers the room rental platform, ensuring secure data handling and reliable service availability. Built with Express.js and MongoDB, it manages the logic for user accounts, property listings, and booking schedules, along with media storage via Google Cloud.",
    image: "/s-project.jpg",
    techStack: ["Express.js", "TypeScript", "MongoDB", "JWT", "Bcrypt", "Google Cloud Storage"],
    githubRepo: "https://github.com/Cee-X/Room-Rental-Backend",
    features: [
      "NoSQL Database Schema Design",
      "Secure User Authentication",
      "File Storage Integration with GCS",
      "Booking Logic & Conflict Resolution",
    ],
    challenges: [
      "Managing concurrent booking requests to prevent double-booking.",
      "Securely handling and storing user-uploaded documents and images.",
      "Optimizing database queries for faster search response times.",
    ],
  },
  {
    id: 5,
    slug: "realtime-patient-form",
    name: "Realtime Patient Form Management System",
    description: "A realtime patient form management system that allows healthcare providers to manage patient forms efficiently with real-time updates.",
    longDescription: "This application streamlines the intake process for healthcare facilities. By utilizing Socket.io, it enables real-time synchronization of patient forms between patients and staff. This ensures that data is instantly available, reducing wait times and administrative overhead.",
    image: "/patient.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Node.js", "Express", "Shadcn Ui"],
    liveDemo: "https://realtime-patient-form-and-staff-view.vercel.app/",
    githubRepo: "https://github.com/kyawthethtwe/realtime-patient-form-and-staff-view",
    features: [
      "Real-time Data Synchronization",
      "Live Status Updates for Forms",
      "Staff Dashboard for Patient Queue",
      "Secure Form Submission",
    ],
    challenges: [
      "Implementing reliable real-time communication using Socket.io.",
      "Ensuring patient form data updates in real time to staff view without page refresh.",
      "Helping staff manage patient forms efficiently with real-time updates.",
    ],
  },
  {
    id: 6,
    slug: "pokemon-search-app",
    name: "Pokemon Search App",
    description: "A simple Pokemon search application that allows users to search for Pokemon and view their details using the GraphQL API.",
    longDescription: "A fun and interactive project that demonstrates the power of GraphQL. This app allows users to search for their favorite Pokemon, view detailed stats, abilities, and evolutions. It serves as a practical example of consuming a public GraphQL API in a React application.",
    image: "/pokemon.png",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Apollo Client", "GraphQL", "Shadcn Ui"],
    liveDemo: "https://search-pokemon-blush.vercel.app",
    githubRepo: "https://github.com/kyawthethtwe/search-pokemon",
    features: [
      "GraphQL Querying with Apollo Client",
      "Dynamic Search & Filtering",
      "Detailed Stat Visualization",
      "Responsive Grid Layout",
    ],
    challenges: [
      "Learning and implementing GraphQL queries effectively.",
      "Handling loading and error states for a smooth user experience.",
      "Optimizing performance when rendering large lists of Pokemon.",
    ],
  },
];
