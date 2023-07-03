import { Head, Link } from "@inertiajs/react";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myUser {
    idKepegawaian: number;
    nama_pegawai: string;
    gambar_pegawai: string;
    jabatan_pegawai: string;
    motivasi_pegawai: string;
    link_facebook: string;
    link_instagram: string;
    link_twitter: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getKepegawaian: myUser[];
}

const AdminKepegawaian: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getKepegawaian,
}) => {
    return (
        <Flowbite>
            <Head title="List Kepegawaian" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>List Pegawai</h4>}
            >
                <Link href={route("createPegawai")} as="button">
                    <Button className="my-3">Tambah Data Pegawai</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Pegawai</Table.HeadCell>
                        <Table.HeadCell>Gambar Pegawai</Table.HeadCell>
                        <Table.HeadCell>Jabatan Pegawai</Table.HeadCell>
                        <Table.HeadCell>Motivasi Pegawai</Table.HeadCell>
                        <Table.HeadCell>Link Facebook</Table.HeadCell>
                        <Table.HeadCell>Link Instagram</Table.HeadCell>
                        <Table.HeadCell>Link Twitter</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                            <span className="sr-only">Hapus</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getKepegawaian && getKepegawaian.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getKepegawaian.map(
                                (pegawai: myUser, k: number) => (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>{k + 1}</Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.nama_pegawai}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img
                                                src={pegawai.gambar_pegawai}
                                                alt=""
                                                className="w-1/5"
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.jabatan_pegawai}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.motivasi_pegawai}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.link_facebook}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.link_instagram}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.link_twitter}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route("editPegawai", {
                                                    id: pegawai.idKepegawaian,
                                                })}
                                                as="button"
                                                method="get"
                                            >
                                                <Badge
                                                    icon={FaEdit}
                                                    color="info"
                                                    className="mx-3"
                                                >
                                                    edit
                                                </Badge>
                                            </Link>
                                            <Link
                                                href={route("hapusPegawai", {
                                                    id: pegawai.idKepegawaian,
                                                })}
                                                as="button"
                                                method="delete"
                                            >
                                                <Badge
                                                    icon={FaTrashAlt}
                                                    color="failure"
                                                    className="mx-3"
                                                >
                                                    Hapus
                                                </Badge>
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            )}
                        </Table.Body>
                    ) : (
                        <p> tidak ada Pegawai </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminKepegawaian;
