import { connect } from "react-redux";
import ProductListing from "./ProductListing";

//This component connect the store with the Product Listing

function mapStateToProps(state) {
  return {
    currency: state.currency
  };
}

export default connect(mapStateToProps)(ProductListing);
