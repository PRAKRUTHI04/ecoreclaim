const apiKey = "TfN3q4DvUvVtAUPeo3hFXl7DTA4QfsaE";

var map = tt.map({
    key: apiKey,
    container: "map",
    center: [77.5946, 12.9716], 
    zoom: 12
});

map.addControl(new tt.NavigationControl());

const recyclingCenters = [
    {
        name: "Zolopik E-Waste Recycling",
        coords: [77.6010, 12.9604],
        phone: "8884449985",
        address: "Koramangala, Bengaluru"
    },
    {
        name: "Saahas Zero Waste",
        coords: [77.6452, 12.9280],
        phone: "080 41689889",
        address: "HSR Layout, Bengaluru"
    },
    {
        name: "E-Scrappy Recyclers",
        coords: [77.5802, 12.9206],
        phone: "1800 572 9298",
        address: "JP Nagar, Bengaluru"
    },
    {
        name: "Gravity E-Waste Management",
        coords: [77.6956, 12.8352],
        phone: "080 23456789",
        address: "Whitefield, Bengaluru"
    },
    {
        name: "Earth Sense Recycle",
        coords: [77.5004, 12.8501],
        phone: "080 41234567",
        address: "Yeshwanthpur, Bengaluru"
    },
    {
        name: "E-Parisara Pvt Ltd",
        coords: [77.4653, 12.9103],
        phone: "080 27839999",
        address: "Peenya, Bengaluru"
    },
    {
        name: "Ash Recyclers",
        coords: [77.6892, 12.9865],
        phone: "080 26789012",
        address: "Indiranagar, Bengaluru"
    },
    {
        name: "Eco-Ewaste Recyclers India Pvt Ltd",
        coords: [77.6208, 12.9309],
        phone: "080 29012345",
        address: "Jayanagar, Bengaluru"
    }
];

recyclingCenters.forEach(center => {
    var marker = new tt.Marker()
        .setLngLat(center.coords)
        .addTo(map);

    var popupContent = `
        <strong>${center.name}</strong><br>
        📞 <a href="tel:${center.phone}">${center.phone}</a><br>
        📍 ${center.address}
    `;

    var popup = new tt.Popup({ offset: 35 })
        .setHTML(popupContent);

    marker.setPopup(popup);
});
