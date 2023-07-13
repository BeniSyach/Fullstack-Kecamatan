import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { DarkThemeToggle, Navbar, Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";

const baseURL =
    "https://desajatirejo.deliserdangkab.go.id/API/GetKodeDesaByKodeKecamatan";

const domain = window.location.hostname;
const baseUrlPotensi = `http://${domain}:8000/api/potensi`;
const baseUrlPelayanan = `http://${domain}:8000/api/pelayanan`;
const baseUrlUnduhan = `http://${domain}:8000/api/unduhan`;

interface ChildProps {
    data: {
        judul_website: string;
        kode_kecamatan: string;
    };
}

const NavbarLandingPage: React.FC<ChildProps> = (props) => {
    const [Desa, setDesa] = useState<any[]>([]);
    const [Potensi, setPotensi] = useState<any[]>([]);
    const [Pelayanan, setPelayanan] = useState<any[]>([]);
    const [Unduhan, setUnduhan] = useState<any[]>([]);

    useEffect(() => {
        axios
            .post(baseURL, {
                // kodeKecamatan: props.data.kode_kecamatan,
                kodeKecamatan: "120701",
            })
            .then((response) => {
                setDesa(response.data);
            });

        axios
            .get(`${baseUrlPotensi}/${props.data.kode_kecamatan}`)
            .then((response) => {
                setPotensi(response.data);
            });
        axios
            .get(`${baseUrlPelayanan}/${props.data.kode_kecamatan}`)
            .then((response) => {
                setPelayanan(response.data);
            });
        axios
            .get(`${baseUrlUnduhan}/${props.data.kode_kecamatan}`)
            .then((response) => {
                setUnduhan(response.data);
            });
    }, []);

    console.log(Unduhan);
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
                    {Desa && Desa.length > 0 ? (
                        <>
                            {Desa.map((desa, k) => (
                                <a key={k} href={desa.url} target="_blank">
                                    <Dropdown.Item>
                                        {desa.namaDesa}
                                    </Dropdown.Item>
                                </a>
                            ))}
                        </>
                    ) : (
                        <Dropdown.Item>Tidak Ada Data</Dropdown.Item>
                    )}
                </Dropdown>
                <Dropdown inline label="Potensi">
                    {Potensi && Potensi.length > 0 ? (
                        <>
                            {Potensi.map((Potensi, k) => (
                                <Link
                                    key={k}
                                    href={route(`detailPotensi`, {
                                        slug: Potensi.slug_potensi,
                                    })}
                                >
                                    <Dropdown.Item>
                                        {Potensi.judul_potensi}
                                    </Dropdown.Item>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <Dropdown.Item>Tidak Ada Data</Dropdown.Item>
                    )}
                </Dropdown>
                <Dropdown inline label="Pelayanan">
                    {Pelayanan && Pelayanan.length > 0 ? (
                        <>
                            {Pelayanan.map((Pelayanan, k) => (
                                <Link
                                    key={k}
                                    href={route(`detailPelayanan`, {
                                        slug: Pelayanan.slug_pelayanan,
                                    })}
                                >
                                    <Dropdown.Item>
                                        {Pelayanan.judul_pelayanan}
                                    </Dropdown.Item>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <Dropdown.Item>Tidak Ada Data</Dropdown.Item>
                    )}
                </Dropdown>
                <Dropdown inline label="Statistik">
                    <Link href={route("berita")}>
                        <Dropdown.Item>
                            berisikan Statistik/jumlah desa pada kecamatan
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Unduhan">
                    {Unduhan && Unduhan.length > 0 ? (
                        <>
                            {Unduhan.map((Unduhan, k) => (
                                <Link
                                    key={k}
                                    href={route(`detailUnduhan`, {
                                        slug: Unduhan.slug_unduhan,
                                    })}
                                >
                                    <Dropdown.Item>
                                        {Unduhan.judul_unduhan}
                                    </Dropdown.Item>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <Dropdown.Item>Tidak Ada Data</Dropdown.Item>
                    )}
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
