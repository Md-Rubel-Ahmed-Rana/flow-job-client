import React from 'react';
import {RouterProvider} from 'react-router-dom';
import UserContext from './contexts/UserContext';
import router from './routes/route';
 import {QueryClient,QueryClientProvider} from 'react-query'
 import { Toaster } from 'react-hot-toast';

 const queryClient = new QueryClient()

function App() {
  return (
        <div className='w-[1400px] mx-auto bg-slate-100'>
          <QueryClientProvider client={queryClient}>
          <UserContext>
            <RouterProvider router={router} />
          </UserContext>
          </QueryClientProvider>
          <Toaster />
        </div>
  );
}

export default App;
