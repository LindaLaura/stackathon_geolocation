import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/thunks/productThunks";
import { fetchCompanies } from "../store/thunks/companyThunk";
import L, {Icon} from 'leaflet';



class allProducts extends Component {
  constructor() {
    super();
  }

   async componentDidMount() {
     await this.props.loadProducts();
    //  await this.props.loadCompanies();
  }
  render() {
    // const position = [42.585444, 13.257684];
    const { products } = this.props.productReducer;
    // console.log(products);
    var myIcon = L.icon({
        iconUrl: '//www.somatechnology.com/blog/wp-content/uploads/2017/06/PhilipsAvalonFm50M2705a.jpg',
        iconSize:[25, 42],
        iconAnchor:[12, 41]
    })
    if (products.length !== 0) {
      console.log(typeof(products[0].longitude));
      return (
        <div id="mapid">
            <MapContainer
                center={[42.585444, 13.257684]}
                zoom={6}
                scrollWheelZoom={true}
                >
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker
                    position={[42.585444 , 13.257684]}
                        // position={[parseFloat(product.latitude), parseFloat(product.longitude)]}
                >
                </Marker>; */}
                 {products.map(product => {
                    <Marker
                        key={product.id}
                        position={[product.latitude, product.longitude]}
                        icon ={myIcon}
                    >
                        <Popup position={[product.latitude, product.longitude]}>
                            <div>
                                <h2>{product.model}</h2>
                            </div>
                        </Popup>
                    </Marker>;
                   })
                  }
            </MapContainer>
        </div>
      );
    } else {
        return <div>Is Loading....</div>;
      }
  }
}

const mapState = ({ productReducer}) => ({
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
