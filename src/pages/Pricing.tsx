import { useState } from "react";

export default function Pricing() {
  type Subscription = "basic" | "pro" | "business";
  const baseUrl = import.meta.env.BASE_URL;
  const [plan, setPlan] = useState<boolean>(false);
  const [choosen, setChoosen] = useState<Subscription>("pro");

  return (
    <main>
      <section className="img-container-4">
        <div className="grid-4">
          <div className="item">
            <div className="text">
              <h1> Pricing</h1>
              <p>
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
          <div className="item-img p">
            <img
              src={`${baseUrl}/assets/pricing/desktop/hero.jpg`}
              alt="hero"
            />
          </div>
        </div>
      </section>
      <section className="plan-container">
        <div className="plan-btn">
          <span
            className={`monthly ${!plan ? "active" : ""}`}
            aria-hidden="true"
          >
            Monthly
          </span>

          <div className={`checkbox-container ${plan ? "active" : ""}`}>
            {/* The input is the only focusable element here */}
            <input
              id="plan"
              type="checkbox"
              checked={plan}
              role="switch"
              aria-checked={plan}
              // This label tells the user what the switch does
              aria-label="Billing period"
              onChange={() => setPlan((prev) => !prev)}
            />
            {/* Visual indicator only */}
            <span className="checkmark" aria-hidden="true"></span>
          </div>

          <span
            className={`monthly ${plan ? "active" : ""}`}
            aria-hidden="true"
          >
            Yearly
          </span>
        </div>
        <div className="subscriptions">
          <div className={`item ${choosen === "basic" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Basic</h3>
                <p>
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "190" : "19"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"} </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setChoosen("basic");
              }}
            >
              Pick Plan
            </button>
          </div>
          <div className={`item ${choosen === "pro" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Pro</h3>
                <p>
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "390" : "39"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setChoosen("pro");
              }}
            >
              Pick Plan
            </button>
          </div>
          <div className={`item ${choosen === "business" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Business</h3>
                <p>
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "990" : "99"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"}</span>
              </div>
            </div>
            <button type="button" onClick={() => setChoosen("business")}>
              Pick Plan
            </button>
          </div>
        </div>
      </section>
      <section className="table">
        <h3>Compare</h3>

        <table>
          <thead>
            <tr className="head">
              <th scope="col">The Features</th>
              <th scope="col">Basic</th>
              <th scope="col">Pro</th>
              <th scope="col">Business</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Unlimited Story Posting</th>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Unlimited Photo Upload</th>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Embedding Custom Content</th>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Customize Metadata</th>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Advanced Metrics</th>
              <td></td>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Photo Downloads</th>
              <td></td>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">SEARCH ENGINE INDEXING</th>
              <td></td>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">Custom Analytics</th>
              <td></td>
              <td></td>
              <td>
                <img
                  src={`${baseUrl}/assets/pricing/desktop/check.svg`}
                  alt="checkmark"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
