import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// start-path is 'images' because we have an alias 'images' in webpack.common.js
import { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "@/components/header/Header";
import Footer from "@/components/products/Footer";
import HomePage from "./components/products/HomePage/HomePage";
import Products from "./components/products/Products/Products";
import Product from "./components/products/Product/Product";
import store from "./redux/store";
import Cart from "./components/products/Cart/Cart";
import About from "./components/products/About/About";
import Contact from "./components/products/Contact/Contact";

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
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
