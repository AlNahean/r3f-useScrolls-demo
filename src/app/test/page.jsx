import React from "react";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Test = () => {
  return (
    <div
      className="  bg-dark min-h-screen"
      style={{
        maxWidth: "100vw ",
        overflow: "hidden",
      }}
    >
      <TestComponent />
    </div>
  );
};

const TestComponent = () => {
  return (
    <main>
      <section className="sec about-home">
        <video
          className="lazy"
          autoPlay
          muted
          loop
          playsInline
          width="1920px"
          height="1080px"
          poster="https://res.cloudinary.com/dyoknwemx/image/upload/v1680271722/rebels/ss1_u89mzr.png"
        >
          <source
            data-src="https://res.cloudinary.com/dyoknwemx/video/upload/v1680271190/rebels/about_home_dmn8xi.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="sec">
        <div className="container-fluid div-p">
          <div className="row about-content g-0">
            <div className="col-sm-12 col-md-9 offset-md-2">
              <h2 className="content__title">
                LEADING THE CHARGE AS A
                <span className="font-1"> PLAY-TO-EARN NFT GAMES</span>{" "}
                DEVELOPER AND PUBLISHER BRINGING{" "}
                <span className="font-1"> PLAY-TO-EARN NFT GAMES</span> ,
                STREAMING ENTERTAINMENT &amp; IN-GAME{" "}
                <span className="font-1">NFTS</span>TO A WIDER AUDIENCE
              </h2>
            </div>
            <div className="col-sm-12 col-md-7 offset-md-3 col-lg-7 offset-lg-3">
              <h4 className="font-small content__p mt-5 js-split">
                Play-to-Earn NFT games are the future and best catalyst for
                blockchain mass adoption. The most popular form of entertainment
                is watching games; streaming games will reach 920 million
                viewers by 2024.
              </h4>
              <p className="font-small content__p mt-3 js-split">
                We aim to work with individuals, brands, and partnerships that
                challenge the status quo and leave the world better than they
                found.{" "}
              </p>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-3">
                  <h6 className="color-alt js-split">WHY US</h6>
                </div>
                <div className="col-sm-12 col-md-9">
                  <p className="font-small content__p js-split">
                    Rebels Revolt is based on an open, flexible, transparent,
                    and resilient organizational structure that can withstand
                    external shocks, it is a decentralized model that allows for
                    peer-to-peer interactions, collaboration and an open model
                    that encourages participation from a wide range of
                    stakeholders.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-3">
                  <h6 className="color-alt js-split">YOUR FUTURE</h6>
                </div>
                <div className="col-sm-12 col-md-9">
                  <p className="font-small content__p js-split">
                    We will harness the power of blockchain ecosystems to create
                    value for our community, customers, and partners by forming
                    alliances and building affinity communities. You will be
                    left with no doubt about our commitments, no confusion about
                    your own for a better tomorrow, and a collective vision of
                    how we’ll achieve it.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider-wrapper box">
              <div className="divider" />
              <div className="d-flex justify-content-between py-2">
                <p className="small-font">INNOVATE &amp; DISTRUP</p>{" "}
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680374945/rebels/border-img_bf82qs.svg"
                  alt="border-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container-fluid div-p g-0">
          <div className="col-sm-12 col-md-9 offset-md-2">
            <p className="small-font color-alt">PHASE 1</p>
            <h2 className="content__title">
              GAMING <span className="font-1">ECOSYSTEM</span>
              CONNECTOR <br /> <span className="font-1">THE GATEWAY</span> TO
              WEB 3.0 &amp; WEB3
            </h2>
            <div className="phase-one">
              <div className="row tab-wrapper">
                <div className="col-6 pe-5">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-vision"
                      role="tabpanel"
                      aria-labelledby="v-pills-vision-tab"
                      tabIndex={0}
                    >
                      To create the Rebels Universe, an ecosystem connector that
                      will bring in the world’s next-gen media marketplace with
                      a focus on delivering Play-to-Earn gaming, NFTs, media
                      content, and TV. Imagine EA, Twitch, and OpenSea being
                      merged into a singular platform.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-mission"
                      role="tabpanel"
                      aria-labelledby="v-pills-mission-tab"
                      tabIndex={0}
                    >
                      To explore the future of blockchain gaming, NFTs, &amp;
                      streaming with a pure passion for disrupting the status
                      quo
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-opportunity"
                      role="tabpanel"
                      aria-labelledby="v-pills-opportunity-tab"
                      tabIndex={0}
                    >
                      We are launching our native ecosystem, becoming an
                      infrastructure and application-level provider, which we
                      can scale up rapidly and provide the ultimate competitive
                      edge:
                      <ul className="tab-wrapper-list">
                        <li>Not depend on external gas fees </li>
                        <li>Not depended on unsecured sidechains </li>
                        <li>
                          Not dependent on third-party Content Distribution
                          Network IP transit fees.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-focuse"
                      role="tabpanel"
                      aria-labelledby="v-pills-focuse-tab"
                      tabIndex={0}
                    >
                      We understand our/your pain points, emotional drivers, and
                      that of our audience to better understand what they want
                      and need. We then strategies to develop a defined set of
                      objectives for measurable success moving forwards.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-impact"
                      role="tabpanel"
                      aria-labelledby="v-pills-impact-tab"
                      tabIndex={0}
                    >
                      Consciously, we ‘ve set out to develop innovative products
                      and services to enable you to participate and earn. For
                      that to happen, we are creating new value spaces through
                      business ecosystems, providing a framework for
                      regeneration from community to country as a platform.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-forward"
                      role="tabpanel"
                      aria-labelledby="v-pills-forward-tab"
                      tabIndex={0}
                    >
                      A company/community that is dynamic, not dogmatic, that
                      can read and understand which direction the winds of the
                      market are blowing. It is focused, proactive, creative,
                      and realistic. They build tech that stands the test of
                      time.
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-vision-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-vision"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-vision"
                      aria-selected="true"
                    >
                      <span className="me-3">01</span>Vision
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-mission-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-mission"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-mission"
                      aria-selected="false"
                    >
                      <span className="me-3">02</span> Mission
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-opportunity-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-opportunity"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-opportunity"
                      aria-selected="false"
                    >
                      <span className="me-3">03</span> opportunity
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-focuse-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-focuse"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-focuse"
                      aria-selected="false"
                    >
                      <span className="me-3">04</span> Data-Focused – Not Data
                      Driven
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-impact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-impact"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-impact"
                      aria-selected="false"
                    >
                      <span className="me-3">05</span> Impact-Led
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-forward-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-forward"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-forward"
                      aria-selected="false"
                    >
                      <span className="me-3">06</span> Forward Thinking &amp;
                      Intelligent Driven{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="accordion-wrapper">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Vision
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To create the Rebels Universe, an ecosystem connector
                        that will bring in the world’s next-gen media
                        marketplace with a focus on delivering Play-to-Earn
                        gaming, NFTs, media content, and TV. Imagine EA, Twitch,
                        and OpenSea being merged into a singular platform.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Mission
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To explore the future of blockchain gaming, NFTs, &amp;
                        streaming with a pure passion for disrupting the status
                        quo
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Opportunity
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We are launching our native ecosystem, becoming an
                        infrastructure and application-level provider, which we
                        can scale up rapidly and provide the ultimate
                        competitive edge:
                        <ul className="accordion-wrapper-list">
                          <li>Not depend on external gas fees </li>
                          <li>Not depended on unsecured sidechains </li>
                          <li>
                            not dependent on third-party Content Distribution
                            Network IP transit fees.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Data-Focused – Not Data Driven
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To explore the future of We understand our/your pain
                        points, emotional drivers, and that of our audience to
                        better understand what they want and need. We then
                        strategies to develop a defined set of objectives for
                        measurable success moving forwards.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Impact-Led
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        To explore the future of Consciously, we ‘ve set out to
                        develop innovative products and services to enable you
                        to participate and earn. For that to happen, we are
                        creating new value spaces through business ecosystems,
                        providing a framework for regeneration from community to
                        country as a platform.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Forward Thinking &amp; Intelligent Driven
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        A company/community that is dynamic, not dogmatic, that
                        can read and understand which direction the winds of the
                        market are blowing. It is focused, proactive, creative,
                        and realistic. They build tech that stands the test of
                        time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="content__title mb-4">
                Remember that <span className="font-1">Rome </span>was not{" "}
                <br /> <span className="font-1">built</span> in a day
              </h2>
              <p>
                Be patient; significant achievements take time and will be on
                their way.
              </p>
            </div>
          </div>
          <div className="divider-wrapper box">
            <div className="divider" />
            <div className="d-flex justify-content-between py-2">
              <p>INNOVATE &amp; DISTRUP</p>{" "}
              <img
                src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680374945/rebels/border-img_bf82qs.svg"
                alt="border-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container-fluid text-center div-p">
          <h2 className="content__title">
            AS <span className="font-1">FEATURED</span> ON
          </h2>
          <h6 className="my-4">
            JUST DON’T FALL FOR THAT B”!£^%!T! THE MAJORITY IS PAID CONTENT
          </h6>
          <div className="col-sm-12 col-md-8 offset-md-2 partners-wrapper">
            <div className="row">
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680433225/rebels/wsj-logo_unbz74.svg"
                  alt="logo"
                />
              </div>
            </div>
            <p className="small-font mt-3">
              We want to be featured entirely independently and on merit. Most
              Shills will pay a fee to ensure <br />
              their flavor of the month project gets some attention.
            </p>
          </div>
          <div className="col-sm-12 col-md-8 offset-md-2 text-center partners-wrapper">
            <h2 className="content__title">
              Watch Our <span className="font-1">Video</span>
            </h2>
            <div className="video-wrapper">
              <div className="video-container" id="video-container">
                <video
                  loop
                  playsInline
                  id="video"
                  preload="metadata"
                  poster="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523603/rebels/posterforreel_qq5dcs.png"
                >
                  <source
                    src="https://res.cloudinary.com/dyoknwemx/video/upload/v1680522775/rebels/Rebels_Revolt_Website_showreel_2_1_q3ooeq.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="play-button-wrapper">
                  <div
                    title="Play video"
                    className="play-gif"
                    id="circle-play-b"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                      <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 offset-md-2 partners-wrapper">
            <h2 className="content__title">
              OUR <span className="font-1">PARTNERS</span>
            </h2>
            <h6 className="mt-4 mb-5">
              If there are NGOs, BLUE CHIP FIRMS, GOVERNMENT BODIES, VCs &amp;
              HNWIs that believe and align with <br />
              our vision of community first… then please join the community.
            </h6>
            <div className="row">
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
              <div className="col-6 col-md-3 partner-logo">
                <img
                  className="img-fluid box"
                  src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680523706/rebels/partner-logo_soha09.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="divider-wrapper box">
            <div className="divider" />
            <div className="d-flex justify-content-between py-2">
              <p>INNOVATE &amp; DISTRUP</p>{" "}
              <img
                src="https://res.cloudinary.com/dyoknwemx/image/upload/v1680374945/rebels/border-img_bf82qs.svg"
                alt="border-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container-fluid footer-wrapper div-p">
          <div className="col-sm-12 col-md-8 offset-md-2 col-lg-7 offset-lg-2 mb-5">
            <h2 className="content__title">
              WE <span className="font-1">COLLABORATE</span>
              WITH AGILE{" "}
              <span className="font-1">BUSINESSES, AMBITIOUS PEOPLE</span>, AND
              BRANDS. ARE YOU WITH US?
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3 offset-md-2 footer-inner">
              <video
                className="lazy"
                autoPlay
                muted
                loop
                playsInline
                width="200px"
                height="200px"
                poster="https://res.cloudinary.com/dyoknwemx/image/upload/v1680789647/rebels/video%20assets/poster-footer_skntmk.png"
              >
                <source
                  data-src="https://res.cloudinary.com/dyoknwemx/video/upload/v1680788324/rebels/video%20assets/RR_fbn7np.webm"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-sm-12 col-md-6 footer-inner">
              <div className="row footer-inner-div">
                <div className="col-sm-12 col-md-6 my-3">
                  <h6>GENERAL QUESTIONS</h6>
                  <a href="mailto:hello@rebelsrevolt.io">
                    hello@rebelsrevolt.io
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 my-3">
                  <h6>PARTNER WITH US</h6>
                  <a href="mailto:partnerships@rebelsrevolt.io">
                    partnerships@rebelsrevolt.io
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 my-3">
                  <h6>BECOME A REBEL</h6>
                  <a href="mailto:hello@rebelsrevolt.io">
                    hello@rebelsrevolt.io
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 my-3">
                  <h6>SUBSCRIBE TO REBELS</h6>
                  <form id="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control c-form"
                        placeholder="E-mail address"
                        name="email"
                        id="email"
                        required
                      />
                      {/* <button class="arrow-btn" type="submit"> <img class="img-fluid"
                                                src="./assets/media/icon/arrow-side.svg" alt=""> </button> */}
                    </div>
                    <div className="messages-nl" />
                  </form>
                </div>
              </div>
              <div className="row footer-inner-div my-3">
                <div className="col-6 col-md-6">
                  <h6>CONTACT</h6>
                  <ul className="contact-list">
                    <li>Trident Trust Company (B.V.I.) Limited,</li>
                    <li>Trident Chambers, </li>
                    <li>P.O. Box 146,</li>
                    <li>Road Town,Tortola,</li>
                    <li>British Virgin Islands</li>
                    <li>
                      <a href="mailto:hello@rebelsrevolt.io ">
                        hello@rebelsrevolt.io
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-6">
                  <h6>SOCIALS MEDIA</h6>
                  <ul className="contact-list">
                    <li>
                      <a href="http://">Facebook</a>
                    </li>
                    <li>
                      <a href="http://">Instagram</a>
                    </li>
                    <li>
                      <a href="http://">Linkedin</a>
                    </li>
                    <li>
                      <a href="http://">Twitter</a>
                    </li>
                    <li>
                      <a href="http://">TikTok</a>
                    </li>
                    <li>
                      <a href="http://">Discord</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="copy-up">
            <span>EXPECT THE UNEXPECTED</span>
            <span>CULTURALLY ROOTED AND GLOBALLY ACTIVE</span>
          </div>
          <div className="copy-down">
            <small>© Rebels Revolt - 2023</small>
            <ul className="list-terms">
              <li>
                <a href>Privacy</a>
              </li>
              <li>
                <a href>Terms</a>
              </li>
              <li>
                <a href>Cookies</a>
              </li>
              <li>
                <a href>Refund policy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Test;
