import { Head, Link } from "@inertiajs/react";
import { Button, Flowbite, Table, Badge } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";

interface myUser {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllUser: myUser[];
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const ListUser: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getAllUser,
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
            <Head title="List User" />
            <AuthenticatedLayout user={auth.user} header={<h4>List User</h4>}>
                <Link href={route("createUsers")} as="button">
                    <Button className="my-3">Tambah Data Users</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Tanggal</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllUser && getAllUser.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllUser.map((user: myUser, k: number) => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell> {user.name} </Table.Cell>
                                    <Table.Cell> {user.email} </Table.Cell>
                                    <Table.Cell> {user.created_at} </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("editUsers", {
                                                id: user.id,
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
                                            href={route("hapusUsers", {
                                                id: user.id,
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
                            ))}
                        </Table.Body>
                    ) : (
                        <p> tidak ada User </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListUser;
