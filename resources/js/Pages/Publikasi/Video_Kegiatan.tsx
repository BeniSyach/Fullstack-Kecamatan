import FooterLandingPage from "@/Components/FooterLandingPage";
import NavbarLandingPage from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";

interface childProps {
    judul_video_kegiatan: string;
    video: string;
}

interface Props {
    domain: any;
    video: {
        data: childProps[];
    };
}

const VideoKegiatan: React.FC<Props> = ({ domain, video }) => {
    return (
        <Flowbite>
            <Head title="Video Kegiatan" />
            <NavbarLandingPage data={domain} />
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Video Kegiatan
                    </h1>
                    <p className="text-center">
                        Lihat Video Kegiatan di {domain.judul_website}
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                {video && video.data.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
                        {video.data.map((data: childProps, k: number) => (
                            <div key={k}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.video,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Tidak Ada Video</p>
                )}
            </div>
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default VideoKegiatan;
