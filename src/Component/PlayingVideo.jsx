import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import FetchData from '../FetchApi/RapidApi';
import ReactPlayer from "react-player";
import millify from "millify";
import ShowTime from '../OtherComponent/ShowTime';


const PlayingVideo = () => {

    const [video, setvideo] = useState();
    const [relatedVideo, setrelatedVideo] = useState();
    const [show, setshow] = useState(true);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);


    const FetchVideoDetails = async () => {
        await FetchData(`video/details/?id=${id}`)
            .then((response) => {
                setvideo(response);
            })
    }

    const FetchRelatedVideoDetails = async () => {
        await FetchData(`video/related-contents/?id=${id}`)
            .then((response) => {
                setrelatedVideo(response?.contents);
            })
    }

    useEffect(() => {
        setLoading(true);
        const FetchAll = async () => {
            await FetchVideoDetails();
            await FetchRelatedVideoDetails();
            setLoading(false);
        }
        FetchAll();
    }, [id])

    if (loading) {
        return <div className='mt-15 sm:px-5 px-2 py-5 flex lg:flex-row flex-col gap-4 justify-center w-[100%]'>
            <div className='lg:w-[68vw] flex flex-col gap-3 rounded-xl'>
                <div className='h-100% aspect-video w-100% bg-gray-200 rounded-xl animate-pulse'></div>

                <div className="flex flex-col gap-4">
                    <div className='flex flex-col gap-1'>
                        <p className="w-full h-4 rounded-full bg-gray-200 animate-pulse"></p>
                        <p className="w-[50%] h-4 rounded-full bg-gray-200 animate-pulse"></p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3 justify-center items-center'>
                            <img className="rounded-full h-10 w-10 bg-gray-200 p-5 animate-pulse" />
                            <div className='flex flex-col gap-1'>
                                <span className="sm:w-40 w-30 h-4 rounded-full bg-gray-200 animate-pulse"></span>
                                <span className="sm:w-30 w-20 h-4 rounded-full bg-gray-200 animate-pulse"></span>
                            </div>
                            <span className={`h-9 rounded-full sm:w-30 w-20 px-4 bg-gray-200 animate-pulse`} ></span>
                        </div>

                        <div className='lg:flex hidden gap-2 justify-center items-center'>
                            <span className={`rounded-full px-4 w-30 h-9 bg-gray-200 animate-pulse`} ></span>
                            <span className={`h-9 rounded-full w-30 px-4 bg-gray-200 animate-pulse`} ></span>
                        </div>
                    </div>
                </div>

                <div className='mt-5 bg-gray-200 h-40 w-full rounded-xl animate-pulse'></div>

                <p className='w-50 h-6 bg-gray-200 rounded-full animate-pulse'></p>
            </div>

            {/* RelatedVideos SetLoader */}
            <div className='lg:w-[32vw] lg:mt-0 mt-5 sm:grid sm:grid-cols-2 grid-cols-1 lg:flex lg:flex-col rounded-xl md:bg-gray-100 md:border-1 border-gray-200 overflow-auto'>
                <div className="md:p-2 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 sm:mt-0 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
                <div className="md:p-2 mt-3 md:mt-0 rounded-xl lg:flex gap-1">
                    <div>
                        <img className="rounded-2xl bg-gray-200 p-30 lg:p-10 w-full lg:w-50 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-3 px-1 mt-1 w-full">
                        <div className='flex flex-col mt-1 gap-1'>
                            <p className="sm:w-70 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                            <p className="sm:w-50 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1">
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
        <div className='mt-15 sm:px-5 px-2 py-5 flex lg:flex-row flex-col gap-4 justify-center w-[100%]'>
            {/* Main Video Contents */}
            <div className='lg:w-[68%] flex flex-col gap-3 rounded-xl'>
                <div className='aspect-video overflow-hidden'>
                    <ReactPlayer
                        className="rounded-xl overflow-hidden"
                        url={`https://www.youtube.com/watch?v=${id}`}
                        width="100%"
                        height="100%"
                        controls
                        playing
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-xl font-bold line-clamp-2 leading-5.5">{video?.title}</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-6'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={video?.author.avatar[0]?.url} className="rounded-full h-10 w-10" />
                                <div className='flex flex-col'>
                                    <span className="flex gap-1 items-center text-gray-900 text-md font-semibold">
                                        {video?.author?.title || "Kk"}
                                        {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && <img src="/public/verify.png" className="h-4 w-4 rounded-full" />}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-gray-500 font-semibold">
                                        {Number(video?.author?.stats?.subscribers) ? `${millify(video?.author?.stats?.subscribers)}` : "10K"} subscribers
                                    </span>
                                </div>
                            </div>
                            <button className='bg-black text-sm text-white px-5 h-9 font-semibold rounded-full'>Subscribe</button>
                        </div>

                        <div className='lg:flex hidden gap-2 justify-center items-center'>
                            <span className={`flex items-center justify-center gap-2 border-1 rounded-full px-4 h-9 border-gray-200 bg-gray-100`} >
                                <p><AiOutlineLike className='h-5 w-5' /></p>
                                <span className='font-semibold'>{Number(video?.stats?.likes) ? millify(video?.stats?.likes) : "10K"}</span>
                                <span className=' text-gray-400 border-1 h-6'> </span>
                                <p><AiOutlineDislike className='h-5 w-5' /></p>
                            </span>
                            <span className={`flex items-center border-1 h-9 rounded-full px-4 border-gray-200 bg-gray-100 font-semibold`} >
                                {Number(video?.stats?.views) ? `${millify(video?.stats?.views)}` : "10K"} views
                            </span>
                        </div>
                    </div>

                    <div className='bg-gray-100 py-3 px-3 border-1 flex flex-col gap-3 border-gray-200 rounded-xl'>
                        <div className="flex items-center gap-1 font-semibold">
                            {Number(video?.stats?.views) ? `${millify(video?.stats?.views)}` : "10K"} views
                            <span> - </span>
                            {video?.publishedTimeText || '1 year ago'}
                        </div>
                        <div className={`text-gray-800  ${show ? "line-clamp-2" : ""}`}>
                            {video?.description}
                            <p className='mt-3 flex flex-col'>{video?.keywords.map((item, index) => (<span key={index} className='ml-2 text-gray-800'>#{item}</span>))} </p>
                        </div>
                        <span className='mt-[-10px] font-bold cursor-pointer' onClick={() => setshow(prev => !prev)}>{show ? "...more" : "...show less"}</span>
                    </div>

                    <div>
                        <p className='text-black font-bold text-xl hidden lg:block'> {Number(video?.stats?.comments) ? `${millify(video?.stats?.comments)}` : "10K"} Comments</p>
                    </div>
                </div>
            </div>

            {/* Related Videos */}
            <div className='lg:w-[32%] hidden lg:flex flex-col rounded-xl bg-gray-100 border-1 border-gray-200 overflow-auto '>
                {
                    relatedVideo?.map((item, index) => (
                        <div className='cursor-pointer' key={index}>
                            <Link to={`/playVideo/${item?.video?.videoId}`}>
                                <div className="hover:bg-gray-200 mx-2 p-2 rounded-xl flex gap-2 h-full">
                                    <div className="relative">
                                        <img src={item?.video?.thumbnails[0]?.url} className="rounded-xl h-25 w-60" />
                                        <div className="absolute right-1 top-17.5">
                                            {
                                                item?.video?.lengthSeconds &&
                                                <ShowTime time={item?.video?.lengthSeconds} />
                                            }
                                        </div>
                                    </div>

                                    <div className="flex gap-3 sm:w-100">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-bold line-clamp-2">{item?.video?.title}</p>
                                            <div>
                                                <span className="flex gap-1 items-center text-xs text-gray-700 font-semibold">
                                                    {item?.video?.author?.title}
                                                    {item?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && <img src="verify.png" className="h-3.5 w-3.5 mb-[-2.5px] rounded-full" />}
                                                </span >
                                                <span className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
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

            {/* Mobile Size */}
            <div className='lg:hidden w-[100%] h-[100%] grid sm:grid-cols-2 grid-cols-1 justify-center gap-2 overflow-auto sm:bg-gray-100 sm:border-1 border-gray-200 rounded-xl' >
                {
                    relatedVideo?.map((item, index) => (
                        <div key={index} className="hover:bg-gray-200 sm:p-2 mb-2 sm:mb-0 rounded-xl flex flex-col gap-2">
                            <Link to={`/playVideo/${item?.video?.videoId}`}>
                                <div className="relative">
                                    <img src={item?.video?.thumbnails[0]?.url} className="rounded-xl h-50 sm:h-60 w-full" />
                                    <div className="absolute right-2 bottom-2">
                                        {
                                            item?.video?.lengthSeconds &&
                                            <ShowTime time={item?.video?.lengthSeconds} />
                                        }
                                    </div>
                                </div>

                                <div className="mt-2 flex gap-3 w-full">
                                    <img src={item?.video?.author.avatar[0]?.url} className="rounded-full h-10 w-10" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-md font-bold line-clamp-2 leading-5.5">{item?.video?.title}</p>
                                        <div>
                                            <span className="flex gap-1 items-center text-sm text-gray-700 font-semibold">
                                                {item?.video?.author?.title}
                                                {item?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && <img src="verify.png" className="h-3.5 w-3.5 mb-[-2.5px] rounded-full" />}
                                            </span >
                                            <span className="flex items-center gap-1 text-sm text-gray-500 font-semibold">
                                                {Number(item?.video?.stats?.views) ? `${millify(item?.video?.stats?.views)}` : "10K"} views
                                                <span> - </span>
                                                {item?.video?.publishedTimeText || '1 year ago'}
                                            </span>
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

export default PlayingVideo
