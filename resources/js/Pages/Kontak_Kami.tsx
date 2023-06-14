import { Flowbite } from "flowbite-react";
import React from "react";
import { Head } from "@inertiajs/react";
import NavbarLandingPage from "@/Components/Navbar";
import FooterLandingPage from "@/Components/FooterLandingPage";

interface Props {
    domain: {
        judul_website: string;
    };
}

const KontakKami: React.FC<Props> = ({ domain }) => {
    return (
        <Flowbite>
            <Head title={domain.judul_website} />
            <NavbarLandingPage data={domain.judul_website} />
            <h1>Kontak Kami</h1>
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default KontakKami;
