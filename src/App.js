import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import login from "./Pages/login";
import signup from "./Pages/signup";
const useStyles = makeStyles(() => ({
  App: {
//backgroundColor: "#14161a",
  backgroundImage:"url('https://media.istockphoto.com/videos/4k-resolution-christmas-background-defocused-gold-colored-particles-video-id1172143282?s=640x640')",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={login} exact />
        <Route path="/signup" component={signup} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
