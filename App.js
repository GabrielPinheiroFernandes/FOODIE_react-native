import Routes from "./src/routes/routes";
import RoutesAuth from "./src/routes/routesAuth";
import Busca from "./src/screens/busca/busca";
// Rota Atual de teste
const isUserAuth = false 

export default function App() {
  return isUserAuth ? <RoutesAuth/> : <Routes/>
}
