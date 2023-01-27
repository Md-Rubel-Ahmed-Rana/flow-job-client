import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { createUser, userFetcher } from './userSlice';
import { useSelector } from 'react-redux/es/exports';

interface FormData {
  name: string;
  email: string;
}

const Users = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const {users, error, isLoading} = useSelector((state: any) => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userFetcher())
    }, [])

    console.log(users);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createUser(formData));
    
  };

  if(isLoading){
    return <h2 className='text-4xl text-center font-bold'>Loading Data...</h2>
  }

  return (
        <div className='my-10'>
            <form className='w-1/2 mx-auto bg-blue-500 p-10 text-center text-white' onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label >
                Name:
                <input className='ml-2 text-black p-1 rounded'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </label>
            </div>
            <br />
            <label>
                Email:
                <input className='ml-3 text-black p-1 rounded'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </label>
            <br />
            <button className='bg-blue-800 px-5 py-2 mt-5 rounded-md' type="submit">Submit</button>
            </form>
            <div className='grid grid-cols-3 gap-10 p-10'>
                {users.map((user: FormData) => {
                    const {name, email} = user;
                    return (
                        <div className='bg-blue-600 p-10 text-white rounded-md'>
                            <h3 className="text-2xl font-bold">{name}</h3>
                            <h3 className="text-2xl font-bold">{email}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
  );
};

export default Users;