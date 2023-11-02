# npm i styled-components

```
import styled from "styled-components";
```

```
import React from "react";

import "./App.css";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>white</Text>
      </BoxOne>
      <BoxTwo></BoxTwo>
    </Father>
  );
}

export default App;
```

# as

```
      <Btn as="a">login</Btn>
```

# styled-components 애니메이션주기 ,자식컴포넌트

```
         <Box>
        <Emoji>😲</Emoji>
      </Box>
      <Emoji>🌑</Emoji>
```

```
const rotationAnimation = keyframes`
from{
transform: rotate(0deg);
border-radius: 0px;
}to{
  transform: rotate(360deg);
  border-radius: 50%;
}`;
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 90px;
  }
`;
```

# darkmode/lightmode 구현

1. index에 themeprovider로 우산씌우기

```
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
```

2. 다크모드 적용할 컴포넌트에 styled-components로 적용해주기

```
const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>hi</Title>
    </Wrapper>
  );
}
```

# 다크모드 ts

## styled.d.ts

```
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

```

https://styled-components.com/docs/api#typescript

## theme ts

```
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

## index ts

```
  <ThemeProvider theme={darkTheme}>
```

# Crypto Tracker 1

/ > All coin
/:id> /btc >coin Detail
/btc/information
/btc/chart

```
React Query, React Router 설치
npm i react-router-dom@5.3.0 react-query
npm i --save-dev @types/react-router-dom
```

```
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin></Coin>
        </Route>
        <Route path="/">
          <Coins></Coins>
        </Route>
      </Switch>{" "}
    </BrowserRouter>
  );
}
```

# Crypto Tracker 2

리셋하기

```
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&family=Source+Sans+3:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Noto Sans', sans-serif;
}
a{
  text-decoration: none;
}
```

```
  "include": ["src/**/*.tsx", "src/**/*.ts", "src/**/*.d.ts"]
```

# npm install --save react-apexcharts apexcharts

```
import ApexCharts from "react-apexcharts";
   <ApexCharts
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((v) => parseFloat(v.close)) ?? [],
            },
          ]}
          options={{
            tooltip: { y: { formatter: (value) => `$ ${value.toFixed(3)}` } },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
              colors: ["red"],
            },
            stroke: { curve: "smooth", width: 3 },
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: true },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories:
                data?.map((v) =>
                  new Date(v.time_close * 1000).toLocaleDateString()
                ) ?? [],
            },
          }}
        />
```

# npm i react-helmet
