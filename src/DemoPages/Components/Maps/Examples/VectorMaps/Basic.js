import React, {Fragment} from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps"
import world from './Static/world-50m.json';

class VectorMapsBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: []
    };
  }

  getInfo = () => {
    const name = this.state.name;
    const nextUrl = `http://api.weatherstack.com/current?access_key=30bcd5f592fe6f09bccbb0ceb6e7becb&query=${name}`;
    this.fetchUrl(nextUrl);

    setTimeout(this.alertInfo, 1000);
    this.setState({country: []})
  };

  alertInfo = () => {
    alert(`Country: ${this.state.name}
            Temperature: ${this.state.country.temperature}°C
            Forecast: ${this.state.country.weather_descriptions}`
    );
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
        const data = result;
        this.setState({country: data.current});
      });
  }

  render() {
    const {country, name} = this.state;
    return (
      <Fragment>
        <div style={{height:'70px', backgroundColor:'#adb5bd'}}>

        </div>

        <!--ComposableMap, Geographies, Geography, ZoomableGroup are components from React Simple Map.
        We take the name of the country on Click event, change name state and call getInfo function-->

        <ComposableMap projectionConfig={{scale: 140}} style={{width: "100%", height: "auto", marginTop:'30px'}}>
          <ZoomableGroup>
            <Geographies geography={world}>
              {(geographies, projection) => geographies.map((geo, i) => geo.id !== "ATA" && (
                <Geography
                  onClick={() => { this.setState({name: geo.properties.name}, this.getInfo) }}
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