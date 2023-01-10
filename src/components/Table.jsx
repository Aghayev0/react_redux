import React, { useEffect, useState } from 'react'
import 'assets/table.css'
import { getCoin } from 'service/getCoin';
import { useDispatch } from 'react-redux';
import { addCoinToFavorites } from 'redux/slice/Favorites/FavoritesSlice';
export const Table = () => {
  const [coins, setCoins] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getCoin().then((res) => {
      if (res.status === 200) {
        setCoins(res.data);
      }
    });
  }, []);

  return (
    <div className='stol'><table className="table">
      <thead>
        <tr>
          <th >Rank</th>
          <th >Coin Name</th>
          <th >Price</th>
          <th >Price Change</th>
          <th >market Cap</th>
          <th >Add to favorites</th>
        </tr>
      </thead>
      <tbody>
        {coins &&
          coins.map((coin) => (
            <tr >
              <th>{coin.market_cap_rank}</th>
              <td>{coin.name}</td>
              <td>{coin.current_price}</td>
              <td style={coin.price_change_percentage_24h > 0 ? { color: "green" } : { color: "red" }}>{coin.price_change_percentage_24h}{coin.price_change_percentage_24h > 0 ? <i className="fa-solid fa-arrow-trend-up" /> : <i className="fa-solid fa-arrow-trend-down" />}</td>
              <td style={{ color: "grey" }} >{coin.market_cap}</td>
              <td><button className='addBtn' onClick={()=>{
                dispatch(addCoinToFavorites(coin));
              }}>Add to Favorites</button></td>
            </tr>
          ))}
    </tbody>
    </table>
    </div >
  )
}
