const HorizontalLoader = () => {
    return (
        <div className="shadow rounded-md border border-gray-300">
            <div className="flex flex-col  md:flex-row justify-start md:justify-center bg-gray-100  ">
                <div className="h-[300px]   md:w-[35%] lg:w-[40%] md:h-auto bg-no-repeat bg-cover bg-center rounded-md animate-pulse bg-gray-200"></div>

                <div className="px-4 py-2 md:px-8  bg-gray-50 flex-1 flex flex-col items-start animate-pulse">
                    <div className="flex flex-1 w-full items-center">
                        <div className="w-14 h-14 rounded-full bg-slate-200  animate-pulse mr-2 "></div>
                        <div className="w-2/3 h-6   bg-slate-200  animate-pulse  " />
                    </div>
                    <div className="w-full h-16  my-3  bg-slate-200  animate-pulse  " />

                    <div className="mt-auto w-full">
                        <div className="flex justify-between gap-10">
                            <div className="flex-1 h-4   bg-slate-200  animate-pulse mt-4 "></div>
                            <div className="flex-1  h-4   bg-slate-200  animate-pulse mt-4 "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalLoader;
