import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm ({setIsLoggedIn}) {
    const navigate = useNavigate();

    const[formData, setFormData] = useState({firstName:'', lastName:'', email:'', password:'',confirmPassword:''})

    const[showPassword, setShowPassword] = useState(false);

    const [accountType, setAccountType] = useState('student');

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account is Created");
        const accountData = {
            ...formData
        }

        console.log('printing account data');
        console.log(accountData);

        navigate('/dashboard');

    }

    return(
        <div>

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
                <button onClick={()=> setAccountType('student')} 
                    className={`${accountType=== 'student' ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 select-none`}>
                    Student
                </button>

                <button onClick={()=>setAccountType('instructor')} 
                  className={`${accountType=== 'instructor' ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 select-none`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                <div className="flex gap-x-4 mb-4">
                  <label className="w-full">
                     <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] select-none">First Name <sup className="text-pink-200">*</sup></p>
                     <input type="text" required name='firstName' onChange={changeHandler}
                     placeholder="Enter First Name" value={formData.firstName}
                     className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700"  />
                  </label>

                  <label className="w-full">
                     <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] select-none">Last Name <sup className="text-pink-200">*</sup></p>
                     <input type="text" required name='lastName' onChange={changeHandler}
                     placeholder="Enter Last Name" value={formData.lastName} 
                     className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700" />
                  </label>
                </div>

                <label className="w-full">
                     <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] select-none">Email Address <sup className="text-pink-200">*</sup></p>
                     <input type="email" required name='email' onChange={changeHandler}
                     placeholder="Enter Email Address" value={formData.email} 
                     className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700"/>
               </label>

               <div className="flex gap-x-4 mt-4">
                  <label className="w-full relative">
                     <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] select-none">Create Password<sup className="text-pink-200">*</sup></p>
                     <input type={showPassword ? ('text'):('password')} required name='password' onChange={changeHandler}
                     placeholder="Enter Password" value={formData.password}
                     className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700" />

                    <span onClick={()=> setShowPassword((prev)=>!prev)}
                        className="absolute right-3 top-[38px] cursor-pointer">

                         {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}    
                    </span>   
                  </label>

                  <label className="w-full relative">
                     <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] select-none">Confirm Password<sup className="text-pink-200">*</sup></p>
                     <input type={showPassword ? ('text'):('password')} required name='confirmPassword' onChange={changeHandler}
                     placeholder="Confirm Password" value={formData.confirmPassword} 
                     className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700"/>

                    <span onClick={()=> setShowPassword((prev)=>!prev)}
                        className="absolute right-3 top-[40px] cursor-pointer">

                         {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                          (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}    
                    </span>   
                  </label>
               </div>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-10 w-full">
                Create Account
            </button>

            </form>
        </div>
    );
}

export default SignupForm;