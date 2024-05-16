import Nav from './components/Nav/index'
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App