import FooterLandingPage from "@/Components/FooterLandingPage";
import NavbarLandingPage from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { format, parseISO } from "date-fns";
import { Flowbite } from "flowbite-react";
import { id } from "date-fns/locale";

interface childProps {
    judul_agenda: string;
    slug_agenda: string;
    tanggal_agenda: string;
    isi_agenda: string;
}

interface Props {
    domain: any;
    agenda: {
        data: childProps[];
    };
}

const Agenda: React.FC<Props> = ({ domain, agenda }) => {
    return (
        <Flowbite>
            <Head title="Agenda" />
            <NavbarLandingPage data={domain} />
            <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Agenda
                        </h2>
                    </div>
                    {agenda && agenda.data.length > 0 ? (
                        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                            {agenda.data.map((data: childProps, k: number) => (
                                <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            {format(
                                                parseISO(data.tanggal_agenda),
                                                "EEEE, dd MMMM yyyy",
                                                { locale: id }
                                            )}
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a
                                                href="#"
                                                className="hover:underline"
                                            >
                                                {data.judul_agenda}
                                            </a>
                                            <p className="font-normal">
                                                {data.isi_agenda}
                                            </p>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Tidak Ada Agenda</p>
                    )}
                </div>
            </section>
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default Agenda;
