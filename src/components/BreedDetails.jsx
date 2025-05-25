import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BreedDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "A/Ir7m4zhZVR9BiOSgAyQA==4HvmOWSIvfkbfuLd";

  useEffect(() => {
    const fetchBreedDetails = async () => {
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
          headers: { "X-Api-Key": apiKey },
        });
        const data = await res.json();
        setBreed(data[0]);
      } catch (err) {
        console.error("Error fetching breed details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBreedDetails();
  }, [name]);

  const getRatingText = (rating) => {
    if (rating >= 4) return "Excellent";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Average";
    return "Low";
  };

  const getTag = (label, value) => (
    <li className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
      <span className="font-medium">{label}</span>
      <span className="font-semibold text-blue-600 dark:text-blue-400">{getRatingText(value)} ({value}/5)</span>
    </li>
  );

  if (loading) return <div className="text-center py-20 text-xl w-full h-full min-h-[100dvh] bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-52">Loading...</div>;
  if (!breed) return <div className="text-center py-20 text-xl w-full h-full min-h-[100dvh] bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-52 flex flex-col items-center">
    <div className="p-6 bg-slate-800 w-fit rounded-full"><img src="/notfound.svg" alt="notfound" className="text-center w-32 h-32"/></div>
    <p className="mt-4">Oops! We couldn’t find this pup.</p>
    </div>;

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen dark:text-white transition-colors duration-300 mt-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-3.5 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition"
      >
        ← 
      </button>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={breed.image_link}
          alt={name}
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 capitalize">{name}</h1>
          <ul className="space-y-2 text-sm">
            <li><strong>Life Expectancy:</strong> {breed.min_life_expectancy}–{breed.max_life_expectancy} years</li>
            <li><strong>Weight (Male):</strong> {breed.min_weight_male}–{breed.max_weight_male} lbs</li>
            <li><strong>Height (Male):</strong> {breed.min_height_male}–{breed.max_height_male} inches</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Temperament & Ratings</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          {getTag("Shedding", breed.shedding)}
          {getTag("Barking", breed.barking)}
          {getTag("Energy", breed.energy)}
          {getTag("Trainability", breed.trainability)}
          {getTag("Good with Children", breed.good_with_children)}
          {getTag("Good with Other Dogs", breed.good_with_other_dogs)}
          {getTag("Good with Strangers", breed.good_with_strangers)}
          {getTag("Playfulness", breed.playfulness)}
          {getTag("Protectiveness", breed.protectiveness)}
          {getTag("Grooming", breed.grooming)}
          {getTag("Drooling", breed.drooling)}
          {getTag("Coat Length", breed.coat_length)}
        </ul>
      </div>

      <div className="mt-10 text-sm bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-2">Quick Summary:</h3>
        <p className="mb-2">This breed is <strong>{getRatingText(breed.good_with_children).toLowerCase()}</strong> with children and <strong>{getRatingText(breed.good_with_other_dogs).toLowerCase()}</strong> with other dogs.</p>
        <p className="mb-2">They are <strong>{getRatingText(breed.trainability).toLowerCase()}</strong> to train and have <strong>{getRatingText(breed.energy).toLowerCase()}</strong> energy levels.</p>
        <p>Overall, they make a <strong>{getRatingText(breed.protectiveness).toLowerCase()}</strong> guard and <strong>{getRatingText(breed.playfulness).toLowerCase()}</strong> companion.</p>
      </div>
    </div>
    </div>
  );
};

export default BreedDetails;
