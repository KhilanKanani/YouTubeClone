import { Link } from "react-router-dom";
import { UseAuth } from "../ContextApi/AuthProvider"
import millify from 'millify';
import TopListItem from "../OtherComponent/TopListItem";
import ShowTime from "../OtherComponent/ShowTime";

const Home = ({ isOpen }) => {

    const { data, loading } = UseAuth();

    if (loading) {
        return <div className={`mt-15 ${isOpen ? "xl:w-[84%] w-[97%]" : "w-[97%]"} h-[92vh] overflow-auto flex flex-col gap-2`}>
            <div className="flex gap-2 ml-2 mr-2 py-2">
                <button className="bg-gray-200 h-6 w-10 hidden lg:inline  rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-33 hidden sm:inline rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-20 rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-32 hidden sm:inline rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 hidden sm:inline rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 hidden md:inline lg:inline rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-30 hidden md:inline rounded-full animate-pulse"></button>
                <button className="bg-gray-200 h-6 w-45 hidden md:inline rounded-full animate-pulse"></button>
            </div>

            <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2">
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-xl flex flex-col gap-2.5">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-33.5 w-full h-67 animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                            <p className=" w-full h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <span className="flex gap-1 animate-pulse">
                                    <p className="h-2.5 w-20 rounded-full bg-gray-200"> </p>
                                    <p className="h-2.5 w-2.5 mb-[-1px] rounded-full bg-gray-200"> </p>
                                </span >
                                <span className=" rounded-full bg-gray-200 w-40 h-2.5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div className={`mt-15 ${isOpen ? "xl:w-[84%] w-[97%]" : "w-[97%]"} h-[92vh] overflow-auto flex flex-col gap-2`}>
            <div>
                <TopListItem />
            </div>
            <div className='w-full h-full md:grid lg:grid-cols-3 md:grid-cols-2' >
                {
                    data?.length > 0 &&
                    data?.map((item, index) => (
                        <div key={index}>
                            <Link to={`/playVideo/${item?.video?.videoId}`}>
                                <div className="hover:bg-gray-200 p-2 rounded-xl flex flex-col gap-2 h-full">
                                    <div className="relative">
                                        <img src={item?.video?.thumbnails[0]?.url} className="rounded-xl h-67 w-full" />
                                        <div className="absolute right-2 bottom-2">
                                            {
                                                item?.video?.lengthSeconds &&
                                                <ShowTime time={item?.video?.lengthSeconds} />
                                            }
                                        </div>
                                    </div>

                                    <div className="flex item gap-3 w-full overflow-hidden">
                                        <img src={item?.video?.author.avatar[0]?.url} className="rounded-full h-10 w-10" />
                                        <div className="flex flex-col itm gap-1">
                                            <p className="text-md font-bold line-clamp-2 leading-5.5">{item?.video?.title}</p>
                                            <div>
                                                <span className="flex gap-1 items-center  text-sm text-gray-700 font-semibold">
                                                    {item?.video?.author?.title}
                                                    {item?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && <img src="verify.png" className="h-3.5 w-3.5 rounded-full" />}
                                                </span >
                                                <span className="flex items-center gap-1 text-sm text-gray-500 font-semibold">
                                                    {Number(item?.video?.stats?.views) ? `${millify(item?.video?.stats?.views)}` : "10K"} views
                                                    <span> - </span>
                                                    {item?.video?.publishedTimeText || '1 year ago'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
