maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
        container: "map", // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,
        center: listing.geometry.coordinates,
        zoom: 9,
});

const marker = new maptilersdk.Marker({color: 'red'})
.setLngLat(listing.geometry.coordinates)
.setPopup(new maptilersdk.Popup({offset: 25})
.setHTML(`<h6>${listing.location}</h6><p>Exact location provided after booking</P>`))
.addTo(map);