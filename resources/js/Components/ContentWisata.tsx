import { Link } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

interface childProps {
    judul_wisata: string;
    slug_wisata: string;
    foto_wisata: string;
    deskripsi_wisata: string;
    konten_wisata: string;
    created_at: string;
}

interface Props {
    data: {
        data: childProps[];
    };
}

const truncateText = (text: string, maxlength: number) => {
    if (text.length <= maxlength) {
        return text;
    }
    return text.substring(0, maxlength) + "....";
};

const ContentWisata: React.FC<Props> = ({ data }) => {
    return (
        <section className="py-4 lg:py-10 bg-gray-50 dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-screen-xl ">
                {data && data.data.length > 0 ? (
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {data.data.map((data: childProps, k: number) => (
                            <Link
                                key={k}
                                as="div"
                                href={route("detailBerita", {
                                    slug: data.slug_wisata,
                                })}
                                method="get"
                                className="hover: cursor-pointer"
                            >
                                <article className="max-w-xs">
                                    <img
                                        src={data.foto_wisata}
                                        className="mb-5 rounded-lg"
                                        alt="Image 1"
                                    />

                                    <h2 className="mb-1 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <a href="#"> {data.judul_wisata} </a>
                                    </h2>

                                    <p className="mb-1 text-sm inline-flex items-center font-thin text-primary-600 dark:text-primary-500 ">
                                        {format(
                                            parseISO(data.created_at),
                                            "EEEE, dd MMMM yyyy",
                                            { locale: id }
                                        )}
                                    </p>
                                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                                        {truncateText(data.konten_wisata, 100)}
                                    </p>
                                </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p> Tidak ada Wisata</p>
                )}
            </div>
        </section>
    );
};
export default ContentWisata;
