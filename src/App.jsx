import { Provider } from "react-redux"
import Routes from "./routes/Routes"
import {GlobalStyles} from "./styles_global/GlobalStyles"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store"


function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes/>
          <GlobalStyles/>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
