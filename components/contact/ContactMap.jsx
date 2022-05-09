import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import ContactMarker from '../icon/Contact/ContactMarker'

const ContactMap = () => {
  const [popupInfoBerlin, setPopupInfoBerlin] = useState(null)
  const [popupInfoMdorf, setPopupInfoMdorf] = useState(null)

  const markers = [
    {
      longitude: 13.446724,
      latitude: 52.49388,
      onClick: (e) => {
        e.originalEvent.stopPropagation()
        setPopupInfoBerlin(true)
      }
    },
    {
      longitude: 8.691668,
      latitude: 47.2515,
      onClick: (e) => {
        e.originalEvent.stopPropagation()
        setPopupInfoMdorf(true)
      }
    }
  ]

  return (
    <div className='relative z-0 my-50px w-100per h-50vh overflow-hidden' id='contact-map'>
      <Map
        mapboxAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_KEY}`}
        initialViewState={{
          longitude: 8.6821267,
          latitude: 50.1109221,
          zoom: 5
        }}
        mapStyle='mapbox://styles/mapbox/dark-v10'>
        <>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              longitude={marker.longitude}
              latitude={marker.latitude}
              anchor='center'
              onClick={marker.onClick}>
              <ContactMarker width='50' height='50' />
            </Marker>
          ))}
        </>
        {popupInfoBerlin && (
          <Popup longitude={13.446724} latitude={52.49388} anchor='top' onClose={() => setPopupInfoBerlin(false)}>
            It started with an idea, <br />
            which became a vision.
          </Popup>
        )}
        {popupInfoMdorf && (
          <Popup longitude={8.691668} latitude={47.2515} anchor='bottom' onClose={() => setPopupInfoMdorf(false)}>
            The vision became reality
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default ContactMap

// // leaflet backup
// import ReactDOMServer from 'react-dom/server'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import ContactMarker from '../icon/Contact/ContactMarker'

// export default function ContactMap() {
//   const icon = L.divIcon({
//     className: 'custom-icon',
//     html: ReactDOMServer.renderToString(<ContactMarker width='50' height='50' />)
//   })

//   const markers = [
//     {
//       location: [52.49388, 13.446724],
//       popup: (
//         <Popup>
//           It started with an idea, <br />
//           which became a vision.
//         </Popup>
//       )
//     },
//     {
//       location: [47.2515, 8.691668],
//       popup: <Popup>The vision became reality</Popup>
//     }
//   ]

//   return (
//     <div className='relative z-0 my-50px'>
//       <MapContainer
//         center={[52.52437, 13.41053]}
//         zoom={12}
//         scrollWheelZoom={false}
//         style={{ height: '50vh', width: '100%' }}>
//         <TileLayer
//           attribution='Map tiles by <a href="https://wiki.openstreetmap.org/wiki/Carto_(Company)" rel=”nofollow”>Carto</a>, under CC BY 3.0. © <a href="http://openstreetmap.org" rel=”nofollow”>OpenStreetMap</a> contributors'
//           url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
//         />
//         {markers.map((marker, index) => (
//           <div key={index} style={{ zIndex: 401, position: 'relative' }} className='bg-white'>
//             <Marker position={marker.location} icon={icon}>
//               {marker.popup}
//             </Marker>
//           </div>
//         ))}
//       </MapContainer>
//     </div>
//   )
// }
