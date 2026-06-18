import React, { useState } from "react";
import { homeStyles } from "../assets/dummyStyles";
import Header from "../components/Header";
//import Footer from "../components/Footer";
import bat from "../assets/bat.png";
import ball from "../assets/ball.png";
import Loader from "../components/Loader";
import LiveMatch from "../components/LiveMatch";

const Home = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [teamIdInput, setTeamIdInput] = useState("");
  const [teamId, setTeamId] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [liveList, setLiveList] = useState([]);
  const [liveError, setLiveError] = useState(null);
  // perspective parent for translateZ
  const heroWrapperStyle = {
    perspective: "1100px",
    WebkitPerspective: "1100px",
  };

  const heroBoxStyle = {
    transformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d",
  };

  return (
    <div className={homeStyles.root}>
      <div
        className={homeStyles.blob1}
        style={{ background: homeStyles.blob1Gradient }}
      ></div>
      <div
        className={homeStyles.blob2}
        style={{ background: homeStyles.blob2Gradient }}
      ></div>
      <div className={homeStyles.headerContainer}>
        <Header onSearch={(q) => console.log("search:", q)} />
      </div>

      <main className={homeStyles.main}>
        <section className={homeStyles.section}>
          <div className={homeStyles.heroWrapper} style={heroWrapperStyle}>
            <div className={homeStyles.heroBox} style={heroBoxStyle}>
              <div
                className={homeStyles.heroSpotlight}
                style={{ background: homeStyles.heroSpotlightGradient }}
              ></div>
              <div className={homeStyles.heroContent}>
                <div className={homeStyles.heroText}>
                  <h1 className={homeStyles.heroTitle}>
                    Follow Every match. <br /> Real-time scores, classy
                    insights.
                  </h1>
                  <p className={homeStyles.heroSubtitle}>
                    Get live scores, match stats, and player insights for all
                    your favorite sports. — Stay updated with real-time
                    information and never miss a moment of the action.
                  </p>
                  <div className={homeStyles.heroButtons}>
                    <button
                      onClick={() =>
                        document
                          .getElementById("live")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className={homeStyles.primaryButton}
                    >
                      View live matches
                    </button>
                    <button
                      onClick={() =>
                        document
                          .getElementById("match-details")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className={homeStyles.secondaryButton}
                    >
                      Quick details
                    </button>
                  </div>
                  <div className={homeStyles.heroFeatures}>
                    <div className={homeStyles.featureTag}>Live scorecards</div>
                    <div className={homeStyles.featureTag}>Match detail</div>
                    <div className={homeStyles.featureTag}>Team stats</div>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle outer border/shadow */}
            <div
              className={homeStyles.heroShadow}
              style={{
                boxShadow: "0 8px 30px rgba(14, 30, 50, 0.06)",
                borderRadius: "24px",
              }}
            />
            <img src={bat} alt="bat" className="hero-bat" />
            <img src={ball} alt="ball" className="hero-ball" />
          </div>
        </section>

        {/* top section */}
        <section className={homeStyles.gridSection}>
          <div className={homeStyles.mainContent}>
            <div id="live" className="space-y-4">
              <div className={homeStyles.sectionHeader}>
                <div className={homeStyles.liveStatus}>
                  <div className={homeStyles.liveCount}>
                    {loadingInitial
                      ? "Loading..."
                      : `${liveList.length} Live Matches`}
                  </div>
                </div>
              </div>

              {loadingInitial ? (
                <Loader message="Fetching live matches..." centered />
              ) : liveError ? (
                <div className="text-sm text-rose-600">{liveError}</div>
              ) : (
                <LiveMatch
                  matches={liveList}
                  onSelect={(id) => onSelectMatch(id)}
                  selectedMatch={selectedMatch}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
