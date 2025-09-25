import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response[currency]) {
          setData(response[currency]);
        } else {
          setData({ //  if API returns unexpected data
            usd: 1,
            inr: 83,
            eur: 0.9,
            gbp: 0.78,
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setData({
          usd: 1,
          inr: 83,
          eur: 0.9,
          gbp: 0.78,
        });
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
