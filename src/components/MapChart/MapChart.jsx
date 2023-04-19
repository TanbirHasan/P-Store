import React from 'react';
import { memo } from 'react';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

const MapChart = () => {
	const [content, setContent] = useState('');
	return (
		<div className="w-full ">
			<ComposableMap height={200} width={400}>
				<ZoomableGroup center={[50.0, 400]} zoom={1}>
					<Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
						{({ geographies }) =>
							geographies.map((geo) => {
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onMouseEnter={() => {
											setContent(`${geo.properties.name}`);
										}}
										onMouseLeave={() => {
											setContent('');
										}}
										style={{
											default: {
												fill: "#010101",
												strokeWidth: 0.75,
											},
											hover: {
												fill: '#F53',
												outline: 'none',
											},
											pressed: {
												fill: '#E42',
												outline: 'none',
											},
										}}
									/>
								);
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
};

export default memo(MapChart);
