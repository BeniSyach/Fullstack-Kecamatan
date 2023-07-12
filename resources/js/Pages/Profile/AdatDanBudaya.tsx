import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import Letter from "../../Components/Letter";
import Jumbroton from "@/Components/Jumbroton";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";

interface Props {
    domain: any;
    AdatDanBudaya: {
        judul_adatDanBudaya: string;
        deskripsi_adatDanBudaya: string;
        isi_adatDanBudaya: string;
        created_at: string;
    };
    agenda: any;
    berita: any;
}

const AdatDanBudaya: React.FC<Props> = ({
    domain,
    AdatDanBudaya,
    agenda,
    berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title={AdatDanBudaya.judul_adatDanBudaya} />
            <Navbar data={domain} />
            <Jumbroton
                judul={AdatDanBudaya.judul_adatDanBudaya}
                Deskripsi={AdatDanBudaya.deskripsi_adatDanBudaya}
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
                                            {AdatDanBudaya.judul_adatDanBudaya}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {AdatDanBudaya.judul_adatDanBudaya}
                                    </h1>
                                </header>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: AdatDanBudaya.isi_adatDanBudaya,
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
export default AdatDanBudaya;
