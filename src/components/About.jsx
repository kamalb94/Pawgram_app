const About = () => {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-text-dark">
        <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen mt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">About Pawgram</h1>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="leading-relaxed">
            <strong>Pawgram</strong> is more than just a dog breed encyclopedia. We’re on a mission to create a connected, informed, and compassionate world for pet lovers. 
            From choosing the right dog to caring for it, our goal is to empower individuals with trusted information and community support.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">What We Solve</h2>
          <p className="leading-relaxed">
            Many people adopt pets without knowing their habits, needs, or behaviors. This leads to mismatched homes and overwhelmed owners. 
            <strong> Pawgram</strong> solves this by providing detailed insights about each breed — including energy, barking level, child-friendliness, trainability, and more — all visualized clearly for easier decisions.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">The Future of Pawgram</h2>
          <p className="leading-relaxed">
            We’re building the future of pet care and social connection. Soon, <strong>Pawgram</strong> will introduce:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>A social platform to share short videos, images, and training tutorials</li>
            <li>Interactive content formats for bite-sized dog care education</li>
            <li>Chat features to connect adopters, pet lovers, NGOs, local distributors & care centers</li>
            <li>Community support for fostering, adoption, rescue, and pet parenting</li>
          </ul>
          <p className="mt-2">
            Our goal is to build a thriving ecosystem where people and animals find meaningful connection and support.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p className="leading-relaxed">
            <strong>Pawgram</strong> is a personal project by <strong>Kamal Biswal</strong> — a developer passionate about using technology to make a difference in the lives of animals and the people who care for them.
          </p>
        </section>
  
        <div className="text-center mt-12">
          <p className="text-sm opacity-75">© {new Date().getFullYear()} Pawgram • Created by Kamal Biswal</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default About;
  