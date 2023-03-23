import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";
import qs from "qs";

import "./App.css";
import AccountInfo from "./components/AccountInfo";
import Module from "./components/Module";
import ResumeModule from "./components/ResumeModule";
import StatsModule from "./components/StatsModule";
import WeatherModule from "./components/WeatherModule";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [accessToken, setAccessToken] = useState();
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

  console.log("songsILike", songsILike);

  return (
    <main className="main">
      <div className="nav">
        {/* <h1>Dashboard</h1> */}
        <div>day / night</div>
        <AccountInfo />
      </div>
      <div className="content-wrapper">
        {/* <div className="sidebar" /> */}
        <div className="content">
          <ResumeModule />
          <StatsModule />
          <WeatherModule />
          <Module columnSpan={3} title="Songs I Like (Thanks Spotify)">
            <table>
              <thead>
                <th />
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th />
              </thead>
              {songsILike?.map((song) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={song.track.album.images[2].url}
                        alt="album art"
                      />
                    </td>
                    <td>{song.track.name}</td>
                    <td>{song.track.artists[0].name}</td>
                    <td>{song.track.album.name}</td>
                    <td>
                      {/* {song.track.preview_url && (
                        <audio controls src={song.track.preview_url}></audio>
                      )} */}
                    </td>
                  </tr>
                );
              })}
            </table>
          </Module>
        </div>
      </div>
    </main>
  );
}

export default App;
