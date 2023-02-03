const VerticalLoader = () => {
    return (
        <div className="border border-gray-300 bg-gray-50  shadow rounded-md ">
            <div className=" animate-pulse bg-gray-200 h-[200px] sm:h-[300px]   rounded-lg " />

            <div className=" px-3 pt-4 pb-2">
                <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-slate-200  animate-pulse mr-2 "></div>
                    <div className="w-2/3 h-8   bg-slate-200  animate-pulse  "></div>
                </div>

                <div className="w-full  h-8 mt-4   bg-slate-200  animate-pulse rounded-lg "></div>
                <div className="w-full mt-2 h-24   bg-slate-200  animate-pulse rounded-lg "></div>

                <div className="flex justify-between gap-10">
                    <div className="flex-1 h-4   bg-slate-200  animate-pulse mt-4 "></div>
                    <div className="flex-1  h-4   bg-slate-200  animate-pulse mt-4 "></div>
                </div>
            </div>
        </div>
    );
};

export default VerticalLoader;
