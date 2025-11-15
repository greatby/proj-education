export const metadata = {
  title: "EduPath India — Find Your Perfect Course & College",
  description:
    "Find the best courses and colleges in India. Compare universities, explore career paths, and make informed decisions with expert educational guidance.",
  keywords:
    "colleges in India, courses in India, career guidance, college admission, university selection, education counseling, course finder",
  openGraph: {
    title: "EduPath India - Find Your Perfect Course & College",
    description:
      "Discover the best colleges and courses across India. Make informed decisions about your educational future.",
    type: "website",
    url: "https://yourwebsite.com/",
  },
};

export default function Home() {
  return (
    <main className="pt-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "EduPath India",
            url: "https://yourwebsite.com/",
            description:
              "A platform to find colleges, courses, and career guidance in India.",
            sameAs: [
              "https://facebook.com",
              "https://instagram.com",
              "https://linkedin.com",
            ],
          }),
        }}
      />

      {/* HERO ----------------------------------------------------- */}
      <section className="w-full bg-linear-to-br from-indigo-500 to-purple-600 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
          Find Your Perfect Course & College in India
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto animate-fade-up delay-200">
          Discover thousands of colleges, compare courses, and make informed
          decisions about your educational future.
        </p>
        <a
          href="#search"
          className="inline-block mt-6 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-all"
        >
          Explore Colleges Now
        </a>
      </section>

      {/* FEATURES ----------------------------------------------------- */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose EduPath India?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              "🎯",
              "Smart College Finder",
              "Find the perfect college based on preferences, budget & goals.",
            ],
            [
              "📊",
              "Compare & Analyze",
              "Compare rankings, placements, fees & facilities.",
            ],
            [
              "💡",
              "Expert Guidance",
              "Get personalized counseling from experts.",
            ],
            [
              "📚",
              "Course Insights",
              "Explore courses, future careers & trends.",
            ],
            [
              "⭐",
              "Verified Reviews",
              "Read real reviews from students & alumni.",
            ],
            [
              "🔔",
              "Admission Alerts",
              "Never miss exams, updates & admission dates.",
            ],
          ].map(([icon, title, text], i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition-transform hover:-translate-y-2 text-center"
            >
              <div className="text-5xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS ----------------------------------------------------- */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-4">
          {[
            ["5000+", "Colleges Listed"],
            ["500+", "Courses Available"],
            ["100K+", "Students Helped"],
            ["50+", "Cities Covered"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-indigo-600">{num}</h3>
              <p className="text-gray-600 text-lg">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH ----------------------------------------------------- */}
      <section id="search" className="max-w-4xl mx-auto py-20 px-4">
        <div className="bg-white rounded-2xl p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your College Search</h2>
          <p className="text-gray-600">
            Search by college, course, location, or specialization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-xl mx-auto">
            <input
              className="flex-1 border border-gray-300 rounded-full px-6 py-3 outline-none focus:border-indigo-500"
              placeholder="Enter college name, course, or location..."
            />
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES ----------------------------------------------------- */}
      <section id="categories" className="bg-gray-50 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ["🖥️ Engineering", "B.Tech, M.Tech, Diploma"],
            ["🏥 Medical", "MBBS, BDS, Nursing"],
            ["💼 Management", "MBA, BBA, PGDM"],
            ["⚖️ Law", "LLB, BA LLB, LLM"],
            ["🎨 Arts & Design", "BA, BFA, Design"],
            ["🔬 Science", "B.Sc, M.Sc, Research"],
            ["💻 IT & Computer", "BCA, MCA"],
            ["📈 Commerce", "B.Com, M.Com, CA"],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer text-center"
            >
              <h3 className="text-xl text-indigo-600 font-semibold">{title}</h3>
              <p className="text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER ----------------------------------------------------- */}
      <section className="max-w-3xl mx-auto py-24 px-4">
        <div
          className="
      relative overflow-hidden 
      rounded-3xl 
      p-12 
      text-center 
      shadow-xl 
      bg-linear-to-br from-indigo-500 via-indigo-600 to-purple-600
      sm:p-16
    "
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none"></div>

          <h2 className="relative text-4xl font-bold mb-4 tracking-tight">
            Stay Updated!
          </h2>

          <p className="relative text-lg opacity-90 max-w-md mx-auto">
            Get real-time updates on admissions, exams, courses & career
            guidance.
          </p>

          <form className="relative flex flex-col sm:flex-row gap-4 mt-8 max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="
          flex-1 px-6 py-3 
          rounded-full 
          text-gray-900 
          shadow-md
          outline-none 
          border border-transparent
          focus:border-white focus:ring-2 focus:ring-white/40
        "
            />

            <button
              type="submit"
              className="
          px-10 py-3 
          bg-white 
          text-indigo-600 
          font-semibold 
          rounded-full 
          shadow-lg
          hover:scale-[1.05] 
          hover:shadow-2xl
          active:scale-[0.98]
          transition-all 
          duration-200 
        "
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
