import "./globals.css";

export const metadata = {
  title: "EduPath India – Find Your Perfect Course & College",
  description:
    "Discover top colleges, compare courses, explore career paths, and make informed education decisions across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">

        {/* NAVBAR */}
        <header className="fixed top-0 w-full z-50 bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-2xl">
              🎓 EduPath India
            </a>

            <ul className="hidden md:flex gap-8 text-white font-medium">
              <li>
                <a href="/features" className="hover:opacity-80">Features</a>
              </li>
              <li>
                <a href="/find-colleges" className="hover:opacity-80">Find Colleges</a>
              </li>
              <li>
                <a href="/categories" className="hover:opacity-80">Categories</a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-80">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <div className="pt-24">{children}</div>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">EduPath India</h3>
              <p className="text-sm">
                Your trusted partner for choosing the right course and college across India.
                Explore career paths, compare institutions, and make smarter decisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/top-colleges" className="hover:text-white">Top Colleges</a></li>
                <li><a href="/career-guidance" className="hover:text-white">Career Guidance</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/admissions" className="hover:text-white">Admission Process</a></li>
                <li><a href="/scholarships" className="hover:text-white">Scholarships</a></li>
                <li><a href="/exams" className="hover:text-white">Entrance Exams</a></li>
                <li><a href="/study-abroad" className="hover:text-white">Study Abroad</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@edupathindia.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>

          </div>

          <div className="text-center border-t border-gray-700 py-6 text-sm">
            © 2024 EduPath India. All rights reserved.  
            <span className="ml-2">
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a> ·
              <a href="/terms" className="hover:text-white ml-2">Terms of Service</a>
            </span>
          </div>
        </footer>

      </body>
    </html>
  );
}
