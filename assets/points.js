const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.6077318, 47.56750118] // Coordinates for point 1
            },
            properties: {
                title: 'Point 1'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.590192528, 47.54765305] // Coordinates for point 2
            },
            properties: {
                title: 'Point 2'
            }
        },
        // Add more points as needed
    ]
};
