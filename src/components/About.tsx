import image from "../assets/IMG_2622.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-dark-blue">
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Left: Profile Image */}
        <div className="relative group">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-transparent bg-linear-to-r from-accent-blue via-accent-purple to-accent-cyan p-0.5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            <img
              src={image}
              alt="Zet's profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* Right: About Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="mb-6 font-bold text-transparent text-3xl font-heading md:text-4xl bg-linear-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text">
            About Me
          </h2>

          <p className="mb-4 font-sans leading-relaxed text-text-main">
            Hi, I’m{" "}
            <span className="font-semibold text-accent-blue">Zet Mosoma</span> —
            a passionate Full-stack Developer based in South Africa. I love
            building fast, responsive, and visually appealing web applications
            using modern technologies like{" "}
            <span className="font-medium text-accent-purple">React</span>,
            <span className="font-medium text-accent-purple"> Node.js</span>,
            and
            <span className="font-medium text-accent-purple"> Express</span>.
          </p>

          <p className="mb-6 font-sans leading-relaxed text-text-main">
            My journey in web development started with curiosity and turned into
            a passion for crafting clean, scalable, functional user experiences.
            I’m driven by continuous learning, this is one of the reasons i
            enjoy this field and I aim to use my skills to build solutions that
            make a positive impact.
          </p>

          <a
            href="#projects"
            className="inline-block font-sans mt-4 px-6 py-3 rounded-lg bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
