import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ReadArticle from "@/Components/ReadArticle";
import { Head } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";

export default function Berita() {
    return (
        <Flowbite>
            <Head title="Berita Kecamatan" />
            <Navbar />

            <ReadArticle />
            <Footer />
        </Flowbite>
    );
}
