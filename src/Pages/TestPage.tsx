import React, {useContext} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

type Inputs = {
    email: string,
  password: string,
  user: any
};

const TestPage = () => {
    const {setUser} = useContext(AuthContext)
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = data => {
    const user = {
        email: data.email,
        password: data.password
    }
    fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => {
        setUser(data.user);
        localStorage.setItem("token", data.token)
        navigate("/")
    })
    .catch((err) => {
        console.log(err);
    })
  }



  return (
    <div className='flex'>
        <div className='w-1/2 bg-blue-600 mx-auto'>
            <form className='w-full  px-10 pt-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl text-white text-center font-bold mb-10">Please Login</h3>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter email</p>
                    <input className='p-2 w-full rounded' {...register("email", { required: true })} />
                </div>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                    <input className='p-2 w-full rounded' {...register("password", { required: true })} />
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary' type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default TestPage;