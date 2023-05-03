import video from '~/assets/videos/video_home.mp4';

function VideoHome() {
    return (
        <video
            src={video}
            autoPlay
            muted
            loop
            style={{ width: '100%', marginTop: '80px' }}
        ></video>
    );
}

export default VideoHome;
