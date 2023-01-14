import { findRenderedComponentWithType } from "react-dom/test-utils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";

import Home from "./routes/Home";
//스위치는 라우터를 찾아서 랜더링 하는 컴포넌트
//path = "/" 는 최상위 폴더를 찾아가는 경로로, 메인홈페이지를 나타냄
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/* 
react-router-dom@6부터 스위치는 라우터에 편입됨
따라서 엘레멘트 prop로 자식컴포넌트 할당됨 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
return <Router>
<Routes>  <-요놈이 스위치 대신에 들어가는 놈
<Route path="/" element={<Home />} /> <-엘레멘트 프롭
</Routes>
</Router>;
}

export default App;
npm i react-router-dom@5.3.0 이후 버전 사용시 코드 */
