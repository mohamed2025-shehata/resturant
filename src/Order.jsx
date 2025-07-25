



import React, { useEffect, useState } from 'react';

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div>
      <h1>الطلبات السابقة</h1>
      {orders.length === 0 ? (
        <p>لا يوجد طلبات محفوظة</p>
      ) : (
        <ul className='ul'>
          {orders.map((item, index) => (
            <li key={index}>🍽️ {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrdersList;



















