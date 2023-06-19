import FooterLandingPage from "@/Components/FooterLandingPage";
import KategoriBerita from "@/Components/KategoriBerita";
import Letter from "@/Components/Letter";
import NavbarLandingPage from "@/Components/Navbar";
import ReadArticle from "@/Components/ReadArticle";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";

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
    berita: {
        judul_berita: string;
        slug_berita: string;
        gambar_berita: string;
        isi_berita: string;
        jenis_kategori_berita: string;
        name: string;
        created_at: string;
    };
    detail_berita: childPorps[];
    kategori_berita: childPorps[];
}

const DetailBerita: React.FC<Props> = ({
    domain,
    berita,
    kategori_berita,
    detail_berita,
}) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Detail Berita" />
            <NavbarLandingPage data={domain.judul_website} />
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
                <div className=" m-10">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl divide-y divide-gray-100 font-bold tracking-tight text-gray-900 dark:text-white">
                            Agenda Kegiatan
                        </h5>

                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Application UI v2.0.0{" "}
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                        Latest
                                    </span>
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on January 13th, 2022
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get access to over 20+ pages including a
                                    dashboard layout, charts, kanban board,
                                    calendar, and pre-order E-commerce &
                                    Marketing pages.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    Download ZIP
                                </a>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Figma v1.3.0
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 7th, 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first
                                    designed in Figma and we keep a parity
                                    between the two versions even as we update
                                    the project.
                                </p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Library v1.2.2
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 2nd, 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components
                                    and interactive elements built on top of
                                    Tailwind CSS.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div className="mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Berita Terbaru
                        </h5>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ReadArticle data={detail_berita} />
            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default DetailBerita;
