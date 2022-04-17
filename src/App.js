import Menuone from './components/Menuone';
import Menuthree from './components/Menuthree';
import Menutwo from './components/Menutwo';
import Barra from './layout/Barra';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>


    <Route path='/' element={<Barra/>}>

      <Route path='Menutwo' element={  <Menutwo/>   }     />
      <Route path='Menuthree' element={  <Menuthree/>   }     />
      <Route index element={  <Menuone/>   }     />
    </Route>





    </Routes>
    </BrowserRouter>
  );
}

export default App;