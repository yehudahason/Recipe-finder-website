export default function Features() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <main>
      <section className="img-container-4">
        <div className="grid-4">
          <div className="item">
            <div className="text">
              <h1>Features</h1>
              <p>
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photograpers who wanted to
                share their stories.
              </p>
            </div>
          </div>
          <div className="item-img">
            <img
              src={`${baseUrl}/assets/features/desktop/hero.jpg`}
              alt="hero"
            />
          </div>
        </div>
      </section>
      <section className="text-container-1  p">
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
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/custom-domain.svg`}
            alt="custom domain"
          />
          <h5>Custom Domain</h5>
          <p>
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/boost-exposure.svg`}
            alt="boost exposure"
          />
          <h5> Boost Your Exposure</h5>
          <p>
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
        <div className="item">
          <img
            src={`${baseUrl}/assets/features/desktop/drag-drop.svg`}
            alt="drag and drop"
          />
          <h5>Drag & Drop Image</h5>
          <p>
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
        </div>
      </section>
    </main>
  );
}
