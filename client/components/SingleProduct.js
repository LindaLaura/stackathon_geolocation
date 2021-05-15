import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/thunks/productThunks";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Polyline,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import workshopsData from "../../workshops.json";

class SingleProduct extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.productReducer.selectedProduct, "SINGLE PRODUCT");
    // console.log(workshopsData);
    alert("Thank you for submitting a ticket!!");

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    const limeOptions = { color: "lime" };
    const { selectedProduct } = this.props.productReducer;
    // const positions = workshopsData.map((shop) => {
    //     return [shop.latitude, shop.longitude];
    // });
    // console.log(positions, ' map function');
    // let polyline = [
    //     [selectedProduct.latitude, selectedProduct.longitude]
    // ]

    // console.log(
    //   workshopsData.map((shop) => {
    //     return [
    //       [selectedProduct.latitude, selectedProduct.longitude],
    //       [shop.latitude, shop.longitude],
    //     ];
    //   }),
    //   "new polyline"
    // );
    let array = [];
    let polyline = [];
    workshopsData
      .map((shop) => {
        return [
          [selectedProduct.latitude, selectedProduct.longitude],
          [shop.latitude, shop.longitude],
        ];
      })
      .forEach((el) => {
        array.push(
          getDistanceFromLatLonInKm(el[0][0], el[0][1], el[1][0], el[1][1])
        );
        // console.log(array, "les distances");
        // console.log(array.indexOf(Math.min(...array)), "Min distance");
        polyline = workshopsData.map((shop) => {
          return [
            [selectedProduct.latitude, selectedProduct.longitude],
            [shop.latitude, shop.longitude],
          ];
        })[array.indexOf(Math.min(...array))];
        return polyline;
      });
    // console.log(polyline, "HOOOHOHOOHOHOHOHHOO");
    const AllProducts_Polyline = workshopsData.map((shop) => {
      return [
        [selectedProduct.latitude, selectedProduct.longitude],
        [shop.latitude, shop.longitude],
      ];
    });
    return (
      <div id="mapid">
        <MapContainer
          center={[selectedProduct.latitude, selectedProduct.longitude]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <LayersControl position={"topright"}>
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Min distance Product-Workshop">
              <LayerGroup>
                <Polyline pathOptions={{ color: "red" }} positions={polyline} />

                <Marker
                  position={[
                    selectedProduct.latitude,
                    selectedProduct.longitude,
                  ]}
                  icon={
                    new Icon({
                      iconUrl: selectedProduct.imageUrl,
                      iconSize: [50, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [12, -50],
                    })
                  }
                >
                  <Popup
                    position={[
                      selectedProduct.latitude,
                      selectedProduct.longitude,
                    ]}
                  >
                    <div>
                      <h2>Model : {selectedProduct.model}</h2>
                      <h3>Address : {selectedProduct.address} </h3>
                    </div>
                  </Popup>
                </Marker>
                <Marker
                  position={polyline[1]}
                  icon={
                    new Icon({
                      iconUrl:
                        "https://image.shutterstock.com/z/stock-vector-workshop-icon-isolated-on-white-background-208979020.jpg",
                      iconSize: [50, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [12, -50],
                    })
                  }
                ></Marker>
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Product-AllWorkshops">
              <LayerGroup>
                <Polyline
                  pathOptions={limeOptions}
                  positions={AllProducts_Polyline}
                />
                <Marker
                  position={[
                    selectedProduct.latitude,
                    selectedProduct.longitude,
                  ]}
                  icon={
                    new Icon({
                      iconUrl: selectedProduct.imageUrl,
                      iconSize: [50, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [12, -50],
                    })
                  }
                >
                  <Popup
                    position={[
                      selectedProduct.latitude,
                      selectedProduct.longitude,
                    ]}
                  >
                    <div>
                      <h2>Model : {selectedProduct.model}</h2>
                      <h3>Address : {selectedProduct.address} </h3>
                    </div>
                  </Popup>
                </Marker>
                {workshopsData.map((shop, idx) => {
                  return (
                    <Marker
                      key={idx}
                      position={[shop.latitude, shop.longitude]}
                      icon={
                        new Icon({
                          iconUrl:
                            "https://image.shutterstock.com/z/stock-vector-workshop-icon-isolated-on-white-background-208979020.jpg",
                          iconSize: [50, 41],
                          iconAnchor: [12, 41],
                          popupAnchor: [12, -50],
                        })
                      }
                    >
                      <Popup position={[shop.latitude, shop.longitude]}>
                        <div>
                          <h2>Name : {shop.name}</h2>
                          <h3>Address : {shop.address} </h3>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    );
  }
}

const mapState = ({ productReducer }) => ({
  productReducer,
});

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
