import { PageProps } from "@/types";
import { Flowbite, Table, Badge, Button } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Paginator from "@/Components/Paginator";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

interface Props {
    domain: {
        judul_website: string;
    };
    agenda: any;
    flash: {
        message?: string;
    };
}

const AdminAgenda: React.FC<PageProps & Props> = ({ auth, agenda, flash }) => {
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
            <Head title="List Agenda" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Agenda</h4>}>
                <Link href={route("createAgenda")} as="button">
                    <Button className="my-3">Tambah Agenda</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Agenda</Table.HeadCell>
                        <Table.HeadCell>Tanggal Agenda</Table.HeadCell>
                        <Table.HeadCell>Deskripsi</Table.HeadCell>
                    </Table.Head>

                    {agenda && agenda.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {agenda.data.map((Agd, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell> {Agd.judul_agenda}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {format(
                                            parseISO(Agd.tanggal_agenda),
                                            "EEEE, dd MMMM yyyy",
                                            { locale: id }
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("editAgenda", {
                                                id: Agd.idAgenda,
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
                                            href={route("hapusAgenda", {
                                                id: Agd.idAgenda,
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
                        <p> Tidak Ada Agenda </p>
                    )}
                </Table>
                <div className="flex items-center justify-center text-center mt-10">
                    <Paginator meta={agenda} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminAgenda;
