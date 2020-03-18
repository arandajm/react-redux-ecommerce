import { connect } from "react-redux";
import Basket from "./Basket";

//This component connect the store with the basket

function mapStateToProps(state) {
  return {
    currency: state.currency
  };
}

export default connect(mapStateToProps)(Basket);
