import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PawgramLanding() {
  useEffect(() => {
    document.title = 'Pawgram - Connecting Adopters, Pet Shops & NGOs for Happy Dogs';
  }, []);

  // Optional dark mode toggle state
  

  return (
    <main className="min-h-screen bg-primary-light dark:bg-background-dark p-4 md:p-12 font-sans transition-colors duration-500 ">
      <section className="text-center max-w-5xl mx-auto mt-32">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-primary dark:text-primary-light drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Pawgram
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4 text-text-light dark:text-text-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Connecting adopters, pet shops, and NGOs to find loving homes for dogs and perfect adopters for every pup.
        </motion.p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 text-lg rounded-full transition-colors duration-300">
            Find Dogs to Adopt
          </button>
          <button
            className="text-secondary border-secondary hover:bg-secondary-light px-6 py-2 text-lg rounded-full transition-colors duration-300 dark:text-secondary-light dark:border-secondary-light dark:hover:bg-secondary-dark"
          >
            Partner with Us
          </button>
        </div>

      </section>

      {/* Why Pawgram */}
      <motion.section
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
          alt="Happy Dog"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">Why Pawgram?</h2>
          <ul className="list-disc pl-6 text-text-light dark:text-text-mutedDark space-y-2">
            <li>Bringing adopters, pet shops, and NGOs together in one platform</li>
            <li>Curated matches between dogs and their ideal adopters</li>
            <li>Support from trusted pet shops and animal welfare NGOs</li>
            <li>Easy sharing of pet profiles, adoption stories, and care tips</li>
            <li>Building a compassionate community dedicated to dog welfare</li>
          </ul>
        </div>
      </motion.section>

      {/* New Section: Why You Should Have a Dog */}
      <motion.section
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">Why You Should Have a Dog</h2>
          <ul className="list-disc pl-6 text-text-light dark:text-text-mutedDark space-y-2">
            <li>Dogs provide unconditional love and companionship</li>
            <li>They encourage a healthy and active lifestyle</li>
            <li>Reduce stress and improve mental health</li>
            <li>Teach responsibility and empathy</li>
            <li>Become loyal family members who bring joy every day</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dog and owner bonding"
          className="rounded-2xl shadow-lg"
        />
      </motion.section>

      {/* Emotional Story Section */}
      <motion.section
        className="mt-20 max-w-5xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">An Unbreakable Bond</h2>
        <p className="text-lg text-text-muted dark:text-text-mutedDark max-w-3xl mx-auto">
          One of the most touching stories is about Hachiko, a loyal Akita dog in Japan, who waited faithfully at the train station every day for his owner’s return, even years after his owner's passing. His unwavering loyalty has inspired millions and symbolizes true friendship and devotion.
        </p>
        <img
          src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/A24C/production/_130184514_gettyimages-1485893156.jpg"
          alt="Hachiko statue"
          className="mt-8 mx-auto rounded-2xl shadow-lg max-w-full h-auto"
        />
      </motion.section>

      {/* Explore Dog Breeds Section */}
      <motion.section
        className="mt-20 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">Explore Dog Breeds</h2>
        <p className="text-text-light dark:text-text-mutedDark mb-6 max-w-xl mx-auto">
          Discover detailed information about various dog breeds and find the perfect companion for you.
        </p>
        <button
          onClick={() => window.location.href = '/breeds'}
          className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 text-lg rounded-full transition-colors duration-300"
        >
          Browse Breeds
        </button>
      </motion.section>

      {/* Video Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <motion.video
          className="rounded-xl w-full shadow-xl"
          controls
          autoPlay
          muted
          loop
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <source src="/dog.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-text-muted dark:text-text-mutedDark">
        <p className="text-sm">&copy; 2025 Pawgram. Built with ❤️ to unite dogs with their forever families.</p>
      </footer>
    </main>
  );
}
