import { connect } from "react-redux";
import CurrencySelector from "./CurrencySelector";
import { currencyChanged } from "../actions";

//This component connect the store with the CurrencySelector

function mapStateToProps(state) {
  return {
    currency: state.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    currencyChanged: currency => dispatch(currencyChanged(currency))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
