export default function Stories() {
  const baseUrl = import.meta.env.BASE_URL;
  console.log(baseUrl);
  return (
    <main>
      <section className="img-container-3">
        <div className="grid-3">
          <div className="img-item">
            <img
              src={`${baseUrl}/assets/stories/desktop/moon-of-appalacia.jpg`}
              alt="moon of appalacia"
            />
          </div>
          <div className="text-abs2">
            <strong>Last month's featured story</strong>
            <h1>Hazy full moon of Appalachia</h1>
            <p>
              March 2nd 2020 <span> by John Appleseed </span>
            </p>
            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <a
              href="
            "
            >
              Read the story
              <img
                src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                alt="read the story"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/mountains.jpg`}
              alt="mountains"
            />
            <div className="text-abs">
              <h4>The Mountains</h4>
              <p>by John Appleseed</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/cityscapes.jpg`}
              alt="cityscapes"
            />

            <div className="text-abs">
              {" "}
              <h4>Sunset Cityscapes</h4>
              <p>by Benjamin Cruz</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/18-days-voyage.jpg`}
              alt="18 days voyage"
            />
            <div className="text-abs">
              <h4>18 Days Voyage</h4>
              <p>by Alexei Borodin</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/architecturals.jpg`}
              alt="architecturals"
            />
            <div className="text-abs">
              <h4>Architecturals</h4>
              <p>by Samantha Brooke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/world-tour.jpg`}
              alt="world tour"
            />
            <div className="text-abs">
              <p>April 7th 2020</p>
              <h4>World Tour 2019</h4>
              <p>by Timothy Wagner</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/unforeseen-corners.jpg`}
              alt="unforeseen corners"
            />

            <div className="text-abs">
              {" "}
              <p>April 3rd 2020</p>
              <h4>Unforeseen Corners</h4>
              <p>by William Malcolm Read Story</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/king-on-africa.jpg`}
              alt="king on africa"
            />
            <div className="text-abs">
              <p>March 29th 2020</p>
              <h4>King on Africa: Part II</h4>
              <p>by Tim Hillenburg</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/trip-to-nowhere.jpg`}
              alt="trip to nowhere"
            />
            <div className="text-abs">
              <p>March 21st 2020</p>
              <h4>The Trip to Nowhere</h4>
              <p>by Felicia Rourke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/rage-of-the-sea.jpg`}
              alt="rage of the sea"
            />
            <div className="text-abs">
              <p>March 19th 2020</p>
              <h4>Rage of The Sea</h4>
              <p>by Mohammed Abdul</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item dark-bg">
            <img
              src={`${baseUrl}/assets/stories/desktop/running-free.jpg`}
              alt="running free"
            />

            <div className="text-abs">
              {" "}
              <p>March 16th 2020</p>
              <h4>Running Free</h4>
              <p>by Michelle</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/behind-the-waves.jpg`}
              alt="behind the waves"
            />
            <div className="text-abs">
              <p>March 11th 2020</p>
              <h4> Behind the Waves</h4>
              <p>by Lamarr Wilson</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/calm-waters.jpg`}
              alt="calm waters"
            />
            <div className="text-abs">
              <p>March 9th 2020</p>
              <h4>Calm Waters</h4>
              <p>by Samantha Brooke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/milky-way.jpg`}
              alt="milky way"
            />
            <div className="text-abs">
              <p>March 5th 2020</p>
              <h4>The Milky Way</h4>
              <p>by Benjamin Cruz</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/dark-forest.jpg`}
              alt="dark forest"
            />

            <div className="text-abs">
              {" "}
              <p>March 4th 2020</p>
              <h4>Night at The Dark Forest</h4>
              <p>by Mohammed Abdul</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/somwarpet.jpg`}
              alt="somwarpet"
            />
            <div className="text-abs">
              <p>March 1st 2020</p>
              <h4>Somwarpet’s Beautys</h4>
              <p>by Michelle</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/land-of-dreams.jpg`}
              alt="land of dreams"
            />
            <div className="text-abs">
              <p>February 25th 2020</p>
              <h4>Land of Dreams</h4>
              <p>by William Malcolm</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt="read story"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
