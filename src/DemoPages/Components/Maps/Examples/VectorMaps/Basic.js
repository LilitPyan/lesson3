import React, {Fragment, Component, Suspense, lazy} from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps"
import world from './Static/world-50m.json';
import axios from 'axios';
import Preloader from "../Preloader/Preloader";

const MainArea = lazy(() => import('../MainArea/MainArea'));

class VectorMapsBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: {},
      loading: true
    };
  }

  /*getInfo = () => {
    const name = this.state.name;
    const nextUrl = `http://api.weatherstack.com/current?access_key=30bcd5f592fe6f09bccbb0ceb6e7becb&query=${name}`;
    this.setState({loading: true}, () => {
      this.fetchUrl(nextUrl);
    });
  };

  fetchUrl(url) {
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((result) => {
        this.setState({
          country: result.current,
          loading: false,
        });
      });
  }*/


  getInfo = () => {
    const name = this.state.name;
    const nextUrl = `http://api.weatherstack.com/current?access_key=30bcd5f592fe6f09bccbb0ceb6e7becb&query=${name}`;
    axios.get(nextUrl)
      .then(res => {
        const data = res.data.current;
        this.setState({
          country: data,
          loading: false
        })
      });
  };


  render() {
    const {country, name, loading} = this.state;
    console.log(this.state.country);
    return (
      <Fragment>
        <div style={{
          height: '160px',
          width: '230px',
          backgroundColor: 'whitesmoke',
          paddingLeft: '20px',
          borderStyle: 'groove'
        }}>
          {!loading &&
          <div style={{ display:'grid'}}>
            <span style={{ paddingTop: '6px', fontSize:'20px'}}>
              Weather forecast
            </span>
            <span style={{ paddingTop: '6px' }}>
              Country: {name}
            </span>
            <span style={{ paddingTop: '6px' }}>
              Temperature:{country.temperature}°C
            </span>
            <span style={{ paddingTop: '6px' }}>
              Forecast: {country.weather_descriptions}
            </span>
          </div>
          }
        </div>
        <ComposableMap projectionConfig={{scale: 140}} style={{width: "100%", height: "auto", marginTop: '30px'}}>
          <ZoomableGroup>
            <Geographies geography={world}>
              {(geographies, projection) => geographies.map((geo, i) => geo.id !== "ATA" && (
                <Geography
                  onClick={() => {
                    this.setState({name: geo.properties.name}, this.getInfo)
                  }}
                  key={i}
                  geography={geo}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#e9ecef",
                      stroke: "#adb5bd",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#adb5bd",
                      stroke: "#adb5bd",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#3f6ad8",
                      stroke: "#adb5bd",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </Fragment>
    )
  }

}

export default VectorMapsBasic;