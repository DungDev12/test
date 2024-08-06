import Client from "./page/Client";
import Admin from "./page/Admin";

function App() {
  const checkPort = location.port;
  console.log(checkPort);
  return checkPort == "8081" ? <Admin /> : <Client />;
}

export default App;
