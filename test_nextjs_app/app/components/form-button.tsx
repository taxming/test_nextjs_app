"use client"
import { useFormStatus } from "react-dom";

interface FormButtonProps {
    text:string;
}


export default function FormButton({text}: FormButtonProps) {
    const {pending} = useFormStatus(); //이걸쓰려면 필히 "use client"
    return(
        <button 
        disabled={pending}
        className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed flex items-center justify-center">
            {pending ? "loading..." : text}
        </button>
    )
}