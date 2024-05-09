import './App.css';
import {Routes, Route, Link, useParams} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {fish_list} from "./FishList.js"
import {useState} from "react";

// global array for seasons
var SEASONS = ["Spring", "Summer", "Fall", "Winter"];
// global array for weather
var WEATHER = ["Sun", "Rain"];
// global array for hours
var TIMES = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2];
// global array for locations
var LOCATIONS = ["Ocean", "Forest River", "Mountain Lake", "Forest River", "Ginger Island Ocean", "Ginger Island Ponds and Rivers", "Cindersap Forest Waterfall", "Mutant Bug Lair", "Pirate Cove", "Town River", "Forest River", "Forest Pond", "Witch's Swamp", "Secret Woods Pond", "Desert", "Mines 20F", "Mines 60F", "Mines 100F", "Volcano Caldera", "Sewers"];
// global variable for set location
var SET_LOCATION = "Ocean";

// function containing all routes
function MyApp()
{
  return(
    <div>
      <Routes>
        <Route path="/" element={<OptionsDisplay />} />
        <Route path="/location" element={<SetLocation />} />
        <Route path="/favorite" element={<FavoriteDisplay />} />
      </Routes>
    </div>
  )
}

// navigation bar
function Nav()
{
  return (
    <ul id="nav">
      <button><Link to = "/">Home</Link></button>
      <button><Link to = "/location">Set Location</Link></button>
      <button><Link to = "/favorite">Favorite</Link></button>
    </ul>
  )
}

// route for selecting location 
function SetLocation(props)
{
  // create an options array based on the list of locations
  var location_list = LOCATIONS.map((location, index) => {
    return <option key={index} value={location}>{location}</option>
  })
 
  // create event handler for selecting new location
  const locationSelect = (e) => {
    var selected_location = document.getElementById("location_select").value;
    // set global variable SET_LOCATION equal to the the location selected
    SET_LOCATION = selected_location
  }
  return (
    <div>
      <Nav />
      <h1>Set Location</h1>
      <p>Choose one of the locations below.</p>
      <select id="location_select">
        {location_list}
      </select>
      <button type="submit" onClick={locationSelect}>Submit</button>
    </div>
  )
}

// creates display for selected location
function LocationIndicator(props)
{
  return (
    <div>
      <h2>Current Location: {props.value}</h2>
    </div>
  )
}

// creates selection for season choices
function SeasonDisplay(props)
{
  // create an options array based on the list of seasons
  var seasons_list = SEASONS.map((season, index) => {
    return <option key={index} value={season}>{season}</option>
  })
  return seasons_list
}

// creates selection for weather selection
function WeatherDisplay(props)
{
  // create an options array based on the list of seasons
  var weather_list = WEATHER.map((weather, index) => {
    return <option key={index} value={weather}>{weather}</option>
  })
  return weather_list
}

// creates selection for time selecgtion
function TimeDisplay(props)
{
  // create an options array based on the list of times
  var times_list = TIMES.map((time, index) => {
    return <option key={index} value={time}>{time}:00</option>
  })
  return times_list
}

// creates list of fish who fit selection criteria
function FishDisplay(props)
{
  // set useState hook for fish display
  const [fish_display_text, setFishText] = useState("Please input fish settings.")

  const fishDisplay = (e) => {
    // prevent page from refreshing
    e.preventDefault()
    // get values from fish_options form
    var season = document.getElementById("season_select").value;
    var weather = document.getElementById("weather_select").value;
    var time = parseInt(document.getElementById("time_select").value);

    // filter out fish based on criteria
    // season filter
    var season_filtered = fish_list.filter((fish) => {
      return fish.season.includes(season)
    })
    // weather filter
    var weather_filtered = season_filtered.filter((fish) => {
      return fish.weather.includes(weather)
    })
    // time filter
    var time_filtered = weather_filtered.filter((fish) => {
      return fish.time.includes(time)
    })
    // location filter
    var location_filtered = time_filtered.filter((fish) => {
      return fish.location.includes(SET_LOCATION)
    })

    // get array of filtered fish names
    var fish_display_info = location_filtered.map((fish, index, array) => {
      // create list of fish names. also add favorite button
      return <p key={index}>{fish.name} <button onClick={() => Favorite(fish)}>&#11088;</button></p>
    })

    // change the state of variable fish_display_text
    setFishText(fish_display_info)
  }

  return <div>
    <button onClick={fishDisplay}>Submit</button>
    <LocationIndicator value={SET_LOCATION} />
    <ul id="fish_display">
      {fish_display_text}
    </ul>
  </div>
}

// save an item to local storage
function Favorite(fish)
{  
  // save to local storage
  localStorage.setItem("favorite", JSON.stringify(fish))
}

// clear local storage
function ClearFavorite()
{
  // what it says on the label
  localStorage.clear();
  // this is a very lazy solution and i am sorry
  window.location.reload();
}

function FavoriteDisplay(props)
{ 
  var favorite = ""
  // check to see if there's anything saved in localStorage under the "favorite" key
  // if not, set variable favorite equal to an empty JSON object
  if (localStorage.getItem("favorite") === null){
    favorite = {"name":"","location":[""],"season":[""],"weather":[""],"time":[""]}
  }
  // otherwise populate with localStorage data for "favorite"
  else {
    favorite = JSON.parse(localStorage.getItem("favorite"))
  }

  // destructure favorite's elements into variables
  var name = favorite.name
  var location = favorite.location
  var season = favorite.season
  var weather = favorite.weather
  var time = favorite.time

  // turn location array into a list
  var location_array = location.map((location, index) => {
    return <li key={index}>{location}</li>
  })
  // turn season array into a list
  var season_array = season.map((season, index) => {
    return <li key={index}>{season}</li>
  })
  // turn weather array into a list
  var weather_array = weather.map((weather, index) => {
    return <li key={index}>{weather}</li>
  })
  // turn time array into a list
  var time_array = time.map((time, index) => {
    return <li kei={index}>{time}:00</li>
  })

  return (
    <div>
      <Nav />
      <h2>Current Favorite</h2>
      <button type="submit" onClick={() => ClearFavorite()}>Clear Favorite</button>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Locations</h3>
      {location_array}
      <h3>Seasons</h3>
      {season_array}
      <h3>Weather</h3>
      {weather_array}
      <h3>Times</h3>
      {time_array}
    </div>
  )
}

// route for home page
function OptionsDisplay(props)
{
  const fishConsole = (e) => {
    e.preventDefault()
    // this just shows the array "fish_list"
    console.log(fish_list)

  }
  return <div className="options">
    <Nav />
    <h1>Stardew Valley Fish Finder &#127907;</h1>
    (click this for a console.log of all fish) <br />
    <button id="fish_list" onClick={fishConsole}>&#127907;</button>
    <form id="fish_options">
      <label>Season: </label>
      {/* fix this */}
      <select id="season_select">
        <SeasonDisplay />
      </select>
      <br />
      <label>Weather: </label>
      <select id="weather_select">
        <WeatherDisplay />
      </select>
      <br />
      <label>Time: </label>
      <select id="time_select">
        <TimeDisplay />
      </select>
    </form>
    <FishDisplay />
  </div>
}

function App() {
  return (
    <Router>
      <MyApp />
    </Router>
  );
}

export default App;
