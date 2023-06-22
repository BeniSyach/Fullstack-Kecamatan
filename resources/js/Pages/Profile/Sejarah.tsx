import Jumbroton from "@/Components/Jumbroton";
import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Button, Card, Flowbite, Timeline } from "flowbite-react";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";
import Agenda from "../Publikasi/Agenda";
import { id } from "date-fns/locale";
import { format, parseISO } from "date-fns";

interface Props {
    domain: {
        judul_website: string;
    };
    sejarah: {
        judul_sejarah: string;
        Deskripsi_sejarah: string;
        isi_sejarah: string;
        penulis_sejarah: string;
        jabatan_penulis_sejarah: string;
        created_at: string;
    };
    agenda: any;
    berita: any;
}

const Sejarah: React.FC<Props> = ({ domain, sejarah, agenda, berita }) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Navbar data={domain.judul_website} />
            <Head title={sejarah.judul_sejarah} />

            <Jumbroton
                judul={sejarah.judul_sejarah}
                Deskripsi={sejarah.Deskripsi_sejarah}
            />

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
                                            {sejarah.judul_sejarah}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                    <address className="flex items-center mb-6 not-italic">
                                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-4 w-16 h-16 rounded-full"
                                                src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                                alt="Jese Leos"
                                            />
                                            <div>
                                                <a
                                                    href="#"
                                                    rel="author"
                                                    className="text-xl font-bold text-gray-900 dark:text-white"
                                                >
                                                    {sejarah.penulis_sejarah}
                                                </a>
                                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                                    {
                                                        sejarah.jabatan_penulis_sejarah
                                                    }
                                                </p>
                                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                                    <time title="February 8th, 2022">
                                                        {format(
                                                            parseISO(
                                                                sejarah.created_at
                                                            ),
                                                            "EEEE, dd MMMM yyyy",
                                                            { locale: id }
                                                        )}
                                                    </time>
                                                </p>
                                            </div>
                                        </div>
                                    </address>
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {sejarah.judul_sejarah}
                                    </h1>
                                </header>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sejarah.isi_sejarah,
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

export default Sejarah;
