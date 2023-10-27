// Importing assets and style
import logo from "./logo.svg";
import "./App.css";
import mainVideo from "./assets/bbc-video.mp4";
import endangeredWildlifeVideo from "./assets/endangered-wildlife.mp4";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.png";

// Importing weather related assets

import clear from "./assets/weatherAssets/Assets/clear.png";
import cloud from "./assets/weatherAssets/Assets/cloud.png";
import drizzle from "./assets/weatherAssets/Assets/drizzle.png";
import humidity from "./assets/weatherAssets/Assets/humidity.png";
import rain from "./assets/weatherAssets/Assets/rain.png";
import snow from "./assets/weatherAssets/Assets/snow.png";
import wind from "./assets/weatherAssets/Assets/wind.png";

// Importing necessary React hooks
import { useState, useEffect, useRef } from "react";

function App() {
  // State hooks for managing weather data, visibility, and intersection observers
  const [weather, setWeather] = useState(null);
  const [weatherImage, setWeatherImage] = useState(null);
  const [visible, setVisible] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entries, setEntries] = useState();
  // Refs for various sections on the page that will be observed
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const sectionWeatherApi = useRef(null);
  const sectionAbout = useRef(null);
  const sectionReferences = useRef(null);
  // Effect hook to observe sections for intersection with viewport
  useEffect(() => {
    // Initially adding 'reveal' class to all sections
    section.current.classList.add("reveal");
    section2.current.classList.add("reveal");
    section3.current.classList.add("reveal");
    section4.current.classList.add("reveal");
    section5.current.classList.add("reveal");
    section6.current.classList.add("reveal");
    sectionWeatherApi.current.classList.add("reveal");
    sectionAbout.current.classList.add("reveal");
    // Setting up intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        // Adding or removing 'reveal-active' class based on intersection status
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        } else {
          entry.target.classList.remove("reveal-active");
        }
      });
    });
    // Observing each section
    observer.observe(section.current);
    observer.observe(section2.current);
    observer.observe(section3.current);
    observer.observe(section4.current);
    observer.observe(section5.current);
    observer.observe(section6.current);
    observer.observe(sectionWeatherApi.current);
    observer.observe(sectionAbout.current);
    observer.observe(sectionReferences.current);

    // Cleaning up observer when component is unmounted

    return () => observer.disconnect();
  }, [isIntersecting]);
  // Logging entries for debugging
  console.log(entries);
  // Function to handle location retrieval
  function handleLocationClick() {
    // Checking if geolocation is available in the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }
  }
  // Callback function to handle successful geolocation retrieval
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c575fb12d915b7e85309eb09abff0f93&units=metric`
    )
      // Parse the response to JSON
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        // Image refrences from https://openweathermap.org/weather-conditions
        console.log(data);
      })
      .catch((error) => console.log("Cannot get weather at your location"));
  }
  // Main App component render
  return (
    <div>
      {/* Navbar */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left-content">
            <ul className="nav-list">
              <a className="nav-list-item" href="#harris">
                Harris Idrees
              </a>
              <li className="nav-list-item">Bachelor of SE</li>
              <a className="nav-list-item" href="#references">
                References
              </a>{" "}
              <a className="nav-list-item" href="#about">
                About
              </a>
            </ul>
          </div>
          <div className="nav-right-content">
            <a href="#weatherApi" className="nav-button">
              Check My Area
            </a>
          </div>
        </div>
      </nav>

      {/* Main Video */}
      <div>
        <div className="main-video-container">
          <video className="main-video" id="harris" autoPlay muted loop>
            <source src={mainVideo} type="video/mp4" />
            Error Message
          </video>
          <marquee className="main-video-headline">
            Australia bushfires: 'It's like fireballs exploding in the air' -
            BBC News
          </marquee>
        </div>

        <p className="img-reference">Source: Youtube.com/BBC News</p>
      </div>

      {/* Main Body */}
      <div className="main-body">
        {/* Section 1 */}
        <section className="section" ref={section}>
          <h1 className="section-heading">Bushfire Awareness</h1>
          <p className="section-paragraph">
            Unplanned vegetative fires are literally bushfires. Scrub fires,
            grass fires, and forest fires are all part of Bushire. Throughout
            the course of thousands of years, bushfires have been a fundamental,
            intricate, and natural element of the Australian landscape. Trees,
            homes, and the ecosystem can all be severely impacted by bushfires.
            Talking about the bushfires makes us aware of the terrible loss of
            biodiversity and the precarious balance of our ecosystems. Taking
            about it can be a step towards the prevention of catastrophic loss
            of biodiversity and the unstable balance of our ecosystems.
          </p>
          <img src={img1} className="section-image" />
          <p className="img-reference">
            <i>
              “In the aftermath of devastation, A wallaby stands alone among
              burned trees probably thinking of good old days”. Image by Jo-Anne
              McArthur / We Animals.
            </i>
          </p>
        </section>

        {/* Section 2 */}
        <section className="section-colored" ref={section2}>
          <h1 className="section-heading">Victorian History of Bushfires </h1>
          <img src={img2} className="section-image" />
          <p className="img-reference">
            <i>
              “Fire Management team witnessing brutality of nature. Image taken
              from ffm.vic.gov.au”
            </i>
          </p>
          <ul className="bullet-paragraph">
            <li>1851, Black Thursday</li>
            <li>1898, Red Tuesday</li>
            <li>Early 1900s</li>
            <li>1926</li>
            <li>1932</li>
            <li>1938-1939, Black Friday</li>
            <li>1942</li>
            <li>1943-1943</li>
            <li>1944</li>
            <li>1952</li>
            <li>1962</li>
            <li>1965</li>
            <li>1969</li>
            <li>1972</li>
            <li>1977</li>
            <li>1980-1981</li>
            <li>1983</li>
            <li>1983, Ash Wednesday</li>
            <li>1985</li>
            <li>1997</li>
            <li>1998</li>
            <li>2002</li>
            <li>2003</li>
            <li>2005-2006</li>
            <li>2006-2007</li>
            <li>2009, Black Saturday</li>
            <li>2013</li>
            <li>2015</li>
            <li>2019-2020</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="section" ref={section3}>
          <h1 className="section-heading">Causes of Bushfire </h1>
          <ul className="bullet-paragraph">
            <li>Suspicious causes account for 37%.</li>
            <li>Accidental causes constitute 35%.</li>
            <li>Deliberate actions are responsible for 13%.</li>
            <li>Natural sources like lightning contribute to 6%.</li>
            <li>
              Re-ignition/spot and other reasons make up 5% and 4% respectively.
            </li>
          </ul>
          <img
            src={img3}
            style={{ border: "1px solid black" }}
            className="section-image"
          />
          <p className="img-reference">
            <i>
              Share of Bushfire Ignitions in Australia (November 2019): A
              Breakdown by Cause.". Statistics taken from statista.com
            </i>
          </p>
        </section>

        {/* Section 4 */}
        <section className="section-colored" ref={section4}>
          <h1 className="section-heading">Endangered Wildlife </h1>

          <div className="section4-video-container">
            <video className="section4-video" autoPlay muted loop>
              <source src={endangeredWildlifeVideo} type="video/mp4" />
              Error Message
            </video>
          </div>
          <p className="img-reference">
            <i>Source: Youtube.com/The Sun</i>
          </p>

          <div className="section-paragraph">
            <p>
              The wildlife's quality of life is always greatly impacted by
              bushfires. According to biologist Chris Dickman, over a billion
              creatures have perished nationwide; this number does not include
              fish, frogs, bats, or insects.
            </p>
            <p>
              Environmental organisations produced a list of wildlife species
              for which they have immediate concerns, and the Australian
              government promised $50 million in 2020 to aid in the rescue and
              protection of wildlife affected by the problem.
            </p>
            <p>
              However, the list is by no means comprehensive, and until
              specialists are able to visit ecosystems devastated by fire and
              perform assessments, it will be difficult to determine the precise
              impact on plant and animal life.
            </p>
            <b>
              <p>Among the animals impacted by bushfires are the following.</p>
            </b>
          </div>
          <ul className="bullet-paragraph">
            <li>Glossy black-cockatoo (Kangaroo Island sub-species)</li>
            <li>Kangaroo Island dunnart</li>
            <li>Koala</li>
            <li>Hastings River mouse</li>
            <li>Regent honeyeater</li>
            <li>Blue Mountains water skink</li>
            <li>Brush-tailed rock-wallaby</li>
            <li>Southern corroboree frog</li>
            <li>Quokka</li>
            <li>Western ground parrot</li>
            <li>Northern eastern bristlebird</li>
            <li>Greater glider</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="section" ref={section5}>
          <h1 className="section-heading">Prevention</h1>
          <p className="section-paragraph">
            Bushfires, often triggered by factors like climate change or human
            mistakes, present significant dangers to lives, property, and the
            natural ecosystem. Crucial measures for prevention include complying
            with Australia's environmental laws, staying updated on weather
            forecasts, understanding the risk in your area, avoid parking on
            parched lawns, responsibly handling potential fire-starters like
            cigarette butts, and vigilantly supervising all active fires and
            maintenance of the landscapes.
          </p>
          <img src={img4} className="section-image" />
          <p className="img-reference">
            <i>
              The left shows Greg Bourke's backyard in Mount Tomah in the Blue
              Mountains in December 2019 while the right shows the same spot in
              December 2020, (Caption & Image taken from Dailymail.com)
            </i>
          </p>
        </section>

        {/* Section 6 */}

        <section className="section-colored" ref={section6}>
          <h1 className="section-heading">Testimonials</h1>
          <img src={img5} className="testimonial-image" />
          <p className="testimonial-reference">
            <i>
              Sydney Rural Fire Service (RFS) firefighter Simon.Image taken from
              abc.net.au
            </i>
          </p>
          <div className="section-paragraph">
            <p>
              Simon was having a usual day when he had to rush to an emergency
              call in Central Coast where bushfire was at its peak on November
              8. He was told that the nearby resident needed help and the rescue
              mission began.
            </p>
            <p>
              <b>Simon said</b>,{" "}
              <i>
                “ The speed and the ferocity of the fire … was three or four
                times what we'd seen before, He was in real trouble … he was
                surrounded by fire and he didn't know what to do, When I was
                driving … I could not see more than about 2 metres. The
                adrenaline was really pumping. You've got to try and stay calm
                as much as you can. We know someone needs our help. It was just
                a wall of embers … like the sparks coming off the Sydney Harbour
                Bridge on New Year's Eve. The person that was actually inside
                the house, he was inside with his dog and a couple of cats, all
                in one room.He did not want to leave … he was pretty adamant.”
                He and his dog was saved later on due to quick thinking of
                Simon. He later on reflected on his life saving journey as
              </i>
            </p>
            <p>
              <i>
                “ You take up risk versus reward … it just seemed like the right
                thing to do. Looking back, I would probably think twice if I had
                time to really think about it. When fire can travel that quickly
                and that ferociously … it really makes you worry about what's
                going to happen with the rest of the state over the whole fire
                season,.”
              </i>
            </p>
          </div>
        </section>

        {/* Section Check weather API */}

        <section className="section" id="weatherApi" ref={sectionWeatherApi}>
          <h1 className="section-heading">Check weather on my area</h1>
          <p className="section-paragraph">
            This tool can be used to chek if your area is under threat right now
            of bushfire. This weather api takes data from "OpenWeather". It
            returns many attributes, However, right now we are only interested
            in Wind, Humidy and Temperature.
          </p>
          <p className="section-paragraph">
            The image can be taken as reference to check if you have higher
            chances of bushfire in your area.
          </p>
          <img src={img6} className="section-image" />
          <p className="img-reference">
            <i>
              Strong winds, high temperatures and low humidity will increase the
              severity of a bushfire. Image taken from research.csiro.au.
            </i>
          </p>

          {/* Weather checking section */}
          <div className="weather-section-container">
            <div className="location-button-container">
              <button className="location-button" onClick={handleLocationClick}>
                Get location Weather
              </button>
            </div>
          </div>

          {/* Weather Card */}
          {weather && (
            <div className="weather-card">
              <p className="weather-text">{weather.name}</p>
              <p className="weather-text">{new Date().toDateString()}</p>
              <h1 className="weather-text" style={{ fontSize: "70px" }}>
                {Math.floor(weather.main.temp) + "° C"}
              </h1>
              <img src={cloud} className="weather-image" />
              <div className="weather-condition-container">
                <div className="weather-text">
                  <p>{weather.main.humidity + " %"}</p>
                  <p>humidity</p>
                </div>

                <div className="weather-text">
                  <p>{Math.floor(weather.wind.speed) + " Km/h"}</p>
                  <p>Wind Pressure</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section About */}
        <section className="section-colored" id="about" ref={sectionAbout}>
          <h1 className="section-heading">About</h1>
          <div className="section-paragraph">
            <p>
              This website is part of the final assignment of Programming for
              Design Subject that is taught by Riley Post. This last assignment
              is called One Page Site.
            </p>
            <p>
              This website is created by <b>Harris Idrees</b>, a final semester
              student of Bachelor of Software Engineering. Technologies used are
              HTML, CSS and React.js library.
            </p>
            <a href="https://www.github.com/">
              All of the code files can be found at my Github.
            </a>
          </div>
        </section>

        {/* Section References */}
        <section className="section" id="references" ref={sectionReferences}>
          <h1 className="section-heading">References</h1>
          <div className="section-paragraph">
            <p>
              {" "}
              BBC News.(2021) Australia bushfires: 'It's like fireballs
              exploding in the air' - BBC News. Available at:{" "}
              <a
                className="reference-link"
                href="https://www.youtube.com/watch?v=Iaxc2RuRnCQ Accessed: 17/10/2023"
              >
                https://www.youtube.com/watch?v=Iaxc2RuRnCQ Accessed: 17/10/2023
              </a>
            </p>

            <p>
              {" "}
               Elizabeth Claire Alberts,(2020) Scientists urge reassessment of
              threatened species after Australian bushfires Available at:{" "}
              <a
                className="reference-link"
                href="https://news.mongabay.com/2020/08/scientists-urge-reassessment-of-threatened-species-after-australian-bushfires/."
              >
                https://news.mongabay.com/2020/08/scientists-urge-reassessment-of-threatened-species-after-australian-bushfires/
                (Accessed 17/10/2023)
              </a>
            </p>

            <p>
              {" "}
               research.csiro.au ,Bushfire best practice guide, Available at{" "}
              <a
                className="reference-link"
                href="https://research.csiro.au/bushfire/bushfire-basics/how-bushfires-behave/weather/"
              >
                https://research.csiro.au/bushfire/bushfire-basics/how-bushfires-behave/weather/(Accessed
                17/10/2023)
              </a>
            </p>

            <p>
              {" "}
              ForrestFireManagementVictoria,(2023) A chronology of major
              bushfires in Victoria from 2020 back to 1851, Available at:{" "}
              <av
                className="reference-link"
                href="https://www.ffm.vic.gov.au/history-and-incidents/past-bushfires "
              >
                hhttps://www.ffm.vic.gov.au/history-and-incidents/past-bushfires
                (Accessed 17/10/2023){" "}
              </av>
            </p>

            <p>
              {" "}
              Statistica,(2023) Share of bushfire ignitions in Australia as of
              November 2019, by cause, Available at:{" "}
              <a
                className="reference-link"
                href="https://www.statista.com/statistics/1104822/australia-causes-of-bush-fire-ignitions/ "
              >
                https://www.statista.com/statistics/1104822/australia-causes-of-bush-fire-ignitions/
                (Accessed at 17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              Trees Down Under, (2021) 10 Tips to Effectively Reduce & Prevent
              Bushfires, Available at:{" "}
              <a
                className="reference-link"
                href="https://treesdownunder.com.au/tips-reduce-prevent-bushfires/#:~:text=Routine%20grass%20mowing%20and%20raking,a%20bushfire%20in%20your%20place "
              >
                https://treesdownunder.com.au/tips-reduce-prevent-bushfires/#:~:text=Routine%20grass%20mowing%20and%20raking,a%20bushfire%20in%20your%20place
                (Accessed at 17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              Shive Prema,(2021) One year on a survivor of the black summer
              bushfires has shared an incredible transformation photo – but says
              there is a long way to go,Available at :{" "}
              <a
                className="reference-link"
                href="https://www.dailymail.co.uk/news/article-9144915/Australian-bushfire-survivor-shares-incredible-transformation-photo-blazes.html "
              >
                https://www.dailymail.co.uk/news/article-9144915/Australian-bushfire-survivor-shares-incredible-transformation-photo-blazes.html
                (Accessed at: 17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              Shive Prema,(2021) One year on a survivor of the black summer
              bushfires has shared an incredible transformation photo – but says
              there is a long way to go,Available at :{" "}
              <a
                className="reference-link"
                href="https://www.dailymail.co.uk/news/article-9144915/Australian-bushfire-survivor-shares-incredible-transformation-photo-blazes.html "
              >
                https://www.dailymail.co.uk/news/article-9144915/Australian-bushfire-survivor-shares-incredible-transformation-photo-blazes.html
                (Accessed at: 17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              The Sun.(2020) Woman saves scorched koala from Australian
              bushfire. Available at:{" "}
              <a
                className="reference-link"
                href="https://www.youtube.com/watch?v=KHGgKRDHHvU"
              >
                https://www.youtube.com/watch?v=KHGgKRDHHvU (Accessed at:
                17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              theguardian.(2020) A billion animals: some of the species most at
              risk from Australia's bushfire crisis. Available at:{" "}
              <a
                className="reference-link"
                href="https://www.theguardian.com/australia-news/2020/jan/14/a-billion-animals-the-australian-species-most-at-risk-from-the-bushfire-crisis "
              >
                https://www.theguardian.com/australia-news/2020/jan/14/a-billion-animals-the-australian-species-most-at-risk-from-the-bushfire-crisis
                (Accessed at: 17/10/2023).
              </a>
            </p>

            <p>
              {" "}
              abc.net, The stories behind the life or death moments that defined
              the Australian bushfire crisis, Available at :
              <a
                className="reference-link"
                href="https_www.abc.net.au/?url=https%3A%2F%2Fwww.abc.net.au%2Fnews%2F2020-02-03%2Finside-the-australian-bushfires-crisis%2F11890458"
              >
                /https_www.abc.net.au/?url=https%3A%2F%2Fwww.abc.net.au%2Fnews%2F2020-02-03%2Finside-the-australian-bushfires-crisis%2F11890458
                (Accessed at: 17/10/2023).
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
// Export the App component to make it available for other modules to import
export default App;
