import { useNavigate } from "react-router-dom"
import { UseAuth } from "../ContextApi/AuthProvider";

const SideBar = ({ isOpen }) => {

    const navigate = useNavigate();
    const { setvalue } = UseAuth();



    return (
        <div className={`bg-white h-[95 vh] z-1 sm:ml-3 mt-14 overflow-auto pr-3 fixed left-0 top-0 bottom-0  ${isOpen ? "translate-x-0" : "-translate-x-[100%]"}`}>
            <div className="flex items-center gap-4 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => { navigate("/"), setvalue("New") }}>
                <img src="Home.png" className="h-7 w-8 " />
                <p>Home</p>
            </div>
            <div className="flex items-center gap-4 px-2 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("shorts")}>
                <img src="Shorts.png" className="h-8 w-8.5 " />
                <p>Shorts</p>
            </div>
            <div className="flex items-center gap-5 px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("latest guruharidarshan")}>
                <img src="subScription.webp" className="h-6.5 w-6.5" />
                <p>Subscriptions</p>
            </div>
            <div className="border-b-1 my-2 border-gray-300"></div>
            <p className="px-3 font-bold text-lg py-2">You <span> &gt; </span></p>
            <div className="flex items-center gap-6  px-2.5 py-2 hover:bg-gray-200 rounded-lg">
                <img src="history.png" className="h-5.5 w-6 " />
                <p>History</p>
            </div>
            <div className="flex items-center gap-5 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => FetchPlaylistDetails()}>
                <img src="playlist.webp" className="h-7 w-7 " />
                <p>Playlist</p>
            </div>
            <div className="flex items-center gap-6 px-3 py-2 hover:bg-gray-200 rounded-lg">
                <img src="wathclater.webp" className="h-5 w-5.5 " />
                <p>Watch Later</p>
            </div>
            <div className="flex items-center gap-3 px-1 py-2 hover:bg-gray-200 rounded-lg">
                <img src="likevideo.webp" className="h-6 w-11 " />
                <p>Like Videos</p>
            </div>
            <div className="border-b-1 my-2 border-gray-300"></div>
            <p className="px-3 font-bold text-lg py-2">Explore</p>
            <div className="flex items-center gap-5 px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("trending")}>
                <img src="trending.png" className="h-6.5 w-7 " />
                <p>Trending</p>
            </div>
            <div className="flex items-center gap-3 px-1 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("shopping")}>
                <img src="shopping.webp" className="h-7 w-11 " />
                <p>Shopping</p>
            </div>
            <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("music")}>
                <img src="music.png" className="h-6 w-7 " />
                <p>Music</p>
            </div>
            <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("movie")}>
                <img src="movie.png" className="h-6 w-7" />
                <p>Moive</p>
            </div>
            <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("live")}>
                <img src="live.png" className="h-6 w-7" />
                <p>Live</p>
            </div>
            <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("gaming")}>
                <img src="gaming.webp" className="h-7 w-7" />
                <p>Gaming</p>
            </div>
            <div className="flex items-center gap-5 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("news")}>
                <img src="news.png" className="h-7 w-8" />
                <p>News</p>
            </div>
            <div className="flex items-center gap-5 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("sports")}>
                <img src="sport.png" className="h-7 w-8 " />
                <p>Sport</p>
            </div>
            <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("courses")}>
                <img src="cource.png" className="h-7 w-10 " />
                <p>Courses</p>
            </div>
            <div className="flex items-center gap-5 px-2 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("fashion and beauty")}>
                <img src="fashoin.png" className="h-7 w-8 " />
                <p>Fashion & Beauty</p>
            </div>
            <div className="flex items-center gap-6.5 px-2.5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => setvalue("podcasts")}>
                <img src="podcast.png" className="h-6 w-6 " />
                <p>Podcasts</p>
            </div>
            <div className="border-b-1 my-2 border-gray-300"></div>
            <p className="px-3 font-bold text-lg py-2">More From YouTube</p>
            <a href="https://www.youtube.com/premium">
                <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg">
                    <img src="Youtube.png" className="h-6 w-6 " />
                    <p>YouTube Premium</p>
                </div>
            </a>
            <a href="https://music.youtube.com/" target="_blank">
                <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg">
                    <img src="youtubemusic.png" className="h-6 w-6 " />
                    <p>YouTube Music</p>
                </div>
            </a>
            <a href="https://www.youtubekids.com/?source=youtube_web" target="_blank">
                <div className="flex items-center gap-6 px-2.5 py-2 hover:bg-gray-200 rounded-lg">
                    <img src="youtubekids.png" className="h-6 w-6 " />
                    <p>YouTube Kids</p>
                </div>
            </a>
            <div className="border-b-1 my-2 border-gray-300"></div>
            <div className="flex flex-col gap-2 px-2.5">
                <a className="text-gray-500 text-[14px] font-bold" href="https://about.youtube/">About</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://blog.youtube/">Press</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/howyoutubeworks/copyright/">Copyright</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/t/contact_us/">Contact Us</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/creators/">Creator</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://business.google.com/in/ad-solutions/youtube-ads/">Advertise</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://developers.google.com/youtube">Developers</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/t/terms">Term Of Service</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://policies.google.com/privacy?hl=en">Privacy</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/howyoutubeworks/our-policies/">Policy & Safety</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">How YouTube Works</a>
                <a className="text-gray-500 text-[14px] font-bold" href="https://www.youtube.com/new">Test New Features</a>
            </div>
            <div className="border-b-1 my-3 border-gray-300"></div>
            <p className="px-2.5 mb-3 text-sm font-bold"> &copy;2025 - Present Kk's Pvt Ltd...</p>
        </div>
    )
}

export default SideBar
