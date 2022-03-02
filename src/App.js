//components
import Home from "./pages/home/Home";
//contexts
import ShowModalProvider from "./utils/context/showModal";
//styles
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <h1>Calendar App</h1>
      <ShowModalProvider>
        <Home />
      </ShowModalProvider>
    </div>
  );
};

export default App;
