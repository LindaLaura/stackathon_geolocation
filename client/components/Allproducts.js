import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/thunks/productThunks";
import { fetchCompanies } from "../store/thunks/companyThunk";
import L, { Icon } from "leaflet";
import { Link } from "react-router-dom";

class allProducts extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.loadProducts();
  }
  render() {
    // const position = [42.585444, 13.257684];
    const { products } = this.props.productReducer;
     //console.log(products[0]);
    // var myIcon = L.icon({
    //   iconUrl:
    //     "//www.somatechnology.com/blog/wp-content/uploads/2017/06/PhilipsAvalonFm50M2705a.jpg",
    //   iconSize: [50, 84],
    //   iconAnchor: [12, 41],
    // });
    if (products.length !== 0) {
      // console.log(products[0].latitude, "In return function");
      // console.log(typeof products[0].longitude);
      return (
        <div id="mapid">
          <MapContainer
            center={[42.585444, 13.257684]}
            zoom={7}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {products.map((product) => {
              return (
                <Marker
                  key={product.id}
                  position={[product.latitude, product.longitude]}
                  icon={
                    new Icon({
                      iconUrl: product.imageUrl,
                      iconSize: [50, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [12, -50],
                    })
                  }
                >
                  <Popup position={[product.latitude, product.longitude]}>
                    <div>
                      <h2>Model : {product.model}</h2>
                      {product.status === "active" ? (
                        <div>
                          <h3>Address : {product.address} </h3>
                          <h3>Status : {product.status} 🟢 </h3>
                          <h3><Link to={`/createTicket/${product.id}`} style={{ textDecoration: "none" }}>create ticket</Link></h3>
                        </div>
                      ) : (
                        <div>
                          <h3>Address : {product.address} </h3>
                          <h3>Status : {product.status} 🔴 </h3>
                        </div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      );
    } else {
      return <div>Is Loading....</div>;
    }
  }
}

const mapState = ({ productReducer }) => ({
  productReducer,
  //   companyReducer,
});

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
    // loadCompanies: () => dispatch(fetchCompanies()),
  };
};

export default connect(mapState, mapDispatch)(allProducts);
