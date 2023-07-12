import { PageProps } from "@/types";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect, FormEventHandler } from "react";
import Paginator from "@/Components/Paginator";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myUnduhan {
    idUnduhan: number;
    kode_kecamatan: number;
    judul_unduhan: string;
    slug_unduhan: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllUnduhan: {
        data: myUnduhan[];
        current_page: number;
        total: number;
        links: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const ListUnduhan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getAllUnduhan,
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
            <Head title="List Unduhan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>List Unduhan</h4>}
            >
                <Link href={route("createUnduhan")} as="button">
                    <Button className="my-3">Tambah List Unduhan</Button>
                </Link>
                <Table hoverable className="mt-5">
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Unduhan</Table.HeadCell>
                        <Table.HeadCell>Aksi</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllUnduhan.data && getAllUnduhan.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllUnduhan.data.map(
                                (unduhan: myUnduhan, k: number) => (
                                    <Table.Row
                                        key={k}
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell>{k + 1}</Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {unduhan.judul_unduhan}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route("editUnduhan", {
                                                    id: unduhan.idUnduhan,
                                                })}
                                                as="button"
                                                method="get"
                                            >
                                                <Badge
                                                    icon={FaEdit}
                                                    color="info"
                                                    className="mx-3"
                                                >
                                                    edit List
                                                </Badge>
                                            </Link>
                                            <Link
                                                href={route(
                                                    "editDetailUnduhan",
                                                    {
                                                        id: unduhan.idUnduhan,
                                                    }
                                                )}
                                                as="button"
                                                method="get"
                                            >
                                                <Badge
                                                    icon={FaEdit}
                                                    color="warning"
                                                    className="mx-3"
                                                >
                                                    edit Detail List
                                                </Badge>
                                            </Link>
                                            <Link
                                                href={route("hapusUnduhan", {
                                                    id: unduhan.idUnduhan,
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
                        <p> tidak ada Kecamatan </p>
                    )}
                </Table>
                <div className="flex items-center justify-center text-center mt-10">
                    <Paginator meta={getAllUnduhan} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListUnduhan;
