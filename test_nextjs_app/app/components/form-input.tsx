interface FormInputProps {
    type: string;
    placeholder: string;
    required: boolean;
    errors?: string[];
    name: string;
}

export default function FormInput({
    type,
    placeholder,
    required,
    errors = [],
    name
}:FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
        <input
          className="transition bg-transparent rounded-lg ring-neutral-300 ring-1 text-white w-full h-10 focus:outline-none focus:ring-2 p-2 placeholder:text-white"
          type={type}
          placeholder={placeholder}
          required={required}
          name={name}
        />
        {errors.map((error,index) => ( 
                    <span key={index} className="text-red-500 font-medium">{error}</span>
        ))}
        </div>
    )
}