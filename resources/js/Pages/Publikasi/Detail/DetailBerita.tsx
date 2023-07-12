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
    domain: any;
    berita: {
        judul_berita: string;
        slug_berita: string;
        gambar_berita: string;
        isi_berita: string;
        jenis_kategori_berita: string;
        name: string;
        created_at: string;
    };
    detail_berita: any;
    agenda: any;
    kategori_berita: childPorps[];
}

const DetailBerita: React.FC<Props> = ({
    domain,
    berita,
    kategori_berita,
    detail_berita,
    agenda,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Detail Berita" />
            <NavbarLandingPage data={domain} />
            <KategoriBerita data={kategori_berita} />
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
                                        <Breadcrumb.Item href={route("berita")}>
                                            <p>berita</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href={pathname}>
                                            {berita.judul_berita}
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
                                                    {berita.name}
                                                </a>

                                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                                    <time title="February 8th, 2022">
                                                        {berita.created_at}
                                                    </time>
                                                </p>
                                            </div>
                                        </div>
                                    </address>
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        {berita.judul_berita}
                                    </h1>
                                    <figure>
                                        <img
                                            src={berita.gambar_berita}
                                            alt=""
                                        />
                                    </figure>
                                </header>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: berita.isi_berita,
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
export default DetailBerita;
