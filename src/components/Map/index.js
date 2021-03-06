import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGl, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
  GeolocateControl,
  FlyToInterpolator,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import useSupercluster from 'use-supercluster';

import Pin from '../Pin';

import styled from 'styled-components';

const fullscreenControlStyle = {
  right: 10,
  top: 10,
};
const navControlStyle = {
  right: 10,
  bottom: 10,
};
const geolocateControlStyle = {
  right: 10,
  bottom: 100,
};

function Map({ markers, addPin, selectedCity }) {
  const { latitude, longitude } = selectedCity.coordinates;

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 11,
    width: '100%',
    height: '80vh',
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom: 11,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing: d3.easeCubic,
    });
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedMarker(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [selectedCity]);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const points = markers
    ? markers.default.places.map((marker) => ({
        type: 'Feature',
        properties: {
          cluster: false,
          markerId: marker.id,
          category: marker.category,
          street_address: marker.location.street_address,
          description: marker.description,
        },
        geometry: {
          type: 'Point',
          coordinates: [
            parseFloat(marker.location.coordinates.longitude),
            parseFloat(marker.location.coordinates.latitude),
          ],
        },
      }))
    : [];

  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  // get clusters
  const { clusters } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: {
      radius: 75,
      maxZoom: 20,
    },
  });

  const [pin, setPin] = useState({
    latitude: 44.429724,
    longitude: 26.082537,
  });
  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setPin({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);

  return (
    <div>
      <ReactMapGl
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic29yaW5jcmlzdGVzY3UiLCJhIjoiY2tueWdvOXM1MWc0aDJ2b2FtdjFuNmpxYyJ9.pXTxGHIAah6NwaRjNrTEWw"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={handleViewportChange}
      >
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navControlStyle} />
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
          showAccuracyCircle={true}
          auto
        />
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1Ijoic29yaW5jcmlzdGVzY3UiLCJhIjoiY2tueWdvOXM1MWc0aDJ2b2FtdjFuNmpxYyJ9.pXTxGHIAah6NwaRjNrTEWw"
          position="top-left"
          placeholder="Search address"
          collapsed
          // proximity={}
          trackProximity
        />
        {!addPin &&
          clusters &&
          clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;
            console.log('cluster', cluster);
            if (isCluster) {
              return (
                <Marker
                  key={cluster.id}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <ClusterMarker>
                    <p>{pointCount}</p>
                  </ClusterMarker>
                </Marker>
              );
            }
            return (
              <Marker
                key={cluster.properties.markerId}
                latitude={latitude}
                longitude={longitude}
              >
                <MarkerButton
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedMarker(cluster);
                  }}
                >
                  <img
                    src={
                      selectedMarker === cluster
                        ? '/icons/parking pin selected.svg'
                        : '/icons/parking pin.svg'
                    }
                    alt="Parking place icon"
                  />
                </MarkerButton>
              </Marker>
            );
          })}

        {!addPin && selectedMarker ? (
          <Popup
            latitude={selectedMarker.geometry.coordinates[1]}
            longitude={selectedMarker.geometry.coordinates[0]}
            onClose={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h4>{selectedMarker.properties.street_address}</h4>
              <p>{selectedMarker.properties.description}</p>
            </div>
          </Popup>
        ) : null}
        {addPin ? (
          <Marker
            longitude={pin.longitude}
            latitude={pin.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          >
            <Pin
            // size={20}
            />
          </Marker>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

export default Map;

const MarkerButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;
const ClusterMarker = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #56ccf2;
  border-radius: 50%;
  background: #56ccf2;
  opacity: 0.8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;
