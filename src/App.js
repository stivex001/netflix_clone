import { Route, Routes} from "react-router-dom"
import { AuthContextProvider } from "./components/context/AuthContext";

import Navbar from "./components/Navbar";
import Account from "./components/pages/Account";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
