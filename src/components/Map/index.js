import React, { useRef } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'; 
import map_theme from './mapStyles'


import './map.scss'

const API_KEY = process.env.REACT_APP_API_KEY;


const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 49.23092285142706,
    lng: 28.496413073754628
  };
// console.log(API_KEY)
const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
      })

    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
         mapRef.curent = map
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.curent = undefined
    }, [])
    
    return (
            <div className='map-wrap '>
                     {isLoaded ? <GoogleMap
                        mapContainerStyle={containerStyle}
                        options={{styles : map_theme}}
                        center={center}
                        zoom={12}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        
                    </GoogleMap> 
                    :
                    <h3>error</h3>}
                     
                      
            </div>
       
    )
}


export default Map