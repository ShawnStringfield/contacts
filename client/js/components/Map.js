import React from 'react';
import config from '../../constants';

const {
	MAPBOX_AUTH_TOKEN,
	MAPBOX_STATIC_API
} = config;

// Add Options and MapSize to Options
function getMapData(props) {
	const {lat, long} = props;
	const zoom = props.zoom;
	const map_size = `${props.width}x${props.height}@2x.png`;
	const token = `?access_token=${MAPBOX_AUTH_TOKEN}`;
	const marker = encodeURIComponent(`url-https://mapbox.com/img/rocket.png(${long},${lat})`);
	const query = `${marker}/${long},${lat},${zoom}/${map_size}${token}`;
	return `${MAPBOX_STATIC_API}/${query}`;
}

function renderImageStyle(props) {
	const options = {
		backgroundImage:`url('${getMapData(props)}')`,
		height: `${props.height}px`
	}
	return options;
}

const Map = (props) => (
	<div className="map">
		<a href={`http://maps.apple.com/?ll=${props.lat},${props.long}`}>
			<div className="map"
           style={renderImageStyle(props)}>
			</div>
		</a>
	</div>
);

export default Map;
