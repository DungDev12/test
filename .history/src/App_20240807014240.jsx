import Client from "./page/Client";
import Admin from "./page/Admin";

function App() {
  const checkPort = location.port;
  log
  return checkPort == 80 ? <Client /> : <Admin />;
}

export default App;
