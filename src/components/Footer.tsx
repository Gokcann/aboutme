export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-dark-gray border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Gökcan Akoya. Built with{' '}
            <span className="text-primary">React</span> &{' '}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
