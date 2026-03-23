export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24 pt-8 pb-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 font-bold text-sm">
        <p>
          © {new Date().getFullYear()} Hemanta Regmi. Designed & Built with
          React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
