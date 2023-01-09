import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/route';


function App() {
  return (
        <div className='w-[1400px] mx-auto bg-slate-100'>
          <RouterProvider router={router} />
        </div>
  );
}

export default App;
