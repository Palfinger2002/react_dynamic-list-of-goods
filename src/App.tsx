import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const handleLoadAllGoods = () => {
    goodsAPI.getAll().then(allGoods => setGoods(allGoods));
  };

  const handleLoadFirstFiveGoods = () => {
    goodsAPI.get5First().then(firstFive => setGoods(firstFive));
  };

  const handleLoadRedGoods = () => {
    goodsAPI.getRedGoods().then(redGoods => setGoods(redGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
