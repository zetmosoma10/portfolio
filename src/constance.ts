import apartlyImg from "./assets/585shots_so.png";
import kabantaskImg from "./assets/556shots_so.png";
import movieImg from "./assets/333shots_so.png";

export const projects = [
  {
    title: "Apartly",
    description:
      "A modern apartment management platform where landlords can list properties and tenants can explore available apartments with ease. Includes role-based access and an admin dashboard",
    image: apartlyImg,
    frontend: [
      "React",
      "Typescript",
      "TailwindCSS",
      "daisyUI",
      "Leaflet",
      "React-query",
      "Zustand",
    ],
    backend: ["Node.js", "Express", "Typescript", "MongoDB"],
    tools: ["JWT Authentication", "RESTful API", "Cloudinary"],
    demo: "https://apartly.netlify.app/",
    code: "https://github.com/zetmosoma10/apartly-client",
  },
  {
    title: "Task Manager Dashboard",
    description:
      "A productivity app inspired by Kanban boards. Users can create boards, add tasks, and track progress visually with customizable columns and task statuses",
    image: kabantaskImg,
    frontend: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Zustand",
      "Framer-motion",
      "Swiper",
    ],
    backend: ["Node.js", "Express", "Typescript", "MongoDB"],
    tools: ["JWT Authentication", "RESTful API"],
    demo: "https://kanbantask-client.netlify.app/",
    code: "https://github.com/zetmosoma10/kanbantask-client",
  },
  {
    title: "Movie Explorer",
    description:
      "A movie discovery app powered by TheMovieDB API. Explore trending movies, watch trailers, view actor details, and search or filter by genres.",
    image: movieImg,
    frontend: ["React", "Typescript", "TailwindCSS", "Axios", "React-query"],
    backend: ["TheMovieDB API"],
    tools: ["Trailer Player", "Search & Filter", "Actor Profiles"],
    demo: "https://promovies.netlify.app/",
    code: "https://github.com/zetmosoma10/promovies",
  },
];
