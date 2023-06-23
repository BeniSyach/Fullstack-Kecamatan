import Jumbroton from "@/Components/Jumbroton";
import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";

interface Props {
    domain: {
        judul_website: string;
    };
    getKataSambutan: {
        nama_kepala_camat: string;
        gambar_camat: string;
        judul_kataSambutan: string;
        isi_kataSambutan: string;
    };
    agenda: any;
    berita: any;
}

const KataSambutan: React.FC<Props> = ({
    domain,
    getKataSambutan,
    agenda,
    berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Kata Sambutan" />
            <Navbar data={domain.judul_website} />
            <Jumbroton judul="Kata Sambutan" Deskripsi="" />

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
                                        <Breadcrumb.Item href={pathname}>
                                            Kata Sambutan
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {getKataSambutan.judul_kataSambutan}
                                    </h1>
                                </header>
                                <img
                                    src={getKataSambutan.gambar_camat}
                                    alt="Foto Camat"
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: getKataSambutan.isi_kataSambutan,
                                    }}
                                />
                            </article>
                        </div>
                    </main>
                </div>
                <SideBarAgendaDanBerita
                    dataAgenda={agenda}
                    databerita={berita}
                />
            </div>

            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};

export default KataSambutan;
