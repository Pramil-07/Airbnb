'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import useSignUpModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";



const SignUpModel = () => {
    const SignUpModel = useSignUpModal()
  

  
    const content = (
        <>
            <form action="POST">
                <input type="email" className="w-full h-54 border-gray-100"  placeholder="Enter Your Email Address"/>
                <input type="password" className="w-full h-54 border-gray-100"  placeholder="Enter Your Password"/>
                <CustomButton
                lable="Submit"
                onClick={()=> console.log('clicked')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={SignUpModel.isOpen}
            close={SignUpModel.close}
            label="Sign UP"
            content={content}
        />
    )
}

export default SignUpModel;