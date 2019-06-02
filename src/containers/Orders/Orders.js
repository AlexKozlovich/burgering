import React, { useEffect } from "react";
import axios from "../../axios-orders";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = props => {
  useEffect(() => {
    props.onFetchOrders(props.authToken, props.userId);
  }, []);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map(order => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      );
    });
  }
  return orders;
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    authToken: state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
