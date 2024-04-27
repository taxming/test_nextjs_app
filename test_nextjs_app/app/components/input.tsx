import { InputHTMLAttributes } from "react";

interface FormInputProps {
    // type: string;
    // placeholder: string;
    // required: boolean;
    errors?: string[];
    name: string;
}

export default function FormInput({
    // type,
    // placeholder,
    // required,
    errors = [],
    name,
    ...rest //모든 형태를 다 입력하는 비효율성을 없애기 위해 inputelement의 attr을 한번에
}:FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
    //&뒤에 있는건 generic. &앞에있는 값 뿐만 아니라, input이 받을 수 있는 모든 attributes또한 받을 수 있다고 선언
    return (
        <div className="flex flex-col gap-2">
        <input
          className="transition bg-transparent rounded-lg ring-neutral-300 ring-1 text-white w-full h-10 focus:outline-none focus:ring-2 p-2 placeholder:text-white"
        //   type={type}
        //   placeholder={placeholder}
        //   required={required}
          name={name}
          {...rest} //위에서 선언한 나머지 attr을 한번에 여기 선언
        />
        {errors.map((error,index) => ( 
                    <span key={index} className="text-red-500 font-medium">{error}</span>
        ))}
        </div>
    )
}