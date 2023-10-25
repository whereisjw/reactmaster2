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
