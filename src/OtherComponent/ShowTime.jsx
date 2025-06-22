import moment from 'moment'

const ShowTime = ({ time }) => {

    const videoTime =
        time >= 3600
            ? moment().startOf("day").second(time).format("HH:mm:ss")
            : moment().startOf("day").second(time).format("mm:ss");

    return (
        <div>
            <span className='bg-black text-white text-xs font-bold p-1 rounded-md'>{videoTime}</span>
        </div>
    )
}

export default ShowTime
