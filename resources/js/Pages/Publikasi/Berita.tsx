import Footer from "@/Components/FooterLandingPage";
import KategoriBerita from "@/Components/KategoriBerita";
import Navbar from "@/Components/Navbar";
import ReadArticle from "@/Components/ReadArticle";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";
import React from "react";

interface childPorps {
    judul_berita: string;
    slug_berita: string;
    gambar_berita: string;
    isi_berita: string;
    jenis_kategori_berita: string;
    name: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    berita: any;
    kategori_berita: childPorps[];
}

const Berita: React.FC<Props> = ({ domain, berita, kategori_berita }) => {
    return (
        <Flowbite>
            <Head title="Berita Kecamatan" />
            <Navbar data={domain.judul_website} />
            <KategoriBerita data={kategori_berita} />
            <ReadArticle data={berita} />
            <Footer data={domain.judul_website} />
        </Flowbite>
    );
};
export default Berita;
