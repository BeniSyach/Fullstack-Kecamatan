import { PageProps } from "@/types";
import { Flowbite, Table, Badge, Button } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Wisata from "@/Pages/Publikasi/Wisata";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myWisata {}

interface Props {
    domain: {
        judul_website: string;
    };
    wisata: any;
}

const AdminWisata: React.FC<PageProps & Props> = ({ auth, domain, wisata }) => {
    return (
        <Flowbite>
            <Head title="List Wisata" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Wisata</h4>}>
                <Link href={route("createWisata")} as="button">
                    <Button className="my-3">Tambah Wisata</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Wisata</Table.HeadCell>
                        <Table.HeadCell>Wisata</Table.HeadCell>
                        <Table.HeadCell>Deskripsi</Table.HeadCell>
                    </Table.Head>

                    {wisata && wisata.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {wisata.data.map((ws, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell> {ws.judul_wisata} </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={ws.foto_wisata}
                                            alt="Gambar Berita"
                                            className="w-1/4"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {ws.deskripsi_wisata}{" "}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("editVideoKegiatan", {
                                                id: ws.idWisata,
                                            })}
                                            as="button"
                                            method="get"
                                        >
                                            <Badge
                                                icon={FaEdit}
                                                color="info"
                                                className="mx-3 my-3"
                                            >
                                                edit
                                            </Badge>
                                        </Link>
                                        <Link
                                            href={route("hapusVideoKegiatan", {
                                                id: ws.idWisata,
                                            })}
                                            as="button"
                                            method="delete"
                                        >
                                            <Badge
                                                icon={FaTrashAlt}
                                                color="failure"
                                                className="mx-3 my-3"
                                            >
                                                Hapus
                                            </Badge>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    ) : (
                        <p> Tidak Ada Wisata </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminWisata;
