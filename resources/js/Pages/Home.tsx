import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import { Flowbite, Carousel, Badge } from "flowbite-react";
import FooterLandingPage from "../Components/FooterLandingPage";
import {
    FaDatabase,
    FaEarlybirds,
    FaLandmark,
    FaTachometerAlt,
} from "react-icons/fa";
import Kerjasama from "@/Components/KerjaSama";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

interface MyInterface {
    gambar_slider: string;
    judul_berita: string;
    slug_berita: string;
    gambar_berita: string;
    isi_berita: string;
    jenis_kategori_berita: string;
    name: string;
    created_at: string;
}

interface myPhoto {
    judul_foto_kegiatan: string;
    foto: string;
    created_at: string;
}

interface Props {
    domain: any;
    slider: MyInterface[];
    get_berita: {
        data: MyInterface[];
    };
    kata_sambutan: {
        nama_kepala_camat: string;
        gambar_camat: string;
        judul_kataSambutan: string;
        isi_kataSambutan: string;
        created_at: string;
    };
    foto: {
        data: myPhoto[];
    };
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
};

const Home: React.FC<Props> = ({
    domain,
    slider,
    kata_sambutan,
    get_berita,
    foto,
}) => {
    const isi_kata_sambutan = truncateText(kata_sambutan.isi_kataSambutan, 400);

    return (
        <Flowbite>
            <Head title={domain.judul_website} />
            <Navbar data={domain} />
            {/* carousel */}
            <div className="relative w-full z-0">
                {slider && slider.length > 0 ? (
                    <Carousel slideInterval={5000} className=" h-56  md:h-96">
                        {slider.map((slider: MyInterface, k: number) => (
                            <img
                                key={k}
                                alt="..."
                                src={`${route("home")}/${slider.gambar_slider}`}
                                className="img-responsive"
                            />
                        ))}
                    </Carousel>
                ) : (
                    <Carousel slideInterval={5000} className=" h-56  md:h-96">
                        <img
                            alt="..."
                            src="/assets/image/carousel/carousel-1.svg"
                        />
                        <img
                            alt="..."
                            src="/assets/image/carousel/carousel-1.svg"
                        />
                        <img
                            alt="..."
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        />
                    </Carousel>
                )}
            </div>

            {/* sekarpur Sirih */}
            <div className="flex flex-row flex-wrap justify-center items-center m-5">
                <Link
                    href={route("sejarah")}
                    as="div"
                    className="cursor-pointer"
                >
                    <div className="flex flex-row flex-wrap justify-center items-center m-2 text-center  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <FaLandmark size={50} color="#FF0000" />

                        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Data Profil Kecamatan {domain.judul_website}
                        </h5>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">
                            Lihat Data Profil Kecamatan {domain.judul_website}
                        </p>
                    </div>
                </Link>
                <Link href="" as="div" className="cursor-pointer">
                    <div className="flex flex-row flex-wrap justify-center items-center m-2 text-center  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <FaDatabase size={50} color="#FF0000" />

                        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Data Statistik Kecamatan {domain.judul_website}
                        </h5>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">
                            Lihat Data Statistik Kecamatan{" "}
                            {domain.judul_website}
                        </p>
                    </div>
                </Link>
                <Link
                    href={route("wisata")}
                    as="div"
                    className="cursor-pointer"
                >
                    <div className="flex flex-row flex-wrap justify-center items-center m-2 text-center  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <FaEarlybirds size={50} color="#FF0000" />

                        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Info Wisata di Kecamatan {domain.judul_website}
                        </h5>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">
                            Lihat Info Wisata Kecamatan {domain.judul_website}
                        </p>
                    </div>
                </Link>
            </div>
            {/* Kata Sambutan */}
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <h1 className=" text-4xl font-bold">Kata Sambutan</h1>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img
                        className="w-1/2 mx-auto dark:hidden"
                        src={kata_sambutan.gambar_camat}
                        alt="Gambar Camat"
                    />
                    <img
                        className="w-1/2 hidden mx-auto dark:block"
                        src={`${route("home")}/${kata_sambutan.gambar_camat}`}
                        alt="Gambar Camat"
                    />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            {kata_sambutan.judul_kataSambutan}
                        </h2>

                        <div
                            className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html: isi_kata_sambutan,
                            }}
                        />

                        <Link
                            href={route("kata_sambutan")}
                            className="inline-flex items-center bg-blue-600 dark:text-white text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                        >
                            Baca Selanjutnya
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Berita */}
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <div>
                    <h1 className="text-4xl font-bold text-center">Berita</h1>
                    <p className="text-center">
                        Temukan Berita Utama anda di Kecamatan{" "}
                        {domain.judul_website}
                    </p>
                </div>
            </div>
            {get_berita.data && get_berita.data.length > 0 ? (
                <div className="flex flex-row flex-wrap justify-center items-center my-5">
                    {get_berita.data.map((berita: MyInterface, k: number) => (
                        <div
                            key={k}
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
                        >
                            <Link
                                href={route("detailBerita", {
                                    slug: berita.slug_berita,
                                })}
                            >
                                <img
                                    className="p-8 rounded-t-lg"
                                    src={`${route("home")}/${
                                        berita.gambar_berita
                                    }`}
                                    alt="product image"
                                />
                            </Link>
                            <div className="px-5 pb-5">
                                <Link
                                    href={route("detailBerita", {
                                        slug: berita.slug_berita,
                                    })}
                                >
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {berita.judul_berita}
                                    </h5>
                                </Link>

                                <p className="text-sm">
                                    {" "}
                                    {format(
                                        parseISO(berita.created_at),
                                        "EEEE, dd MMMM yyyy",
                                        { locale: id }
                                    )}{" "}
                                </p>

                                <div
                                    className="flex items-center mt-2.5 mb-5"
                                    dangerouslySetInnerHTML={{
                                        __html: truncateText(
                                            berita.isi_berita,
                                            100
                                        ),
                                    }}
                                />

                                <div className="flex items-center justify-between">
                                    <Badge color="warning">
                                        {" "}
                                        {berita.jenis_kategori_berita}{" "}
                                    </Badge>

                                    <Link
                                        href={route("detailBerita", {
                                            slug: berita.slug_berita,
                                        })}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Baca Selengkapnya
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-4xl font-bold py-10">
                    Tidak Ada Berita
                </p>
            )}

            {/* Data Statistik */}
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto items-center max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-8 lg:mb-16">
                        <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Data Statistik Kecamatan {domain.judul_website}
                        </h2>
                        <p className="text-center text-gray-500 sm:text-xl dark:text-gray-400">
                            Temukan Data Wilayah, Penduduk, Sosial, atau lebih
                            banyak di Halaman Statistik Kecamatan{" "}
                            {domain.judul_website}
                        </p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Wilayah Administratif
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data wilayah administratif merupakan data warga
                                berdasarkan wilayah
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Pendidikan
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data Pendidikan merupakan data warga berdasarkan
                                jenjang pendidikan yang ditempuh
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Jenis Kelamin
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data jenis kelamin merupakan data warga desa
                                berdasarkan jenis kelamin
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Pekerjaan
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data pekerjaan merupakan data pekerjaan dari
                                setiap warga desa
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Agama
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data Agama merupakan data Agama yang di percaya
                                / dianut oleh warga desa
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Menurut Umur
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Data Umur merupakan data warga desa berdasarkan
                                rentang umur yang sudah di tentukan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Galeri */}
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <div>
                    <h1 className="text-4xl font-bold text-center">
                        Galeri Kegiatan
                    </h1>
                    <p className="text-center">
                        Cari Tau Beragam Event Kekinian di{" "}
                        {domain.judul_website}
                    </p>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button
                        type="button"
                        className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                    >
                        Foto
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        Video
                    </button>
                </div>
                {foto && foto.data.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
                        {foto.data.map((data_foto: myPhoto, k: number) => (
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
                    <p className="text-4xl font-bold text-center mb-5">
                        Tidak Ada Foto
                    </p>
                )}
            </div>
            <Letter />
            {/* <Kerjasama /> */}
            <FooterLandingPage data={domain} />
        </Flowbite>
    );
};

export default Home;
