import Client from "./page/Client";
import Admin from "./page/Admin";

function App() {
  const checkPort = location.port;
  console.log(checkPort);
  return checkPort == "80" ? <Client /> : <Admin />;
}

export default App;
