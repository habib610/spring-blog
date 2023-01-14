import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "../../components/global/Input";
import Textarea from "../../components/global/Textarea";
import images from "../../constants/images";
import { LOGIN } from "../../constants/routes";

type FormData = {
    name: string;
    email: string;
    about: string;
    password: string;
    confirmPassword: string;
};
const Registration = () => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        about: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ): void => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };
    const handleAboutElement: React.ChangeEventHandler<HTMLTextAreaElement> = (
        event
    ): void => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
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
                            Create an Account
                        </h1>
                        <p className="text-gray-600 text-sm md:text-lg mb-4">
                            To post, publish and read. Lets complete signup.
                        </p>
                    </div>

                    <div>
                        <Input
                            onChange={handleChange}
                            message="Some UserNameError "
                            label="Name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                        />
                        <Input
                            onChange={handleChange}
                            message="Some UserNameError "
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                        />
                        <Textarea
                            onChange={handleAboutElement}
                            message="Some UserNameError "
                            label="About"
                            name="about"
                            placeholder="Enter your bio"
                            value={formData.about}
                        />
                        <Input
                            onChange={handleChange}
                            message="Some PasswordError "
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                        />
                        <Input
                            onChange={handleChange}
                            message="Some PasswordError "
                            label="Confirm Password"
                            name="confirmPassword"
                            placeholder="Enter your password"
                            value={formData.password}
                        />
                        <div className="flex justify-end">
                            <button className="mt-1 mb-1 text-primary-500 cursor-pointer hover:underline text-right ">
                                Forgot Password
                            </button>
                        </div>

                        <button className=" my-4 w-full bg-gray-600 hover:bg-black text-white py-2 px-4 font-bold rounded-md ">
                            Sign Up
                        </button>

                        <div className="flex items-center justify-center">
                            <p className="text-sm text-gray-600 mr-2">{`Already Have Account?`}</p>{" "}
                            <button
                                onClick={() => router.push(LOGIN)}
                                className="text-primary-500 cursor-pointer font-semibold hover:underline transition"
                            >
                                Sign In
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

export default Registration;
