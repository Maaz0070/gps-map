import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
  mapClicked(mapProps, map, clickEvent) {
    //when you click a spot on the map
    
  }

  render() {
    return(
      <Map google = {this.props.google}
        onClick={this.mapClicked}

        style = {{width:"100%", height:"100%"}}
        zoom = {10}
        initialCenter = {
          {
            lat: 37.663626,
            lng: -122.106001
          }
        }
      >
        <Marker
            name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBu3arSboQ85q29cs3L7B1GLPjVsN4VO5o'
})(MapContainer)
