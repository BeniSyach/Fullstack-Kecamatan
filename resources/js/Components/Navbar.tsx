import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { DarkThemeToggle, Navbar, Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";

const baseURL =
    "https://desajatirejo.deliserdangkab.go.id/API/GetKodeDesaByKodeKecamatan";

interface ChildProps {
    data: {
        judul_website: string;
        kode_kecamatan: string;
    };
}

const NavbarLandingPage: React.FC<ChildProps> = (props) => {
    const [Desa, setDesa] = useState<any[]>([]);

    useEffect(() => {
        axios
            .post(baseURL, {
                kodeKecamatan: props.data.kode_kecamatan,
            })
            .then((response) => {
                setDesa(response.data);
            });
    }, []);

    return (
        <Navbar fluid>
            <Navbar.Brand href="/">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    {props.data.judul_website}
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <Link href={route("login")}>
                    <Button>Login</Button>
                </Link>
                <Navbar.Toggle />
                <DarkThemeToggle className="mx-2" />
            </div>

            <Navbar.Collapse className="dark:text-white">
                <Link href={route("home")} as="div" className=" cursor-pointer">
                    <Navbar.Link>
                        <p className="dark:text-white">Home</p>
                    </Navbar.Link>
                </Link>

                <Dropdown inline label="Profil" className="dark:text-white">
                    <Link href={route("sejarah")}>
                        <Dropdown.Item>Sejarah</Dropdown.Item>
                    </Link>
                    <Link href={route("letak_geografis")}>
                        <Dropdown.Item>Letak Geografis</Dropdown.Item>
                    </Link>
                    <Link href={route("kependududkan")}>
                        <Dropdown.Item>Kependudukan</Dropdown.Item>
                    </Link>
                    <Link href={route("adat_dan_budaya")}>
                        <Dropdown.Item>Adat & Budaya</Dropdown.Item>
                    </Link>
                    <Link href={route("visi_dan_misi")}>
                        <Dropdown.Item>Visi & Misi</Dropdown.Item>
                    </Link>
                    <Link href={route("prestasi")}>
                        <Dropdown.Item>Prestasi</Dropdown.Item>
                    </Link>
                    <Link href={route("struktur_organisasi")}>
                        <Dropdown.Item>Struktur Organisasi</Dropdown.Item>
                    </Link>
                    <Link href={route("tupoksi")}>
                        <Dropdown.Item>Tupoksi</Dropdown.Item>
                    </Link>
                    <Link href={route("kepegawaian")}>
                        <Dropdown.Item>Kepegawaian</Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Publikasi">
                    <Link href={route("berita")}>
                        <Dropdown.Item>Berita</Dropdown.Item>
                    </Link>
                    <Link href={route("videoKegiatan")}>
                        <Dropdown.Item>Video Kegiatan</Dropdown.Item>
                    </Link>
                    <Link href={route("fotoKegiatan")}>
                        <Dropdown.Item>Foto Kegiatan</Dropdown.Item>
                    </Link>
                    <Link href={route("wisata")}>
                        <Dropdown.Item>Wisata</Dropdown.Item>
                    </Link>
                    <Link href={route("agenda")}>
                        <Dropdown.Item>Agenda</Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Desa">
                    <Link href={route("berita")}>
                        {Desa && Desa.length > 0 ? (
                            <>
                                {Desa.map((desa, k) => (
                                    <Dropdown.Item>
                                        {desa.namaDesa}
                                    </Dropdown.Item>
                                ))}
                            </>
                        ) : (
                            <Dropdown.Item>Tidak Ada Data</Dropdown.Item>
                        )}
                    </Link>
                </Dropdown>
                <Dropdown inline label="Potensi">
                    <Link href={route("berita")}>
                        <Dropdown.Item>
                            berisikan potensi kecamatan
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Pelayanan">
                    <Link href={route("berita")}>
                        <Dropdown.Item>
                            berisikan pelayanan kecamatan
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Statistik">
                    <Link href={route("berita")}>
                        <Dropdown.Item>
                            berisikan Statistik/jumlah desa pada kecamatan
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Unduhan">
                    <Link href={route("berita")}>
                        <Dropdown.Item>
                            berisikan data yang bisa diunduh pada kecamatan
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Link
                    href={route("kontak_kami")}
                    as="div"
                    className=" cursor-pointer"
                >
                    <Navbar.Link>
                        <p className="dark:text-white">Kontak</p>
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarLandingPage;
