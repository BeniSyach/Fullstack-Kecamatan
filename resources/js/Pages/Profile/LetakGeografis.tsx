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
    letak_geografis: {
        judul_letak_geografis: string;
        Deskripsi_letak_geografis: string;
        isi_letak_geografis: string;
        created_at: string;
    };
    agenda: any;
    berita: any;
}

const LetakGeografis: React.FC<Props> = ({
    domain,
    letak_geografis,
    agenda,
    berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title={letak_geografis.judul_letak_geografis} />
            <Navbar data={domain} />
            <Jumbroton
                judul={letak_geografis.judul_letak_geografis}
                Deskripsi={letak_geografis.Deskripsi_letak_geografis}
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
                                            {
                                                letak_geografis.judul_letak_geografis
                                            }
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {letak_geografis.judul_letak_geografis}
                                    </h1>
                                </header>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: letak_geografis.isi_letak_geografis,
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
export default LetakGeografis;
