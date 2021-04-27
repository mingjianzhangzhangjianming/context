import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import App from "@/component/App";

render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
)

// store.subscribe(() => render(
//     // <Provider store={store}>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>,
//     // </Provider>,
//     document.getElementById("root")
// ))
