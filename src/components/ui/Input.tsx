"use client";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

type Props = {
    icon: React.ReactNode;
    label: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    isPassword?: boolean;
    error?: string;
};


const Input: React.FC<Props> = ({
    icon,
    label,
    type,
    value,
    onChange,
    placeholder,
    isPassword = false,
    error,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const hasError = Boolean(error);


    return (
        <div className="flex flex-col gap-2.5 w-full">
            <div
                className={
                    "gap-4 flex items-center p-4 rounded-2xl md:gap-7 w-full bg-[#F4F4F4] border " +
                    (hasError ? "border-destructive" : "border-transparent")
                }
            >
                <div className="w-5 h-4 text-[#A0A0A0]">{icon}</div>
                <div className="flex flex-col flex-grow">
                    <label className="text-xs font-normal text-[#A0A0A0]">{label}</label>
                    <div className="flex items-center w-[100%]">
                        <input
                            aria-invalid={hasError}
                            type={isPassword ? (showPassword ? "text" : "password") : type}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            className="flex-grow bg-[#F4F4F4] outline-none text-[16px] text-black font-semibold placeholder-[#A0A0A0]"
                        />
                        {isPassword && (
                            <button
                                type="button"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                onClick={() => setShowPassword((s) => !s)}
                                className="ml-2 cursor-pointer"
                            >
                                {showPassword ? <IoEyeOff size={20}/> : <IoIosEye size={20}/>}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {hasError && (
                <p className="text-xs text-destructive font-medium ml-2">{error}</p>
            )}
        </div>
    );
};


export default Input;