import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// start-path is 'images' because we have an alias 'images' in webpack.common.js
import { Component } from "react";
import ReactDom from "react-dom";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    // test class-dead-code
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  render() {
    return (
      <header>
        <div>Tect</div>
        <nav>
          <ul>
            <li>345</li>
            <li>564</li>
            <li>kjewfgh</li>
            <li>23476</li>
            <li>fghwe</li>
          </ul>
        </nav>
      </header>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
