import React from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps"
import world from './Static/world-50m.json';

class VectorMapsBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: [],
      url: 'http://api.weatherstack.com/current?access_key=30bcd5f592fe6f09bccbb0ceb6e7becb&query=Yerevan'
    }
  }

  getInfo = () => {
    const url = this.state.url;
    const name = this.state.name;
    let k = url.replace('Yerevan', name);
    console.log(k);
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
        this.setState({country: data, name:''});
      });
  }

  render() {
    const {url, name} = this.state;
    return (
      <ComposableMap projectionConfig={{scale: 200}} style={{width: "80%", height: "auto"}}>
        <ZoomableGroup>
          <Geographies geography={world}>
            {(geographies, projection) => geographies.map((geo, i) => geo.id !== "ATA" && (
              <Geography
                onClick={() => {
                  this.setState({name: geo.properties.name});
                  this.getInfo();
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
    )
  }
}

export default VectorMapsBasic;