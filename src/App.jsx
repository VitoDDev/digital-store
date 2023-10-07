import { useState } from "react";
import Ways from "./routes";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  
  const [userInfo, setUserInfo] = useState({
    name: 'Vítor',
    isLogged: true
  });

  return(
    <>
      <AuthContext.Provider value={{userInfo, setUserInfo}}>
        <Ways />
      </AuthContext.Provider>
    </>
  );
}

export default App;