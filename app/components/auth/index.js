import React from 'react'
import firebase from 'firebase';
import * as Yup from "yup";
import { auth, db } from '../../utils/firebase';
import { AppForm, FormInput, FormBtn } from '../shared/Form'


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),

});


const Auth = () => {
     
    const [isLogin, setIsLogin] =React.useState(true);

    const HandleLoginSignup = (values) => {
        if(isLogin)login(values.email , values.password)
        else signUp(values.email , values.password)

    }



    const loginWithGoogle = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((userCredential) =>{
            addUserToDatabase(userCredential.user);
        })
    }

    const signUp=(email,password) =>{
        auth.createUserWithEmailAndPassword(email,password)
        .then((userCredential) =>{
            addUserToDatabase(userCredential.user);
        })
        .catch(err =>alert(err.message))
    };

    const login=(email,password) =>{
        auth.signInWithEmailAndPassword(email,password)
        .catch(err =>alert(err.message))
    };

    
    const addUserToDatabase =async (user) => {
        const {uid,displayName,email,photoURL} = user;
        const userRef= await db.collection('users').doc(uid).get();
        
        if(!userRef.exists){
            db.collection('users').doc(uid).set({
                uid,
                name: displayName,
                email,
                image: photoURL,
            })
        }
    }


    return (
        <div className="p-5">
            <div className=" mx-auto max-w-[300px] rounded bg-gray-50 my-10 p-5">
                <div className="flex items-center gap-5 text-2xl pb-3 font-semibold justify-center uppercase border-b border-b-gray-300">
                    <h1 className={`${isLogin?'text-gray-700':'text-gray-300'} cursor-pointer `} onClick={() =>setIsLogin(true)}>Login</h1>
                    <h1 className={`${!isLogin?'text-gray-700':'text-gray-300'} cursor-pointer `} onClick={() =>setIsLogin(false)}>Register</h1>
                </div>
                <div className="py-5">
                    <p className="text-center mb-10 text-blue-600 font-semibold cursor-pointer">{isLogin? 'Log in To Your Account' : 'Create a new Account'}</p>
                    <AppForm
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={HandleLoginSignup}
                        validationSchema={validationSchema}
                    >
                        <FormInput
                            name="email"
                            placeOrder="Email"
                            type="email"
                        />
                        <FormInput
                            name="password"
                            placeOrder="Password"
                            type="password"
                        />
                        <FormBtn
                            title={isLogin? "Login" : "Register"}
                        />
                    </AppForm>
                </div>
                <div>
                    <p className="text-center mt-5">Or</p>
                    <p className="text-center mb-5 text-blue-700 font-semibold text-xl cursor-pointer">Log in with</p>

                    <div className="flex items-center gap-5">
                        <button  onClick={loginWithGoogle} className="btn-white bg-green-300 text-white">Google</button>
                        <button className="btn-white bg-blue-300 text-white">Facebook</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth