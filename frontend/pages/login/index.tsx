import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "../../components/global/Input";
import images from "../../constants/images";
import { REGISTRATION } from "../../constants/routes";

type FormData = {
    username: string;
    password: string;
};

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ): void => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="bg-slate-100 flex items-center justify-center py-8">
                <div className="  w-10/12  sm:w-8/12 md:w-7/12 lg:w-10/12 xl:w-6/12 ">
                    <div className=" flex mb-8 justify-center lg:hidden">
                        <Image
                            height={300}
                            width={300}
                            alt="blog_image"
                            className=" w-[150px] xs:w-[180px] sm:w-[200px] lg:w-[300px] object-cover"
                            src={images.logoBlack}
                        />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold  text-gary-800">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 text-sm md:text-lg mb-4">
                            Welcome back! Please enter Your details
                        </p>
                    </div>

                    <div>
                        <Input
                            onChange={handleChange}
                            message="Some UserNameError "
                            label="Email"
                            placeholder="Enter your email"
                            value={formData.username}
                        />
                        <Input
                            onChange={handleChange}
                            message="Some PasswordError "
                            label="Password"
                            placeholder="Enter your password"
                            value={formData.password}
                        />
                        <div className="flex justify-end">
                            <button className="mt-1 mb-1 text-primary-500 cursor-pointer hover:underline text-right ">
                                Forget Password
                            </button>
                        </div>

                        <button className=" my-4 w-full bg-gray-600 hover:bg-black text-white py-2 px-4 font-bold rounded-md ">
                            Sign In
                        </button>

                        <div className="flex items-center justify-center">
                            <p className="text-sm text-gray-600 mr-2">{`Don't Have Account?`}</p>{" "}
                            <button
                                onClick={() => router.push(REGISTRATION)}
                                className="text-primary-500 cursor-pointer font-semibold hover:underline transition"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 hidden lg:flex items-center justify-center">
                <Image
                    height={300}
                    width={300}
                    alt="blog_image"
                    className=" w-[150px] xs:w-[180px] sm:w-[200px] lg:w-[300px] object-cover "
                    src={images.logo}
                />
            </div>
        </div>
    );
};

export default Login;
