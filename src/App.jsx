import { useState } from "react";
import Ways from "./routes";
import { AuthContext } from "./contexts/AuthContext";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/digital.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "./services";

const App = () => {
  
  const [userInfo, setUserInfo] = useState({
    name: 'Vítor',
    isLogged: true,
    level: 'admin'
  });



  return(
    <>
      <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{userInfo, setUserInfo}}>
        <PrimeReactProvider>
        <Ways />
        </PrimeReactProvider>
      </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;