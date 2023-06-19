import FooterLandingPage from "@/Components/FooterLandingPage";
import NavbarLandingPage from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";

interface Props {
    domain: {
        judul_website: string;
    };
}

const FotoKegiatan: React.FC<Props> = ({ domain }) => {
    return (
        <Flowbite>
            <Head title="Foto Kegiatan" />
            <NavbarLandingPage data={domain.judul_website} />
            <h1>Foto Kegiatan</h1>
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default FotoKegiatan;
