import { Head, Link } from "@inertiajs/react";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Paginator from "@/Components/Paginator";

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
    getKepegawaian: {
        data: myUser[];
        current_page: number;
        total: number;
        links: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const AdminKepegawaian: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getKepegawaian,
    flash,
}) => {
    useEffect(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "dark",
            customClass: {
                popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
        if (flash && flash.message) {
            Toast.fire({
                icon: "success",
                title: flash.message,
            });
        }
        // else if (flash && flash.error) {
        //     Toast.fire({
        //         icon: "error",
        //         title: "Data Gagal Diubah",
        //     });
        // }
    }, [flash]);
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

                    {getKepegawaian && getKepegawaian.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getKepegawaian.data.map(
                                (pegawai: myUser, k: number) => (
                                    <Table.Row
                                        key={k}
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell>{k + 1}</Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {pegawai.nama_pegawai}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img
                                                src={`${route("home")}/${
                                                    pegawai.gambar_pegawai
                                                }`}
                                                alt=""
                                                className="w-1/3"
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
                <div className="flex items-center justify-center text-center mt-10">
                    <Paginator meta={getKepegawaian} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminKepegawaian;
