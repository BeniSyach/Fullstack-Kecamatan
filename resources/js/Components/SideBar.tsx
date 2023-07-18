import { Sidebar } from "flowbite-react";
import {
    FaTachometerAlt,
    FaHome,
    FaImages,
    FaSignOutAlt,
    FaPeriscope,
    FaPeopleArrows,
    FaAddressBook,
    FaRegEdit,
    FaNewspaper,
    FaRegNewspaper,
    FaCloudDownloadAlt,
    FaDownload,
    FaTree,
    FaServicestack,
    FaSafari,
    FaInfoCircle,
    FaIcons,
    FaImage,
    FaHiking,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";

interface Props {
    data: any;
}

const SideBar: React.FC<Props> = (data) => {
    return (
        <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            id="drawer-navigation"
        >
            <form action="#" method="GET" className="md:hidden mb-2">
                <label htmlFor="sidebar-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="sidebar-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                    />
                </div>
            </form>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link
                        href={route("dashboard")}
                        as="div"
                        className=" cursor-pointer"
                    >
                        <Sidebar.Item icon={FaTachometerAlt}>
                            <p>Dashboard</p>
                        </Sidebar.Item>
                    </Link>
                    {data.data.role_user === "1" ? (
                        <>
                            <Link
                                href={route("listKecamatan")}
                                as="div"
                                className=" cursor-pointer"
                            >
                                <Sidebar.Item icon={FaSafari}>
                                    <p>Kecamatan & Desa</p>
                                </Sidebar.Item>
                            </Link>
                            <Link
                                href={route("listUser")}
                                as="div"
                                className=" cursor-pointer"
                            >
                                <Sidebar.Item icon={FaAddressBook}>
                                    <p>List User</p>
                                </Sidebar.Item>
                            </Link>
                        </>
                    ) : (
                        ""
                    )}

                    <Sidebar.Collapse label="Halaman Depan" icon={FaRegEdit}>
                        <Link
                            href={route("listSlider")}
                            as="div"
                            className=" cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                Gambar Slider
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminKataSambutan")}
                            as="div"
                            className=" cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                Kata Sambutan
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("data_kecamatan")}
                            as="div"
                            className=" cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                data Kecamatan
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>

                    <Sidebar.Collapse label="Profil" icon={FaHome}>
                        <Link
                            href={route("AdminSejarah")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages} href="#">
                                Sejarah
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("Adminletakgeografis")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaPeriscope}>
                                Letak Geografis
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminKependudukan")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaPeopleArrows}>
                                Kependudukan
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdatDanBudaya")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaHiking}>
                                Adat & Budaya
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("adminVisiDanMisi")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaInfoCircle}>
                                Visi & Misi
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminPrestasi")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                Prestasi
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminStrukturOrganisasi")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                Struktur Organisasi
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("adminTupoksi")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>Tupoksi</Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminKepegawaian")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                Kepegawaian
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label="Publikasi" icon={FaNewspaper}>
                        <Link
                            href={route("AdminBerita")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaRegNewspaper}>
                                Berita
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminVideoKegiatan")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaIcons}>
                                Video Kegiatan
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminFotoKegiatan")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImage}>
                                Foto Kegiatan
                            </Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminWisata")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>Wisata</Sidebar.Item>
                        </Link>
                        <Link
                            href={route("AdminAgenda")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages} h>
                                Agenda
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label="Potensi" icon={FaTree}>
                        <Link
                            href={route("AdminPotensi")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages} href="#">
                                List Potensi
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label="Pelayanan" icon={FaServicestack}>
                        <Link
                            href={route("AdminPelayanan")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaImages}>
                                List Pelayanan
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label="Statistik" icon={FaHome}>
                        <Sidebar.Item icon={FaImages} href="#">
                            List Statistik
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label="Unduhan" icon={FaCloudDownloadAlt}>
                        <Link
                            href={route("AdminUnduhan")}
                            as="div"
                            className="cursor-pointer"
                        >
                            <Sidebar.Item icon={FaDownload} href="#">
                                List Unduhan
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="div"
                        className=" cursor-pointer"
                    >
                        <Sidebar.Item icon={FaSignOutAlt}>
                            <p>Logout</p>
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default SideBar;
