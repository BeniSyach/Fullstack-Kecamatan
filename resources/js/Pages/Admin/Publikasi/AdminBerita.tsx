import { PageProps } from "@/types";
import { Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

interface myBerita {
    idBerita: number;
    judul_berita: string;
    gambar_berita: string;
    jenis_kategori_berita: string;
    name: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getBerita: myBerita[];
}

const ListKecamatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getBerita,
}) => {
    return (
        <Flowbite>
            <Head title="List Berita" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Berita</h4>}>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Berita</Table.HeadCell>
                        <Table.HeadCell>Gambar Berita</Table.HeadCell>
                        <Table.HeadCell>Kategori Berita</Table.HeadCell>
                        <Table.HeadCell>Penulis Berita</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getBerita && getBerita.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getBerita.map((berita: myBerita, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {berita.judul_berita}{" "}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={berita.gambar_berita}
                                            alt="Gambar Berita"
                                            className="w-1/4"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {berita.jenis_kategori_berita}{" "}
                                    </Table.Cell>
                                    <Table.Cell> {berita.name} </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href={route("dashboard", {
                                                id: berita.idBerita,
                                            })}
                                        >
                                            <p>Edit</p>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    ) : (
                        <p> tidak ada Kecamatan </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListKecamatan;
