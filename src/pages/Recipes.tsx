import { useEffect } from "react";

export default function Recipes() {
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    async function getData() {
      const data = await fetch(`${baseUrl}/data.json`);
      const json = await data.json();
      console.log(json);
    }
    getData();
  }, [baseUrl]);

  return (
    <main className="grid grid-cols-1 justify-center justify-items-center gap-16 px-8 py-12">
      <div className="flex flex-col items-center gap-4 max-w-190">
        <h1 className="text-preset-2 text-green-950 text-center">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-preset-6  text-center text-gray-700">
          {" "}
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>

      <div className="flex items-center w-full max-w-360 justify-between gap-4 lg:flex-row flex-col text-preset-7 text-gray-700">
        <div className="flex gap-4 lg:flex-row flex-col lg:max-w-fit max-w-full w-full">
          <select className="appearance-none h-10 rounded-lg border border-gray-200 bg-white px-4  ">
            <option value="">Max Prep Time</option>
            <option value="10">10 mins</option>
            <option value="20">20 mins</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
          </select>

          <select className="appearance-none h-10 rounded-lg border border-gray-200 bg-white px-4 ">
            <option value="">Max Cook Time</option>
            <option value="10">10 mins</option>
            <option value="20">20 mins</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
          </select>
        </div>

        <div className="relative w-full lg:max-w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.83 5.83a7.65 7.65 0 0 0 10.82 10.82Z"
            />
          </svg>

          <input
            type="search"
            placeholder="Search by name or ingredient..."
            className="h-10  rounded-lg border border-slate-200 bg-white pl-10 pr-4 
             w-full lg:w-82
            "
          />
        </div>
      </div>
    </main>
  );
}
