import FooterLandingPage from "@/Components/FooterLandingPage";
import KategoriBerita from "@/Components/KategoriBerita";
import Letter from "@/Components/Letter";
import NavbarLandingPage from "@/Components/Navbar";
import ReadArticle from "@/Components/ReadArticle";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";

interface childPorps {
    judul_berita: string;
    slug_berita: string;
    gambar_berita: string;
    isi_berita: string;
    jenis_kategori_berita: string;
    name: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    wisata: {
        judul_wisata: string;
        slug_wisata: string;
        foto_wisata: string;
        deskripsi_wisata: string;
        konten_wisata: string;
    };
    detail_berita: any;
    agenda: any;
    kategori_berita: childPorps[];
}

const DetailWisata: React.FC<Props> = ({
    domain,
    wisata,
    detail_berita,
    agenda,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Detail Berita" />
            <NavbarLandingPage data={domain.judul_website} />
            <div className="flex flex-row bg-white dark:bg-gray-900">
                <div className=" w-8/12">
                    <main className="pt-3 pb-16 lg:pt-3 lg:pb-24 ">
                        <div className="flex justify-start px-4">
                            <article className="px-4 w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <Breadcrumb
                                        className=" my-5"
                                        aria-label="Default breadcrumb example"
                                    >
                                        <Breadcrumb.Item href="/">
                                            <p>Home</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <p>Publik</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href={route("wisata")}>
                                            <p>Wisata</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href={pathname}>
                                            {wisata.judul_wisata}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {wisata.judul_wisata}
                                    </h1>
                                    <figure>
                                        <img src={wisata.foto_wisata} alt="" />
                                    </figure>
                                </header>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: wisata.konten_wisata,
                                    }}
                                />
                            </article>
                        </div>
                    </main>
                </div>
                <SideBarAgendaDanBerita
                    dataAgenda={agenda}
                    databerita={detail_berita}
                />
            </div>
            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default DetailWisata;
