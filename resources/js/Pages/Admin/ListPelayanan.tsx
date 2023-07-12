import { PageProps } from "@/types";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect, FormEventHandler } from "react";
import Paginator from "@/Components/Paginator";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myPelayanan {
    idPelayanan: number;
    kode_kecamatan: number;
    judul_pelayanan: string;
    slug_pelayanan: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllPelayanan: {
        data: myPelayanan[];
        current_page: number;
        total: number;
        links: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const ListPelayanan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getAllPelayanan,
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
            <Head title="List Pelayanan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>List Pelayanan</h4>}
            >
                <Link href={route("createPelayanan")} as="button">
                    <Button className="my-3">Tambah List Pelayanan</Button>
                </Link>
                <Table hoverable className="mt-5">
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Pelayanan</Table.HeadCell>
                        <Table.HeadCell>Aksi</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllPelayanan.data && getAllPelayanan.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllPelayanan.data.map(
                                (Pelayanan: myPelayanan, k: number) => (
                                    <Table.Row
                                        key={k}
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell>{k + 1}</Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {Pelayanan.judul_pelayanan}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route("editPelayanan", {
                                                    id: Pelayanan.idPelayanan,
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
                                                    "editDetailPeyanan",
                                                    {
                                                        id: Pelayanan.idPelayanan,
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
                                                href={route("hapusPelayanan", {
                                                    id: Pelayanan.idPelayanan,
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
                        <p> tidak ada Pelayanan </p>
                    )}
                </Table>
                <div className="flex items-center justify-center text-center mt-10">
                    <Paginator meta={getAllPelayanan} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListPelayanan;
