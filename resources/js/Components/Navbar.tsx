import { Link, router } from "@inertiajs/react";
import { DarkThemeToggle, Navbar, Button, Dropdown } from "flowbite-react";

interface ChildProps {
    data: string;
}

const NavbarLandingPage: React.FC<ChildProps> = (props) => {
    return (
        <Navbar fluid>
            <Navbar.Brand href="/">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    {props.data}
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <Link href={route("login")}>
                    <Button>Login</Button>
                </Link>
                <Navbar.Toggle />
                <DarkThemeToggle className="mx-2" />
            </div>

            <Navbar.Collapse>
                <Link href={route("home")} as="div" className=" cursor-pointer">
                    <Navbar.Link>
                        <p>Home</p>
                    </Navbar.Link>
                </Link>

                <Dropdown inline label="Profil">
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
                    <Link href={route("berita")}>
                        <Dropdown.Item>Video Kegiatan</Dropdown.Item>
                    </Link>
                    <Link href={route("berita")}>
                        <Dropdown.Item>Foto Kegiatan</Dropdown.Item>
                    </Link>
                    <Link href={route("berita")}>
                        <Dropdown.Item>Wisata</Dropdown.Item>
                    </Link>
                    <Link href={route("berita")}>
                        <Dropdown.Item>Agenda</Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown inline label="Desa">
                    <Link href={route("berita")}>
                        <Dropdown.Item>berisikan banyak Desa</Dropdown.Item>
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
                        <p>Kontak</p>
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarLandingPage;
