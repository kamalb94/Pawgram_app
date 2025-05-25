const storiesData = [
    {
      title: "Hachiko: The Loyal Akita",
      content:
        "In Japan, Hachiko waited for his owner at Shibuya Station every day, even years after his owner's death. His loyalty inspired millions worldwide.",
    },
    {
      title: "Balto's Arctic Journey",
      content:
        "Balto led a sled dog team through a treacherous Alaskan blizzard in 1925 to deliver diphtheria antitoxin, saving countless lives.",
    },
    {
      title: "Laika: First Dog in Space",
      content:
        "Laika was the first living creature to orbit Earth aboard Sputnik 2. Though she didn't survive, her journey paved the way for human spaceflight.",
    },
    {
      title: "Greyfriars Bobby: The Faithful Skye Terrier",
      content:
        "In 19th-century Edinburgh, Bobby guarded his master's grave for 14 years, becoming a symbol of devotion and friendship.",
    },
    {
      title: "Togo: The Unsung Hero",
      content:
        "Togo covered the longest and most dangerous stretch in the 1925 serum run to Nome, Alaska, demonstrating incredible endurance and bravery.",
    },
    {
      title: "Smoky: The War Hero Dog",
      content:
        "During WWII, Smoky, a Yorkshire Terrier, saved soldiers by warning them of incoming attacks and even helped build a hospital airstrip.",
    },
    {
      title: "Endal: Britain's Most Decorated Dog",
      content:
        "Endal was a service dog who could understand over 100 commands, helped his disabled owner in daily life, and saved him from danger multiple times.",
    },
    {
      title: "Rin Tin Tin: From Rescue to Stardom",
      content:
        "Found as a puppy in a WWI battlefield, Rin Tin Tin became a famous Hollywood dog star, inspiring generations of dog lovers.",
    },
    {
      title: "Fala: Roosevelt's Loyal Companion",
      content:
        "President Franklin D. Roosevelt's Scottish Terrier, Fala, was famous for his presence in the White House and even influenced politics.",
    },
    {
      title: "Buddy: The First Seeing Eye Dog",
      content:
        "Buddy was the first guide dog trained in the United States, revolutionizing independence for visually impaired individuals.",
    },
    // Indian stories added below
    {
      title: "Ramu: The Hero of Gujarat",
      content:
        "In Gujarat, Ramu, a street dog, alerted a family about a fire in their home, helping save everyone. His bravery was honored by the local community.",
    },
    {
      title: "Sheila: Mumbai’s Train Companion",
      content:
        "Sheila became famous in Mumbai for accompanying her owner on the local trains every day for over a decade, showing incredible loyalty and routine.",
    },
    {
      title: "Tiger: The Temple Dog of Kerala",
      content:
        "Tiger lived near a Kerala temple, guarding it from thieves and helping priests. His story became a local legend of devotion and protection.",
    },
    {
      title: "Moti: The Delhi Guide Dog",
      content:
        "Moti assisted a visually impaired vendor in Delhi by guiding him safely through busy streets, highlighting the important role of service dogs in India.",
    },
  ];
  
  const Stories = () => {
    return (
      <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-text-dark">
        <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen mt-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Heartwarming Dog Stories</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Dive into some of the most inspiring and touching stories about dogs and their incredible bonds with humans — stories that celebrate loyalty, bravery, and friendship.
        </p>
  
        <div className="grid gap-8 md:grid-cols-2">
          {storiesData.map(({ title, content }, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">{content}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-16 p-6 rounded-lg  text-yellow-900 dark:text-yellow-100 max-w-3xl mx-auto text-center font-thin">
  <h3 className="text-xl font-medium mb-4">Did you know?</h3>
  <p className="text-sm italic">
    Many stray dogs suffer daily from hunger and thirst. By simply offering some food and water, you can save a life. Let's choose kindness and compassion — never harm or kill any animal. Every small act of love counts.
  </p>
</div>
      </div>
      </div>
    );
  };
  
  export default Stories;
  