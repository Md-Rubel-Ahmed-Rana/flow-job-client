import React, { useReducer } from 'react';

const AddJob = () => {
    const initialState = {
        title: "",
        location: "",
        type: "",
        recruiterEmail: "",
        officialEmail: "",
        website: "",
        salary: "",
        workDay: "",
        workTime: "",
        about: "",
    }

    const jobReducer = (state = initialState , action: any) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name] : action.payload.value
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(jobReducer, initialState)
    console.log(state);

    return (
        <div>
            <h3 className="text-4xl text-center font-bold">Add New Job</h3>
            <form  className='w-full p-10'>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                    <label htmlFor="title">
                    Title:
                    <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})} name="title" className='ml-2 p-2' type="text" placeholder='Enter job title' /> 
                     </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Location:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  className='ml-2 p-2' name='location' type="text" placeholder='Enter job location' /> 
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <span>Job type: </span>
                    <select onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  className='p-2' name="type" id="type">
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote/Onsite">Remote/Onsite</option>
                    </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Recruiter email:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='recruiterEmail' className='ml-2 p-2' type="email" placeholder='Enter recruiter email' /> 
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Official email:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='officialEmail' className='ml-2 p-2' type="email" placeholder='Enter official email' /> 
                    </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="website">
                        Website:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='website' className='ml-2 p-2' type="text" placeholder='Enter website link' /> 
                    </label>
                    </div>
                </div>
                 <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Salary:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='salary' className='ml-2 p-2' type="number" placeholder='Enter salary per month' /> 
                    </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Working Day:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='workDay' className='ml-2 p-2' type="number" placeholder='Working Day' /> 
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Working Time:
                        <input onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name='workTime' className='ml-2 p-2' type="text" placeholder='Working Time' /> 
                    </label>
                    </div>
                    <div className='mb-3 flex gap-3'>
                        <p>About</p>
                        <textarea onChange={(e) => dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}  name="about" id="about" cols={20} rows={2}></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddJob;