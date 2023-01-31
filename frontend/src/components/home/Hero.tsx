const Hero: any = () => {
    return (
        <div>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4  mx-auto backdrop:blur-md">
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className="text-4xl md:text-3xl lg:text-6xl text-black font-extrabold">
                        Read Books <br /> Publish knowledge
                    </h1>
                    <p className="text-lg text-gray-500 my-3  ">
                        Discover stories, thinking, and expertise from writers
                        on any topic.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
