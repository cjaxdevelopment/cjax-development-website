import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Cjax Development</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-8 text-center">
        <section className="my-8">
          <h1 className="text-4xl sm:text-6xl font-bold">Welcome to Cjax Development</h1>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            Hi! I'm Chris Jackson, a passionate developer focused on building beautiful and functional web experiences.
          </p>
        </section>

        <section className="my-8 w-full max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-4">
            <a href="http://cjax.io" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold">Redrow Property Development &rarr;</h3>
              <p className="mt-2">A website for a local paving and construction business</p>
            </a>
            <a href="https://ronnievaughnmusic.com" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold">Ronnie Vaughn Music &rarr;</h3>
              <p className="mt-2">A wordpress site for a local musician</p>
            </a>
            <a href="https://project3.com" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold">Slash Pull Five &rarr;</h3>
              <p className="mt-2">Roster management web app for a pet project gaming community</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full h-24 border-t flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} Chris Jackson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
