export default function MainPadding({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 ${className}`}>
      {children}
    </div>
  );
}