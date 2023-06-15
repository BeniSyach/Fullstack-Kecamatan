import Footer from "@/Components/FooterLandingPage";
import KategoriBerita from "@/Components/KategoriBerita";
import Navbar from "@/Components/Navbar";
import ReadArticle from "@/Components/ReadArticle";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";
import React from "react";

interface Props {
    domain: {
        judul_website: string;
    };
}

const Berita: React.FC<Props> = ({ domain }) => {
    return (
        <Flowbite>
            <Head title="Berita Kecamatan" />
            <Navbar data={domain.judul_website} />
            <KategoriBerita />
            <ReadArticle />
            <Footer data={domain.judul_website} />
        </Flowbite>
    );
};
export default Berita;
