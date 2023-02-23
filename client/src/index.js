import React from "react";
import ReactDOM from "react-dom";
import store  from "./store";
import "./index.css";
import "postcss-color-rebeccapurple";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
