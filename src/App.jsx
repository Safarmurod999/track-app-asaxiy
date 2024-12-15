import { TransactionProvider } from "./context/dataContext";
import PagesRouter from "./router/router"
import "./styles/app.scss";
function App() {

  return (
    <>
      <TransactionProvider>
        <PagesRouter />
      </TransactionProvider>
    </>
  )
}

export default App
