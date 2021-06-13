import { StrictMode } from "react"
import { render } from "react-dom"
import "assets/css/index.css"

import { App } from "./App"
import { store } from "store"
import { Provider } from "react-redux"

import { BrowserRouter as Router } from "react-router-dom"

render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </StrictMode>,
    document.getElementById("root")
)
