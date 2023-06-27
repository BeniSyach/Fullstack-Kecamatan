import { PageProps } from "@/types";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect, FormEventHandler } from "react";
import Paginator from "@/Components/Paginator";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myKecamatan {
    idDomain: number;
    domain_kecamatan: string;
    kode_kecamatan: number;
    judul_website: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllKecamatan: {
        data: myKecamatan[];
        current_page: number;
        total: number;
        links: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const ListKecamatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getAllKecamatan,
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
            <Head title="Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Data Kecamatan</h4>}
            >
                <Link href={route("createKecamatan")} as="button">
                    <Button className="my-3">Tambah Data Kecamatan</Button>
                </Link>
                <Table hoverable className="mt-5">
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Domain Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Kode Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Aksi</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllKecamatan.data && getAllKecamatan.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllKecamatan.data.map(
                                (kecamatan: myKecamatan, k: number) => (
                                    <Table.Row
                                        key={k}
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell>{k + 1}</Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {kecamatan.judul_website}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {kecamatan.domain_kecamatan}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {" "}
                                            {kecamatan.kode_kecamatan}{" "}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route(
                                                    "EditDataKecamatan",
                                                    { id: kecamatan.idDomain }
                                                )}
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
                                                href={route(
                                                    "HapusDataKecamatan",
                                                    { id: kecamatan.idDomain }
                                                )}
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
                    <Paginator meta={getAllKecamatan} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListKecamatan;
