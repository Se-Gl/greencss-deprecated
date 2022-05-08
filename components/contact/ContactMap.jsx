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

  return (
    <div className='relative z-0 my-50px'>
      <MapContainer
        center={[52.52437, 13.41053]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '50vh', width: '100%' }}>
        <TileLayer
          attribution='© <a href="https://stadiamaps.com/" rel=”nofollow”>Stadia Maps</a>, © <a href="https://openmaptiles.org/" rel=”nofollow”>OpenMapTiles</a> © <a href="http://openstreetmap.org" rel=”nofollow”>OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />

        <Marker position={[52.49388, 13.446724]} icon={icon}>
          <Popup>
            It started with an idea, <br />
            which became a vision.
          </Popup>
        </Marker>

        <Marker position={[47.2515, 8.691668]} icon={icon}>
          <Popup>The vision became reality</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
