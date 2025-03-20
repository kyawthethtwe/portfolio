import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Kyaw Thet Htwe',
  description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-5 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}