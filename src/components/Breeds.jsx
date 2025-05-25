import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch breeds and images
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();
        const breedNames = Object.keys(data.message);

        const breedsWithImages = await Promise.all(
          breedNames.map(async (breed) => {
            const imgRes = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const imgData = await imgRes.json();
            return { name: breed, image: imgData.message };
          })
        );

        setBreeds(breedsWithImages);
        setFilteredBreeds(breedsWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch breeds", err);
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  // Search filter
  useEffect(() => {
    const term = search.toLowerCase();
    const filtered = breeds.filter((b) => b.name.includes(term));
    setFilteredBreeds(filtered);
  }, [search, breeds]);

  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto pt-20 px-4 py-8  min-h-screen transition-colors duration-300">
      <h1 className="md:text-2xl text-xl font-bold mb-6 text-text-light dark:text-text-dark">
      Find Your Perfect Pup
      </h1>

    <div className="w-full flex justify-end">

      <input
        type="text"
        placeholder="Find a pup you love..."
        className="w-32 md:w-96 p-2 pl-3 mb-6 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-darkLight text-text-light dark:text-text-dark placeholder:text-text-muted dark:placeholder:text-mutedDark"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

      {loading ? (
        <p className="text-center text-lg text-text-muted dark:text-mutedDark">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBreeds.map((breed) => (
            <BreedCard key={breed.name} name={breed.name} image={breed.image} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Breeds;
