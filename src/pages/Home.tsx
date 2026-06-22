import { Link } from "react-router";
const baseUrl = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <main className="grid grid-cols-1 justify-center justify-items-center gap-16 px-8">
      <div
        className="mt-12 flex flex-col items-center gap-6
      justify-center
      "
      >
        <h1 className="lg:text-preset-1  text-preset-2 text-green-950">
          <span className="relative inline-block">
            <span className="relative z-10">Healthy</span>
            <span className="absolute left-0 bottom-0 w-[103%] h-10 bg-[#EBC9B3] rounded -z-10 shadow"></span>
          </span>{" "}
          meals, zero fuss
        </h1>
        <p
          className="text-preset-6  text-gray-700
      
      max-w-150 lg:text-center text-left"
        >
          Discover eight quick, whole-food recipes that you can cook tonight —no
          processed junk, no guesswork.
        </p>
        <Link
          to="/recipes"
          className=" p-4 bg-green-950 rounded-xl
        text-white
        text-preset-5
        z-10
        "
        >
          Start exploring{" "}
        </Link>
      </div>
      <div className="xl:h-132.5 xl:w-298 w-full  rounded-2xl overflow-hidden">
        <img
          src={`${baseUrl}/assets/images/image-home-hero-small.webp`}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="sm:text-preset-2 text-preset-3 text-green-950 lg:text-center text-left w-full">
        What you'll get
      </h2>

      <div
        className="grid lg:grid-cols-3  gap-4 grid-cols-1
      w-full  lg:justify-items-center border-b pb-12 border-gray-400
      max-w-360
      "
      >
        <span className="lg:max-w-92.5 pr-4 flex flex-col gap-4">
          <img
            src={`${baseUrl}/assets/images/icon-whole-food-recipes.svg`}
            alt="Whole-food recipes"
            className="bg-white w-12 h-12 py-1 px-3 rounded"
          />
          <h3 className="text-preset-3">Whole-food recipes </h3>
          <p className="text-preset-6  text-gray-700">
            Each dish uses everyday, unprocessed ingredients.
          </p>
        </span>
        <span className="lg:max-w-92.5 pr-4 flex flex-col gap-4">
          <img
            src={`${baseUrl}/assets/images/icon-minimum-fuss.svg`}
            alt="Minimum fuss"
            className="bg-white p-1 w-12 h-12 rounded"
          />
          <h3 className="text-preset-3">Minimum fuss</h3>

          <p className="text-preset-6  text-gray-700">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </span>

        <span className="lg:max-w-92.5 pr-4 flex flex-col gap-4">
          <img
            src={`${baseUrl}/assets/images/icon-search-in-seconds.svg`}
            alt="search"
            className="bg-white p-1 
            w-12 h-12 rounded"
          />
          <h3 className="text-preset-3">Search in seconds</h3>
          <p className="text-preset-6  text-gray-700">
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-center gap-4 max-w-360 w-full">
        <span
          className="xl:w-1/2
        xl:max-w-[500px]: xl:px-6 flex flex-col gap-4"
        >
          <h2 className="sm:text-preset-2 text-preset-3 text-green-950">
            Built for real life
          </h2>
          <p className="text-preset-6  text-gray-700 xl:max-w-137.5">
            {" "}
            Cooking shouldn't be complicated. These recipes come in under
            <span
              className="relative
            inline-block
             "
            >
              30 minutes
              <span className="absolute left-0 bottom-1 w-full h-4 bg-orange-400 rounded -z-10 shadow"></span>
            </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-preset-6  text-gray-700 xl:max-w-137.5">
            Whether you're new to the kitchen or just need fresh ideas, we've
            got you covered.
          </p>
        </span>
        <img
          src={`${baseUrl}/assets/images/image-home-real-life-large.webp`}
          className="xl:w-175
          rounded w-full h-full object-cover"
          alt="real life"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center
        relative
        w-full max-w-360
        ne-200 rounded-2xl
        h-100
        overflow-hidden
        gap-6
        p-4
      "
      >
        <img
          src={`${baseUrl}/assets/images/pattern-fork.svg`}
          alt="fork"
          className="absolute -left-17 bottom-0
          z-0
          lg:block hidden
          "
        />
        <img
          src={`${baseUrl}/assets/images/pattern-knife.svg`}
          alt="knife"
          className="absolute -right-17 top-5
          lg:block hidden
          z-0"
        />
        <h2
          className="sm:text-preset-2 
          text-preset-3
          text-green-950 text-center
        z-10"
        >
          Ready to cook smarter?
        </h2>
        <p
          className="text-preset-6  text-gray-700
        z-10 text-center"
        >
          {" "}
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Link
          to="/recipes"
          className=" p-4 bg-green-950 rounded-xl
        text-white
        text-preset-5
        z-10
        "
        >
          Browse recipes
        </Link>
      </div>
    </main>
  );
}
