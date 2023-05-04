import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";
import qs from "qs";

import "./App.css";
import AccountInfo from "./components/AccountInfo";
import Module from "./components/Module";
import ResumeModule from "./components/ResumeModule";
import StatsModule from "./components/StatsModule";
import ThemeButton from "./components/ThemeButton";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [accessToken, setAccessToken] = useState();
  const [theme, setTheme] = useState("dark");
  const [songsILike, setSongsILike] = useState();

  const getAuth = async () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: "1723fa3bb91041efa6ebd04dd8daf27f",
        password: "9f62da9056f54232add1972dd11e99ff",
      },
    };
    const data = {
      grant_type: "client_credentials",
    };

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(data),
        headers
      );
      spotifyApi.setAccessToken(response.data.access_token);
      setAccessToken(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.getUserPlaylists("123786503").then(
      function (data) {
        console.log("data", data);
      },
      function (err) {
        console.error(err);
      }
    );
    spotifyApi.getPlaylist("04OMKr84Y33bsb8xgmM4jW").then(
      function (data) {
        setSongsILike(data.tracks.items);
      },
      function (err) {
        console.error(err);
      }
    );
  }, [accessToken]);

  return (
    <main className="main" data-theme={theme}>
      <div className="nav">
        <ThemeButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          active={theme === "light"}
        >
          <div className="light-switch" />
        </ThemeButton>
        <div className="account-row">
          <AccountInfo />
        </div>
      </div>
      <div className="content">
        <StatsModule />
        <ResumeModule />
        <Module
          className="module--full-width"
          title="Songs I Like (Thanks Spotify API)"
        >
          {songsILike ? (
            <div className="tracklist">
              {songsILike?.map((song) => {
                return (
                  <div className="track">
                    <img src={song.track.album.images[2].url} alt="album art" />
                    <div className="trackinfo">
                      <div className="trackname">{song.track.name}</div>
                      <p className="label">{song.track.artists[0].name}</p>
                      <p className="small">{song.track.album.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loader" />
          )}
        </Module>
      </div>
    </main>
  );
}

export default App;
