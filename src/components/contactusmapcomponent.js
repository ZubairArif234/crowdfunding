

import React from "react";




export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '60vh', width: '100%' }}>
<iframe  style={{ height: '60vh', width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5521233861696!2d66.98841357549732!3d24.844985677939427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315fd9484034d%3A0xa34ea99b28ea0c40!2sPort%20Grand%20karachi!5e0!3m2!1sen!2s!4v1683113925308!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
{/* <iframe  style={{ height: '50vh', width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188292.49638997033!2d-74.07669449790552!3d40.62371823562184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683114222253!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
       {/* <GoogleMap
            defaultZoom={10}
            defaultCenter={LOS_ANGELES_CENTER}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
              />
            ))}
          </GoogleMap> */}
    </div>
  );
}