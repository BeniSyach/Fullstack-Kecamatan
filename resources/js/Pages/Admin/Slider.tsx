import { Head, Link } from "@inertiajs/react";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";

interface mySlider {
    gambar_slider: string;
    idSlider: number;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllSlider: mySlider[];
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const Slider: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getAllSlider,
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

    const url = window.location.hostname;
    return (
        <Flowbite>
            <Head title="List Slider" />
            <AuthenticatedLayout user={auth.user} header={<h4>List User</h4>}>
                <Link href={route("createSlider")} as="button">
                    <Button className="my-3">Tambah Slider</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Gambar Slider</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllSlider && getAllSlider.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllSlider.map((slider: mySlider, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        <img
                                            src={`/${slider.gambar_slider}`}
                                            alt=""
                                            className="w-1/4"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("editSlider", {
                                                id: slider.idSlider,
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
                                            href={route("hapusSlider", {
                                                id: slider.idSlider,
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
                        <p> tidak ada Gambar </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default Slider;
