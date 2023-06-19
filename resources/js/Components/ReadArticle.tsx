import { Link } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import React from "react";

interface childProps {
    judul_berita: string;
    slug_berita: string;
    gambar_berita: string;
    isi_berita: string;
    jenis_kategori_berita: string;
    name: string;
    created_at: string;
}

interface Props {
    data_berita: {
        data: childProps[];
    };
}

const truncateText = (text: string, maxlength: number) => {
    if (text.length <= maxlength) {
        return text;
    }
    return text.substring(0, maxlength) + "....";
};

const ReadArticle: React.FC<Props> = ({ data_berita }) => {
    return (
        <section className="py-4 lg:py-10 bg-gray-50 dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-screen-xl ">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                    Berita Terbaru
                </h2>

                {data_berita && data_berita.data.length > 0 ? (
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {data_berita.data.map((data: childProps, k: number) => (
                            <Link
                                key={k}
                                as="div"
                                href={route("detailBerita", {
                                    slug: data.slug_berita,
                                })}
                                method="get"
                                className="hover: cursor-pointer"
                            >
                                <article className="max-w-xs">
                                    <img
                                        src={data.gambar_berita}
                                        className="mb-5 rounded-lg"
                                        alt="Image 1"
                                    />

                                    <h2 className="mb-1 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#"> {data.judul_berita} </a>
                                    </h2>
                                    <p className="mb-1 text-sm text-left   text-primary-600 dark:text-primary-500 hover:no-underline">
                                        {data.name}
                                    </p>
                                    <p className="mb-1 text-sm inline-flex items-center font-thin text-primary-600 dark:text-primary-500 ">
                                        {format(
                                            parseISO(data.created_at),
                                            "dd MMMM yyyy",
                                            { locale: id }
                                        )}
                                    </p>
                                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                                        {truncateText(data.isi_berita, 100)}
                                    </p>
                                </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p> Tidak ada Berita</p>
                )}
            </div>
        </section>
    );
};
export default ReadArticle;
