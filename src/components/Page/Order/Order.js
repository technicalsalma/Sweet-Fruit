import React from 'react';
import fresh from '../../../imges/order-img/fruit-1.png';
import dalivery from '../../../imges/order-img/free-delivery-1-1.png';
import store from '../../../imges/order-img/grocery.png'

import './Order.css'

const Order = () => {
    return (
      <div className="container">
        <div className="text-center mt-5 mb-5 pt-5">
          <h5 className="mb-3 fs-1">
            <i>Fresh Fruits Warehouse</i>
          </h5>
          <p className="pragraph-text">
            We’re not your average fruit importers. We have expertise in
            sourcing the choicest of fresh fruits from around the world and
            distributing it across the length and breadth of India. Our
            top-notch distribution network strengthened through almost a century
            of existence in the fruit business, works efficiently to ensure the
            fruits are delivered far and wide with an intriguing depth of
            freshness. We provide fresh fruits online and fresh vegetables
            online.
            <br />
            <br />
            We have expertise in providing fresh fruits online and fresh
            vegetables online and offline and sourcing the choicest of fruits
            and vegetables from around the world
          </p>
        </div>

        <div className="online-order">
          <div>
            <img src={fresh} alt="" />
            <h5>FRESH GROCERY</h5>
            <p>
              Quality and A grade grocery right from the farms at your doorstep.
            </p>
          </div>
          <div>
            <img src={dalivery} alt="" />
            <h5 className="fs-4">Freshness Guaranteed</h5>
            <p>
              Fruits can be eaten raw, frozen, stewed, cooked, or dried. All
              fruits may be classified into three major groups: simple,
              aggregate, or multiple.
            </p>
          </div>
          <div>
            <img src={store} alt="" />
            <h5>PICK UP FROM OUR STORES</h5>
            <p>
              We have 2 store that have prompt service. so go and check out.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Order;