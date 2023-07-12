import Jumbroton from "@/Components/Jumbroton";
import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";

interface Props {
    domain: any;
    kependudukan: {
        judul_kependudukan: string;
        deskripsi_kependudukan: string;
        isi_kependudukan: string;
        created_at: string;
    };
    agenda: any;
    berita: any;
}

const Kependudukan: React.FC<Props> = ({
    domain,
    kependudukan,
    agenda,
    berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title={kependudukan.judul_kependudukan} />
            <Navbar data={domain} />
            <Jumbroton
                judul={kependudukan.judul_kependudukan}
                Deskripsi={kependudukan.deskripsi_kependudukan}
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
                                            {kependudukan.judul_kependudukan}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {kependudukan.judul_kependudukan}
                                    </h1>
                                </header>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: kependudukan.isi_kependudukan,
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

export default Kependudukan;
