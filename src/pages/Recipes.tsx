import { useEffect, useState } from "react";
import type { Recipe } from "../types";

export default function Recipes() {
  const baseUrl = import.meta.env.BASE_URL;
  const bulletIcon = baseUrl + "/assets/images/icon-bullet-point.svg";
  const [list, setList] = useState<Recipe[] | null>(null);
  const [cookTime, setCookTime] = useState<string>("50");
  const [prepTime, setPrepTime] = useState<string>("50");
  const [searchTerm, setSeacrhTerm] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  function handleSelect(id: number) {
    if (list) setSelectedRecipe(list[id - 1]);
  }

  function ranlist() {
    let unique3el = [...(list || [])];

    unique3el = unique3el.sort(() => Math.random() - 0.5).slice(0, 3);
    return unique3el;
  }
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(`${baseUrl}/data.json`);
        const getJson: Recipe[] = await data.json();
        console.log(getJson);

        setList(getJson);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
          alert(`Error fetching recipes : ${err.message}`);
        }
      }
    }
    getData();
  }, [baseUrl]);

  return (
    <main className="grid grid-cols-1 max-w-360 justify-center justify-items-center gap-16 px-12 py-12 mx-auto">
      {selectedRecipe ? (
        <>
          <h4 className="text-preset-7 text-gray-500 w-full text-left">
            Recipes /{" "}
            <span className="text-gray-700"> {selectedRecipe.title}</span>
          </h4>
          <div className="   rounded-xl flex lg:items-start  items-center lg:flex-row flex-col  gap-8 w-full">
            <img
              src={`${baseUrl}${selectedRecipe.image.large}`}
              alt=""
              className="lg:h-145 lg:w-145  rounded-xl max-w-130 w-full h-auto"
            />
            <div className="flex flex-col md:w-170 gap-4">
              <h2
                className="sm:text-preset-2 
              text-preset-4
              text-green-950 text-left"
              >
                {selectedRecipe.title}
              </h2>
              <p className="text-preset-6 text-gray-600">
                {selectedRecipe.overview}
              </p>
              <div className="flex  flex-wrap justify-start items-center gap-4">
                <span className="flex text-preset-9 text-green-950 gap-2 justify-center items-center">
                  <img
                    src={`${baseUrl}/assets/images/icon-servings.svg`}
                    alt=""
                  />
                  Serving : {selectedRecipe.servings}
                </span>
                <span className="flex  text-preset-9 text-green-950 gap-2 justify-center items-center">
                  <img
                    src={`${baseUrl}/assets/images/icon-prep-time.svg`}
                    alt=""
                  />
                  Prep: {selectedRecipe.prepMinutes}{" "}
                  {selectedRecipe.prepMinutes > 1 ? " mins" : " min"}
                </span>
                <span className="flex gap-2 text-preset-9 text-green-950 justify-center items-center">
                  <img
                    src={`${baseUrl}/assets/images/icon-cook-time.svg`}
                    alt=""
                  />
                  Cook : {selectedRecipe.cookMinutes}
                  {selectedRecipe.cookMinutes > 1 ? " mins" : " min"}
                </span>
              </div>
              <h4 className="text-preset-4 text-green-950">Ingredients:</h4>
              <ul>
                {selectedRecipe.ingredients.map((el) => {
                  return (
                    <li
                      key={el}
                      className="flex gap-2 items-start text-preset-6 text-gray-600 "
                    >
                      <img
                        className="h-5 translate-y-1"
                        src={bulletIcon}
                        alt=""
                      />{" "}
                      {el}
                    </li>
                  );
                })}
              </ul>
              <h4 className="text-preset-4 text-green-950">Instructions:</h4>
              <ul>
                {selectedRecipe.instructions.map((el) => {
                  return (
                    <li
                      key={el}
                      className="flex gap-2 items-start text-preset-6 text-gray-600 "
                    >
                      <img
                        className="h-5 translate-y-1"
                        src={bulletIcon}
                        alt=""
                      />{" "}
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <ul className="grid xs:grid-cols-2 xl:grid-cols-3 justify-center  items-start grid-cols-1 gap-6">
            {ranlist()?.map((el: Recipe) => (
              <li
                className=" md:max-w-94 p-4 bg-white border border-gray-300  rounded-xl flex justify-center items-start flex-col gap-3"
                key={el.id}
              >
                <img
                  src={`${baseUrl}${el.image.small}`}
                  alt=""
                  className="md:h-90 md:w-90  rounded-xl w-full h-auto"
                />
                <h2 className="text-preset-5 text-green-950 text-left">
                  {" "}
                  {el.title.slice(0, 33)}
                  {el.title.length > 33 ? "..." : ""}
                </h2>
                <p className="text-preset-6 text-gray-600">{el.overview}</p>
                <div className="flex  flex-wrap justify-start items-center gap-4">
                  <span className="flex text-preset-9 text-green-950 gap-2 justify-center items-center">
                    <img
                      src={`${baseUrl}/assets/images/icon-servings.svg`}
                      alt=""
                    />
                    Serving : {el.servings}
                  </span>
                  <span className="flex  text-preset-9 text-green-950 gap-2 justify-center items-center">
                    <img
                      src={`${baseUrl}/assets/images/icon-prep-time.svg`}
                      alt=""
                    />
                    Prep: {el.prepMinutes}{" "}
                    {el.prepMinutes > 1 ? " mins" : " min"}
                  </span>
                  <span className="flex gap-2 text-preset-9 text-green-950 justify-center items-center">
                    <img
                      src={`${baseUrl}/assets/images/icon-cook-time.svg`}
                      alt=""
                    />
                    Cook : {el.cookMinutes}
                    {el.cookMinutes > 1 ? " mins" : " min"}
                  </span>
                </div>
                <button
                  type="button"
                  className="text-preset-8 text-white w-full rounded-3xl bg-green-950 text-center py-3 cursor-pointer"
                  onClick={() => {
                    handleSelect(el.id);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  View Recipe
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center gap-4 max-w-190">
            <h1 className="text-preset-2 text-green-950 text-center">
              Explore our simple, healthy recipes
            </h1>
            <p className="text-preset-6  text-center text-gray-700">
              {" "}
              Discover eight quick, whole-food dishes that fit real-life
              schedules and taste amazing. Use the search bar to find a recipe
              by name or ingredient, or simply scroll the list and let something
              delicious catch your eye.
            </p>
          </div>

          <div className="flex items-center w-full max-w-360 justify-between gap-4 md:flex-row flex-col text-preset-7 text-gray-700">
            <div className="flex gap-4 md:flex-row flex-col lg:max-w-fit md:w-1/2 max-w-full w-full">
              <select
                className=" h-10 rounded-lg border border-gray-200 bg-white px-4 
          
          "
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
              >
                <option value="50">Max Prep Time</option>
                <option value="0">0 mins</option>
                <option value="5">5 mins</option>
                <option value="10">10 mins</option>
                <option value="15">15 mins</option>
                <option value="51">Any</option>
              </select>

              <select
                className=" h-10 rounded-lg border border-gray-200 bg-white px-4 "
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
              >
                <option value="50">Max Cook Time</option>
                <option value="0">0 mins</option>
                <option value="5">5 mins</option>
                <option value="10">10 mins</option>
                <option value="15">15 mins</option>
                <option value="20">20 mins</option>
                <option value="51">Any</option>
              </select>
            </div>

            <div className="relative w-full lg:max-w-fit md:w-4/9 ">
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
                value={searchTerm}
                onChange={(e) => setSeacrhTerm(e.target.value)}
              />
            </div>
          </div>

          <ul className="grid xs:grid-cols-2 xl:grid-cols-3 justify-center  items-start grid-cols-1 gap-6">
            {list
              ?.filter((sl) => sl.cookMinutes <= +cookTime)
              .filter((sl2) => sl2.prepMinutes <= +prepTime)
              .filter(
                (recipe) =>
                  recipe.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  recipe.ingredients.some((ingredient) =>
                    ingredient.toLowerCase().includes(searchTerm.toLowerCase()),
                  ),
              )
              .map((el: Recipe) => (
                <li
                  className=" md:max-w-94 p-4 bg-white border border-gray-300  rounded-xl flex justify-center items-start flex-col gap-3"
                  key={el.id}
                >
                  <img
                    src={`${baseUrl}${el.image.small}`}
                    alt=""
                    className="md:h-90 md:w-90  rounded-xl w-full h-auto"
                  />
                  <h2 className="text-preset-5 text-green-950 text-left">
                    {" "}
                    {el.title.slice(0, 33)}
                    {el.title.length > 33 ? "..." : ""}
                  </h2>
                  <p>{el.overview}</p>
                  <div className="flex  flex-wrap justify-start items-center gap-4">
                    <span className="flex text-preset-9 text-green-950 gap-2 justify-center items-center">
                      <img
                        src={`${baseUrl}/assets/images/icon-servings.svg`}
                        alt=""
                      />
                      Serving : {el.servings}
                    </span>
                    <span className="flex  text-preset-9 text-green-950 gap-2 justify-center items-center">
                      <img
                        src={`${baseUrl}/assets/images/icon-prep-time.svg`}
                        alt=""
                      />
                      Prep: {el.prepMinutes}{" "}
                      {el.prepMinutes > 1 ? " mins" : " min"}
                    </span>
                    <span className="flex gap-2 text-preset-9 text-green-950 justify-center items-center">
                      <img
                        src={`${baseUrl}/assets/images/icon-cook-time.svg`}
                        alt=""
                      />
                      Cook : {el.cookMinutes}
                      {el.cookMinutes > 1 ? " mins" : " min"}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-preset-8 text-white w-full rounded-3xl bg-green-950 text-center py-3 cursor-pointer"
                    onClick={() => {
                      handleSelect(el.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    View Recipe
                  </button>
                </li>
              ))}
          </ul>
        </>
      )}
    </main>
  );
}
