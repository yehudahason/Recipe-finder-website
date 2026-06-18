export default function About() {
  const baseUrl = import.meta.env.BASE_URL;
  const bulletIcon = baseUrl + "/assets/images/icon-bullet-point.svg";
  return (
    <main className="grid grid-cols-1 justify-center justify-items-center gap-22 px-8 py-12">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-4 max-w-360 w-full relative">
        <span
          className="xl:w-1/2
                xl:max-w-[500px]: xl:px-6 flex flex-col gap-4"
        >
          <span
            className="bg-orange-400 p-1 rounded-xl text-preset-4
          inline-block w-fit text-green-950"
          >
            Our mission
          </span>
          <h2 className="lg:text-preset-2 text-preset-3 text-green-950">
            Help more people cook nourishing meals, more often.
          </h2>
          <p className="text-preset-6  text-gray-700 xl:max-w-137.5">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="text-preset-6  text-gray-700 xl:max-w-137.5">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </span>
        <img
          src={`${baseUrl}/assets/images/image-about-our-mission-large.webp`}
          className="xl:w-155
                  rounded-xl lg:w-3/4 md:w-8/9  w-full h-full object-cover"
        />
        <img
          src={`${baseUrl}/assets/images/pattern-squiggle-2.svg`}
          className="lg:block hidden w-26
                  absolute object-cover top-1/2 -right-9"
        />
      </div>
      <div
        className="flex xl:grid xl:grid-cols-2 xl:mx-8
      flex-col max-w-360 gap-8
      pl-8
      "
      >
        <h2 className="lg:text-preset-2 text-preset-3 text-green-950">
          Why we exist
        </h2>
        <ul className=" flex flex-col gap-4">
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Cut through the noise.</b>
            <p className="text-preset-6  text-gray-700">
              The internet is bursting with recipes, yet most busy cooks still
              default to take-away or packaged foods. We curate a tight
              collection of fool-proof dishes so you can skip the scrolling and
              start cooking.
            </p>
          </li>
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Empower home kitchens.</b>
            <p className="text-preset-6 text-gray-700">
              When you control what goes into your meals, you control how you
              feel. Every recipe is built around unrefined ingredients and ready
              in about half an hour of active prep.
            </p>
          </li>
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Make healthy look good.</b>
            <p className="text-preset-6  text-gray-700">
              High-resolution imagery shows you exactly what success looks
              like—because we eat with our eyes first, and confidence matters.
            </p>
          </li>
        </ul>
      </div>
      <div
        className="flex xl:grid xl:grid-cols-2 xl:mx-8
      flex-col max-w-360 gap-8
      pl-8
      "
      >
        <h2 className="lg:text-preset-2 text-preset-3 text-green-950">
          Our food philosophy
        </h2>
        <ul className=" flex flex-col gap-4">
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4"> Whole ingredients first. </b>
            <p className="text-preset-6  text-gray-700">
              Fresh produce, grains, legumes, herbs, and quality fats form the
              backbone of every recipe.
            </p>
          </li>
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Flavor without compromise.</b>
            <p className="text-preset-6 text-gray-700">
              Spices, citrus, and natural sweetness replace excess salt, sugar,
              and additives.
            </p>
          </li>
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Respect for time.</b>
            <p className="text-preset-6  text-gray-700">
              Weeknight meals should slot into real schedules; weekend cooking
              can be leisurely but never wasteful.
            </p>
          </li>
          <li className="relative flex flex-col gap-4">
            <img
              src={bulletIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-10"
            />
            <b className="text-preset-4">Sustainable choices. </b>
            <p className="text-preset-6  text-gray-700">
              Short ingredient lists cut down on food waste and carbon
              footprint, while plant-forward dishes keep things planet-friendly.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 max-w-360 w-full relative">
        <span
          className="
                xl:max-w-150 xl:px-6 flex flex-col gap-4"
        >
          <h2 className="lg:text-preset-2 text-preset-3 text-green-950">
            Beyond the plate
          </h2>
          <p className="text-preset-6  text-gray-700 xl:max-w-100">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc xl:max-w-100 pl-5 text-preset-6  text-gray-700">
            <li>Encourage family dinners and social cooking. </li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              {" "}
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </span>
        <img
          src={`${baseUrl}/assets/images/image-about-beyond-the-plate-large.webp`}
          className="xl:h-100 xl:w-187.5 lg:w-3/4
                  rounded-xl md:w-8/9 w-full h-full object-cover"
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
          className="text-preset-6  text-gray-700
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
