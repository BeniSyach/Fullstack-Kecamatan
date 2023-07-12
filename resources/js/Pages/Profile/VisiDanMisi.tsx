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
    VisiDanMisi: {
        judul_VisiDanMisi: string;
        deskripsi_VisiDanMisi: string;
        isi_Visi: string;
        isi_Misi: string;
        created_at: string;
    };
    agenda: any;
    berita: any;
}

const VisiDanMisi: React.FC<Props> = ({
    domain,
    VisiDanMisi,
    agenda,
    berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Visi Dan Misi" />
            <Navbar data={domain} />
            <Jumbroton
                judul={VisiDanMisi.judul_VisiDanMisi}
                Deskripsi={VisiDanMisi.deskripsi_VisiDanMisi}
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
                                            {VisiDanMisi.judul_VisiDanMisi}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>

                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {VisiDanMisi.judul_VisiDanMisi}
                                    </h1>
                                </header>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: VisiDanMisi.isi_Visi,
                                    }}
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: VisiDanMisi.isi_Misi,
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
export default VisiDanMisi;
