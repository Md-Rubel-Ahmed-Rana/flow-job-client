import React from 'react';
import {RouterProvider} from 'react-router-dom';
import UserContext from './contexts/UserContext';
import router from './routes/route';


function App() {
  return (
        <div className='w-[1400px] mx-auto bg-slate-100'>
          <UserContext>
            <RouterProvider router={router} />
          </UserContext>
        </div>
  );
}

export default App;
