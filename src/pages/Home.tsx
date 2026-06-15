export const baseUrl = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <main>
      <section className="img-container-1">
        <div className="grid-1 extra-height">
          <div className="text1 ">
            <h2>Create and share your photo Stories.</h2>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <a href="">
              get an invite
              <img
                src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                alt="get an invite"
              />
            </a>
          </div>
          <div className="img1">
            <img
              src={`${baseUrl}/assets/home/desktop/create-and-share.jpg`}
              alt="create and share"
            />
          </div>
        </div>
        <div className="grid-1 reverse">
          <div className="img2">
            <img
              src={`${baseUrl}/assets/home/desktop/beautiful-stories.jpg`}
              alt="beautiful stories"
            />
          </div>
          <div className="text1 ">
            <h3>Beautiful stories every time</h3>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>

            <a href="">
              View the stories
              <img
                src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                alt="view the stories"
              />
            </a>
          </div>
        </div>
        <div className="grid-1">
          <div className="text1">
            <h3>Designed for everyone</h3>
            <p>
              {" "}
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>

            <a href="">
              View the stories
              <img
                src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                alt="view the stories"
              />
            </a>
          </div>
          <div className="img2">
            <img
              src={`${baseUrl}/assets/home/desktop/designed-for-everyone.jpg`}
              alt="designed for everyone"
            />
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
      <section className="text-container-1">
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/responsive.svg`}
            alt="responsive"
          />
          <h5>100% Responsive</h5>
          <p>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/no-limit.svg`}
            alt="no limit"
          />
          <h5>No Photo Upload Limit</h5>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/embed.svg`}
            alt="embed"
          />
          <h5>Available to Embed</h5>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </section>
    </main>
  );
}
