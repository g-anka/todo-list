import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={ store }>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);