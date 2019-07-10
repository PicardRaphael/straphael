import React, { Component } from 'react'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps'

import './map.scss'

export const Map = () => {
  const googleMapURL = 'test
  const someLatLng = {lat: 43.426004, lng: 6.764274}

  const MyGoogleMap = withScriptjs(withGoogleMap(() =>
  <GoogleMap
      defaultCenter={someLatLng}
      defaultZoom={16}
      options={{disableDefaultUI: true}}>
      <Marker
      position={{ lat: 43.426004, lng: 6.764274 }}
    />
  </GoogleMap>))
  const loadingElement = <div/>
  const containerElement = <div style={{height: '50vh'}}/>
  const mapElement = <div style={{height: '50vh'}}/>
  return (
    <MyGoogleMap loadingElement={loadingElement}
      containerElement={containerElement}
      googleMapURL={googleMapURL}
      mapElement={mapElement}
    /> 
  )
}
