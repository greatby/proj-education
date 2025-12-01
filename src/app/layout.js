import "./globals.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const metadata = {
  title: "EduPath India – Find Your Perfect Course & College",
  description:
    "Discover top colleges, compare courses, explore career paths, and make informed education decisions across India.",
};
function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="nav-toggle" className="peer hidden" />

      {/* Hamburger Icon */}
      <label htmlFor="nav-toggle">
        <FaBars className="text-2xl cursor-pointer" />
      </label>

      {/* Overlay */}
      <label
        htmlFor="nav-toggle"
        className="fixed inset-0 bg-black/40 opacity-0 peer-checked:opacity-100 pointer-events-none peer-checked:pointer-events-auto transition-opacity"
      ></label>

      {/* Slide Drawer */}
      <nav
        className="fixed top-0 left-0 h-full w-72 bg-white text-gray-900 shadow-xl 
        -translate-x-full peer-checked:translate-x-0 transition-transform z-50"
      >
        <div className="flex items-center justify-between p-5 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <label htmlFor="nav-toggle">
            <FaTimes className="text-xl cursor-pointer" />
          </label>
        </div>

        <ul className="flex flex-col p-6 text-base font-medium space-y-6">
          <li>
            <a href="/features" className="hover:text-indigo-600">
              Features
            </a>
          </li>
          <li>
            <a href="/find-colleges" className="hover:text-indigo-600">
              Find Colleges
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:text-indigo-600">
              Categories
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
            {/* Logo */}
            <a href="/" className="text-xl font-bold tracking-wide">
              🎓 EduPath India
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/features" className="hover:text-indigo-200 transition">
                Features
              </a>
              <a
                href="/find-colleges"
                className="hover:text-indigo-200 transition"
              >
                Find Colleges
              </a>
              <a
                href="/categories"
                className="hover:text-indigo-200 transition"
              >
                Categories
              </a>
              <a href="/contact" className="hover:text-indigo-200 transition">
                Contact
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <MobileMenu />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="">{children}</div>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                EduPath India
              </h3>
              <p className="text-sm">
                Your trusted partner for choosing the right course and college
                across India. Explore career paths, compare institutions, and
                make smarter decisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/top-colleges" className="hover:text-white">
                    Top Colleges
                  </a>
                </li>
                <li>
                  <a href="/career-guidance" className="hover:text-white">
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/admissions" className="hover:text-white">
                    Admission Process
                  </a>
                </li>
                <li>
                  <a href="/scholarships" className="hover:text-white">
                    Scholarships
                  </a>
                </li>
                <li>
                  <a href="/exams" className="hover:text-white">
                    Entrance Exams
                  </a>
                </li>
                <li>
                  <a href="/study-abroad" className="hover:text-white">
                    Study Abroad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>Email: hello@epfdesk.com</li>
                <li>Phone: +919945933333</li>
                <li>62/63 Church Street, Bengaluru, Karnataka, 560001</li>
              </ul>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 py-6 text-sm">
            © 2024 EduPath India. All rights reserved.
            <span className="ml-2">
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>{" "}
              ·
              <a href="/terms" className="hover:text-white ml-2">
                Terms of Service
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
