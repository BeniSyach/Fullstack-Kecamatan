import { Head, Link } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import NavbarLandingPage from "@/Components/Navbar";
import SideBarAgendaDanBerita from "@/Components/SideBarAgendaDanBerita";
import Letter from "@/Components/Letter";
import FooterLandingPage from "@/Components/FooterLandingPage";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

interface Props {
    domain: any;
    unduhan: {
        dokumen: string;
    };
    detail_berita: any;
    agenda: any;
}

const truncateText = (text: string, maxlength: number) => {
    if (text.length <= maxlength) {
        return text;
    }
    return text.substring(0, maxlength) + "....";
};

const ContentUnduhan: React.FC<Props> = ({
    domain,
    unduhan,
    detail_berita,
    agenda,
}) => {
    const docs = [
        { uri: `${route("home")}/${unduhan.dokumen}` }, // Local File
    ];
    return (
        <Flowbite>
            <Head title="Detail Berita" />
            <NavbarLandingPage data={domain} />
            <div className="flex flex-row bg-white dark:bg-gray-900">
                <div className=" w-8/12">
                    <main className="pt-3 pb-16 lg:pt-3 lg:pb-24 ">
                        <div className="flex justify-start px-4">
                            <article className="px-4 w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <Breadcrumb
                                        className=" my-5"
                                        aria-label="Default breadcrumb example"
                                    >
                                        <Breadcrumb.Item href="/">
                                            <p>Home</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <p>Unduhan</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">
                                            <p>Detail Potensi</p>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </header>

                                <DocViewer
                                    documents={docs}
                                    pluginRenderers={DocViewerRenderers}
                                />
                            </article>
                        </div>
                    </main>
                </div>
                <SideBarAgendaDanBerita
                    dataAgenda={agenda}
                    databerita={detail_berita}
                />
            </div>
            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default ContentUnduhan;
