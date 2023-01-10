const Hero = () => {
    return (
        <div>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4  mx-auto backdrop:blur-md">
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className="text-4xl md:text-3xl lg:text-6xl text-black font-extrabold">
                        Read Books <br /> Publish knowledge
                    </h1>
                    <p className="text-lg text-gray-500 my-2  ">
                        Discover stories, thinking, and expertise from writers
                        on any topic.{" "}
                    </p>

                    <form className=" w-[100%] md:w-[80%] flex rounded-full border transition-all shadow-sm  border-gray-400  focus-within:border-blue-500 items-center overflow-hidden relative">
                        <input
                            placeholder="Search for stories"
                            type="text"
                            className="outline-none border-none focus:border-none  px-3 w-full rounded-full  flex-1 h-full py-2 pl-6 "
                        />

                        <button className="absolute top-0 right-0 bottom-0 px-4">
                            <svg
                                className="text-gray-600 h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                xmlSpace="preserve"
                                width="512px"
                                height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
