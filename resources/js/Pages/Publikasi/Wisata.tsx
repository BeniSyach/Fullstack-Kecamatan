import ContentWisata from "@/Components/ContentWisata";
import FooterLandingPage from "@/Components/FooterLandingPage";
import NavbarLandingPage from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";

interface Props {
    domain: any;
    wisata: any;
}

const Wisata: React.FC<Props> = ({ domain, wisata }) => {
    return (
        <Flowbite>
            <Head title="Wisata" />
            <NavbarLandingPage data={domain} />
            <div className="flex flex-row flex-wrap justify-center items-center pt-11">
                <div>
                    <h1 className="text-4xl font-bold text-center">Wisata</h1>
                    <p className="text-center">
                        Berikut Ini Beberapa Wisata di {domain.judul_website}
                    </p>
                </div>
            </div>
            <ContentWisata data={wisata} />

            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default Wisata;
