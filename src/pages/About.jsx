import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 py-12 px-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-8 drop-shadow-lg text-center">
        👨‍💻 About This Challenge
      </h1>

      {/* Main Content */}
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 text-gray-700 leading-relaxed">
        <p className="text-lg mb-6">
          Hey there 👋 I'm <span className="font-semibold text-yellow-600">Nahom</span>,
          a second-year Computer Science student and a passionate self-learner
          exploring web development.
        </p>

        <p className="text-lg mb-6">
          This project is part of my <span className="font-semibold">#100DaysOfCode Challenge</span> — a personal commitment to code, learn, and build something every single day. My goal is to stay consistent, grow my skills, and inspire others to do the same.
        </p>

        <p className="text-lg mb-6">
          On <span className="font-semibold">Day 5</span>, I built the{" "}
          <span className="text-yellow-600 font-semibold">Fetch-n-Feast Recipe Finder</span> 🍳 — 
          a simple yet powerful app where you can search for meals and explore global cuisines using{" "}
          <a
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 underline hover:text-yellow-700"
          >
            TheMealDB API
          </a>.
        </p>

        <p className="text-lg mb-6">
          This app was built using only the fundamentals of{" "}
          <span className="font-semibold">React</span> — including{" "}
          <code className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-mono">
            useState
          </code>
          ,{" "}
          <code className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-mono">
            useEffect
          </code>
          , and{" "}
          <code className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-mono">
            useRef
          </code>{" "}
          — along with a sprinkle of Tailwind CSS for styling.
        </p>

        <p className="text-lg mb-6">
          My mission with this challenge is to build real-world projects while mastering the core concepts of React and JavaScript. 🚀
        </p>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Belema7/recipe-finder-app"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            🌐 View Project on GitHub
          </a>
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-gray-600 text-center italic">
        “Consistency beats intensity — one day, one project at a time.” 💪
      </p>
    </section>
  );
};

export default About;
