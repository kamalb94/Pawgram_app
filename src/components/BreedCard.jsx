import { Link } from "react-router-dom";

const BreedCard = ({ name, image }) => (
  <Link to={`/breed/${name}`} className="block">
    <div className="relative rounded overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800 group">
      <div className="w-full aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent flex items-end to-black  bg-opacity-50 h-1/2 px-4 py-2">
          <h2 className="text-white text-base font-semibold capitalize">{name}</h2>
        </div>
      </div>
    </div>
  </Link>
);

export default BreedCard;
