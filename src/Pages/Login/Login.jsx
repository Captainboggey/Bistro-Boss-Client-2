import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [disabled,setDisabled]=useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password});
        signIn(email,password)
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                title: "User Logged In Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from)
        })
        .catch(error=>console.error(error))

    }
    const handleValidateCaptcha = (e) =>{

        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
              setDisabled(false)
        }else{

            setDisabled(true)
        }
    }
    return (
        <>
        <Helmet>
            <title>Bistro Boss || Login</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:1/2 max-w-sm  shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input  onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="type the captcha" className="input input-bordered"  />
                            
                            
                        </div>
                        <div className="form-control  mt-6">
                            
                            <input disabled={false} className="btn btn-primary w-full" type="submit" value='Login' />
                        </div>
                    </form>
                    <div className='p-4 text-center'>
                    <SocialLogin ></SocialLogin>
                    </div>
                    <p className='p-4 text-center'><small>New Here?<Link to={'/signup'}>Create an Account</Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;