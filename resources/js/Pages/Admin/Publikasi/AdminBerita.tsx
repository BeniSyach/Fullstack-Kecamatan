import { PageProps } from "@/types";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Paginator from "@/Components/Paginator";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";

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
    getBerita: {
        data: myBerita[];
    };
    flash: {
        message?: string;
    };
}

const AdminBerita: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getBerita,
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
            <Head title="List Berita" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Berita</h4>}>
                <Link href={route("createBerita")} as="button">
                    <Button className="my-3">Tambah Berita</Button>
                </Link>
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

                    {getBerita && getBerita.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getBerita.data.map(
                                (berita: myBerita, k: number) => (
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
                                                src={`${route("home")}/${
                                                    berita.gambar_berita
                                                }`}
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
                                                href={route("editBerita", {
                                                    id: berita.idBerita,
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
                                                href={route("hapusBerita", {
                                                    id: berita.idBerita,
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
                                )
                            )}
                        </Table.Body>
                    ) : (
                        <p> tidak ada Berita </p>
                    )}
                </Table>
                <div className="flex items-center justify-center text-center mt-10">
                    <Paginator meta={getBerita} />
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminBerita;
