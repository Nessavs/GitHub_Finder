import { Outlet } from "react-router-dom"
import classes  from './App.module.css'

function App() {

  return (
    <>
      <div className={classes.app}>
        <h1> Procurar por usuário do GitHub!</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
