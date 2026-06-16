export const baseUrl = import.meta.env.BASE_URL;

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
          className="text-preset-6 text-neutral-800
      
      max-w-150 lg:text-center text-left"
        >
          Discover eight quick, whole-food recipes that you can cook tonight —no
          processed junk, no guesswork.
        </p>
        <a
          href=""
          className=" p-4 bg-green-950 rounded-xl text-white text-preset-5 lg:self-center self-start"
        >
          Start exploring{" "}
        </a>
      </div>
      <div className="xl:h-[530px] xl:w-[1192px] w-full  rounded-2xl overflow-hidden">
        <img
          src={`${baseUrl}/assets/images/image-home-hero-small.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-preset-2 text-green-950 lg:text-center text-left w-full">
        What you'll get
      </h2>

      <div
        className="grid lg:grid-cols-3  gap-4 grid-cols-1
      w-full  lg:justify-items-center border-b pb-12 border-gray-400
      max-w-[1440px]
      "
      >
        <span className="lg:max-w-[370px] pr-4 flex flex-col gap-4">
          <img
            src={`${baseUrl}/assets/images/icon-whole-food-recipes.svg`}
            alt=""
            className="bg-white w-[3rem] h-[3rem] py-1 px-3 rounded"
          />
          <h3 className="text-preset-3">Whole-food recipes </h3>
          <p className="text-preset-6 text-neutral-800">
            Each dish uses everyday, unprocessed ingredients.
          </p>
        </span>
        <span className="lg:max-w-[370px] pr-4">
          <img
            src={`${baseUrl}/assets/images/icon-minimum-fuss.svg`}
            alt=""
            className="bg-white p-1 w-[3rem] h-[3rem] rounded"
          />
          <h3 className="text-preset-3">Minimum fuss</h3>

          <p className="text-preset-6 text-neutral-800">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </span>

        <span className="lg:max-w-[370px] pr-4">
          <img
            src={`${baseUrl}/assets/images/icon-search-in-seconds.svg`}
            alt=""
            className="bg-white p-1 
            w-[3rem] h-[3rem] rounded"
          />
          <h3 className="text-preset-3">Search in seconds</h3>
          <p className="text-preset-6 text-neutral-800">
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-center gap-4 max-w-[1440px] w-full">
        <span
          className="xl:w-1/2
        xl:max-w-[500px]: xl:px-6 flex flex-col gap-4"
        >
          <h2 className="text-preset-2 text-green-950">Built for real life</h2>
          <p className="text-preset-6 text-neutral-800 xl:max-w-[550px]">
            {" "}
            Cooking shouldn't be complicated. These recipes come in under
            <span
              className="relative
            inline-block
             "
            >
              30 minutes
              <span className="absolute left-0 bottom-1 w-[103%] h-4 bg-orange-400 rounded -z-10 shadow"></span>
            </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-preset-6 text-neutral-800 xl:max-w-[550px]">
            Whether you're new to the kitchen or just need fresh ideas, we've
            got you covered.
          </p>
        </span>
        <img
          src={`${baseUrl}/assets/images/image-home-real-life-large.webp`}
          className="xl:w-[700px]
          rounded w-full h-full object-cover"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center
        relative
        w-full max-w-[1440px]
        bg-blue-50 rounded-2xl
        h-100
        overflow-hidden
        gap-6
        p-4
      "
      >
        <img
          src={`${baseUrl}/assets/images/pattern-fork.svg`}
          alt=""
          className="absolute -left-17 bottom-0
          z-0
          lg:block hidden
          "
        />
        <img
          src={`${baseUrl}/assets/images/pattern-knife.svg`}
          alt=""
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
          className="text-preset-6 text-neutral-800
        z-10 text-center"
        >
          {" "}
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <a
          href=""
          className=" p-4 bg-green-950 rounded-xl
        text-white
        text-preset-5
        z-10
        "
        >
          Browse recipes
        </a>
      </div>
    </main>
  );
}
