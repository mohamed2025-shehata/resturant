

import React, { useState } from 'react';

function Menu() {
  const [selected, setSelected] = useState('');

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleConfirm = () => {
    if (selected) {
      const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
      const newOrders = [...previousOrders, selected];
      localStorage.setItem('orders', JSON.stringify(newOrders));

      alert(`✅ تم تأكيد طلبك: ${selected}`);
      setSelected('');
    } else {
      alert("❗ من فضلك اختر وجبة أولاً");
    }
  };

  return (
    <div className='menu'>
      <h1>قائمة الطعام</h1>  
      <button onClick={() => handleSelect('بيتزا')}>🍕 بيتزا</button>
      <button onClick={() => handleSelect('برجر')}>🍔 برجر</button>
      <button onClick={() => handleSelect('باستا')}>🍝 باستا</button>
      <button onClick={() => handleSelect('سلطة')}>🥗 سلطة</button>
      <button onClick={() => handleSelect('فراخ')}>🥗 فراخ</button>
      <button onClick={() => handleSelect('كبسه')}>🥗 كبسه</button>
      

      {selected && (
        <div>
          <p >✅ تم اختيار: {selected}</p>
          <button onClick={handleConfirm}>تأكيد الطلب</button>
        </div>
      )}
    </div>
  );
}

export default Menu;






