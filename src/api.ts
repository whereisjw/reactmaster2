const baseURL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return fetch(`${baseURL}/coins`).then((res) => res.json());
}

export async function fetchCoinInfo(coinId: string) {
  return fetch(`${baseURL}/coins/${coinId}`).then((res) => res.json());
}

export async function fetchCoinTickers(coinId: string) {
  return fetch(`${baseURL}/tickers/${coinId}`).then((res) => res.json());
}
