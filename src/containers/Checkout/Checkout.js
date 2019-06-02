import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = props => {
  const handleCheckoutCancelled = () => {
    props.history.goBack();
  };
  const handleCheckoutContinued = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;

  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          checkoutCancelled={handleCheckoutCancelled}
          checkoutContinued={handleCheckoutContinued}
          ingredients={props.ings}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
