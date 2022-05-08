import ReactDOMServer from 'react-dom/server'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ContactMarker from '../icon/Contact/ContactMarker'

export default function ContactMap() {
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<ContactMarker width='50' height='50' />)
  })

  const markers = [
    {
      location: [52.49388, 13.446724],
      popup: (
        <Popup>
          It started with an idea, <br />
          which became a vision.
        </Popup>
      )
    },
    {
      location: [47.2515, 8.691668],
      popup: <Popup>The vision became reality</Popup>
    }
  ]

  return (
    <div className='relative z-0 my-50px'>
      <MapContainer
        center={[52.52437, 13.41053]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '50vh', width: '100%' }}>
        <TileLayer
          attribution='Map tiles by <a href="https://wiki.openstreetmap.org/wiki/Carto_(Company)" rel=”nofollow”>Carto</a>, under CC BY 3.0. © <a href="http://openstreetmap.org" rel=”nofollow”>OpenStreetMap</a> contributors'
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
        />
        {markers.map((marker, index) => (
          <div key={index}>
            <Marker position={marker.location} icon={icon}>
              {marker.popup}
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  )
}
