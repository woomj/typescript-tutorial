import * as React from "react";
import Profile from "./components/Profile";

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile name="우민제" job="코드사망꾼" />
      </div>
    );
  }
}

export default App;
