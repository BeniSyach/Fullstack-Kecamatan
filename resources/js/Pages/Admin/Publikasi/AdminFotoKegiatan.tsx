import { PageProps } from "@/types";
import { Button, Flowbite, Table, Badge } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface childProps {
    idFoto: number;
    judul_foto_kegiatan: string;
    foto: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    foto: {
        data: childProps[];
    };
}

const AdminFotoKegiatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    foto,
}) => {
    return (
        <Flowbite>
            <Head title="List Foto" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Foto</h4>}>
                <Link href={route("createFotoAdminFotoKegiatan")} as="button">
                    <Button className="my-3">Tambah Foto</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Foto</Table.HeadCell>
                        <Table.HeadCell>Foto</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {foto && foto.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {foto.data.map((ft: childProps, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {ft.judul_foto_kegiatan}{" "}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={ft.foto}
                                            alt="Gambar Berita"
                                            className="w-1/4"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route(
                                                "editFotoAdminFotoKegiatan",
                                                {
                                                    id: ft.idFoto,
                                                }
                                            )}
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
                                            href={route(
                                                "hapusFotoAdminFotoKegiatan",
                                                {
                                                    id: ft.idFoto,
                                                }
                                            )}
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
                        <p> tidak ada Foto Kegiatan </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminFotoKegiatan;
