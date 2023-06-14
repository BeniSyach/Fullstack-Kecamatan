import Jumbroton from "@/Components/Jumbroton";
import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";

interface MyInterface {
    nama_pegawai: string;
    gambar_pegawai: string;
    jabatan_pegawai: string;
    motivasi_pegawai: string;
    link_facebook: string;
    link_instagram: string;
    link_twitter: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    pegawai: MyInterface[];
    // pegawai: {
    //     nama_pegawai: string;
    //     gambar_pegawai: string;
    //     jabatan_pegawai: string;
    //     motivasi_pegawai: string;
    //     link_facebook: string;
    //     link_instagram: string;
    //     link_twitter: string;
    //     length: number;
    // };
    judul: string;
    Deskripsi: string;
}

const Kepegawaian: React.FC<Props> = ({
    domain,
    pegawai,
    judul,
    Deskripsi,
}) => {
    const pathname = window.location.pathname;
    console.log(pegawai);
    return (
        <Flowbite>
            <Head title={judul} />
            <Navbar data={domain.judul_website} />
            <Jumbroton judul={judul} Deskripsi={Deskripsi} />

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    {pegawai && pegawai.length > 0 ? (
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            {pegawai.map((pegawai: MyInterface, k: number) => (
                                <div
                                    key={k}
                                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <a href="#">
                                        <img
                                            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                                            src={pegawai.gambar_pegawai}
                                            alt="Gambar Pegawai"
                                        />
                                    </a>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            <a href="#">
                                                {pegawai.nama_pegawai}
                                            </a>
                                        </h3>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            {pegawai.jabatan_pegawai}
                                        </span>
                                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                            {pegawai.motivasi_pegawai}
                                        </p>
                                        <ul className="flex space-x-4 sm:mt-0">
                                            <li>
                                                <a
                                                    href={pegawai.link_facebook}
                                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={pegawai.link_twitter}
                                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={
                                                        pegawai.link_instagram
                                                    }
                                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="bg-base-300 m-5 p-5 text-4xl font-bold ">
                            Tidak Pegawai
                        </p>
                    )}
                </div>
            </section>

            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default Kepegawaian;
