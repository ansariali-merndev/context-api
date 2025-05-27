export default function HomePage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-6 ">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Hi, I'm Ali Ansari 👋
      </h1>
      <p className="text-xl text-center max-w-2xl mb-6">
        I'm a passionate Full-Stack Developer currently building a Job Portal
        using the MERN Stack. I love crafting clean and functional web
        applications that solve real-world problems.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          React
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
          Node.js
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
          MongoDB
        </span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
          Tailwind CSS
        </span>
        <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
          Clerk Auth
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          View Job Listings
        </button>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
          About My Project
        </button>
      </div>
    </main>
  );
}
