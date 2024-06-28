import Head from 'next/head';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-8 text-center mt-12 max-w-screen-lg mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">About Me</h1>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          I am a web developer with a passion for creating beautiful and functional websites. With a strong background in front-end technologies, I strive to deliver exceptional user experiences. I have experience working with HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
        </p>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          In my free time, I enjoy learning new technologies, contributing to open-source projects, and exploring the latest trends in web development.
        </p>
      </main>

      <footer className="w-full h-24 border-t flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} Chris Jackson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
