import { Link } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

interface childProps {
    judul_berita: string;
    slug_berita: string;
    gambar_berita: string;
    isi_berita: string;
    jenis_kategori_berita: string;
    name: string;
    created_at: string;
}

interface myAgenda {
    judul_agenda: string;
    slug_agenda: string;
    tanggal_agenda: string;
    isi_agenda: string;
}

interface Props {
    dataAgenda: { data: myAgenda[] };
    databerita: {
        data: childProps[];
    };
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
};

const SideBarAgendaDanBerita: React.FC<Props> = ({
    dataAgenda,
    databerita,
}) => {
    return (
        <div className=" m-10">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl divide-y divide-gray-100 font-bold tracking-tight text-gray-900 dark:text-white">
                    Agenda Kegiatan
                </h5>
                {dataAgenda && dataAgenda.data.length > 0 ? (
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {dataAgenda.data.map((agenda: myAgenda, k: number) => (
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
                                    {agenda.judul_agenda}
                                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                        Latest
                                    </span> */}
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {format(
                                        parseISO(agenda.tanggal_agenda),
                                        "EEEE, dd MMMM yyyy",
                                        { locale: id }
                                    )}
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    {truncateText(agenda.isi_agenda, 100)}
                                </p>
                                {/* <a
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
   </a> */}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>Tidak Ada Agenda</p>
                )}
            </div>
            <div className="mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Berita Terbaru
                </h5>
                {databerita && databerita.data.length > 0 ? (
                    <div className="berita-box my-5">
                        {databerita.data.map((data: childProps, k: number) => (
                            <Link
                                key={k}
                                href={route("detailBerita", {
                                    slug: data.slug_berita,
                                })}
                                className="my-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[150px] pl-5"
                                    src={data.gambar_berita}
                                    alt="Gambar Berita"
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className=" text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        {truncateText(data.judul_berita, 16)}
                                    </h5>
                                    <p className="text-xs mb-1 text-gray-900 dark:text-white">
                                        {" "}
                                        {format(
                                            parseISO(data.created_at),
                                            "EEEE, dd MMMM yyyy",
                                            { locale: id }
                                        )}{" "}
                                    </p>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-white">
                                        {truncateText(data.isi_berita, 60)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl font-bold">
                        Tidak Ada Berita
                    </p>
                )}
            </div>
        </div>
    );
};
export default SideBarAgendaDanBerita;
