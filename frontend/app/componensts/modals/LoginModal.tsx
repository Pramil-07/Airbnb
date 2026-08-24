'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";


const LoginModal = () => {
    const LoginModal = useLoginModal()
  

  
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
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;