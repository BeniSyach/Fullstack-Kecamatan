import FooterLandingPage from "@/Components/FooterLandingPage";
import NavbarLandingPage from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";

interface childProps {
    judul_foto_kegiatan: string;
    foto: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    foto: {
        data: childProps[];
    };
}

const FotoKegiatan: React.FC<Props> = ({ domain, foto }) => {
    return (
        <Flowbite>
            <Head title="Foto Kegiatan" />
            <NavbarLandingPage data={domain.judul_website} />
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Foto Kegiatan
                    </h1>
                    <p className="text-center">
                        Lihat Foto Kegiatan di {domain.judul_website}
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                {foto && foto.data.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
                        {foto.data.map((data_foto: childProps, k: number) => (
                            <div key={k}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src={data_foto.foto}
                                    alt="Foto Wisata"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Tidak Ada Foto</p>
                )}
            </div>
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default FotoKegiatan;
