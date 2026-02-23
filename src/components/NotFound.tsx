import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-bold bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-gray-400 mt-4 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-lg bg-linear-to-r from-indigo-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
