import { PageProps } from "@/types";
import { Badge, Button, Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface myVideo {
    idVideo: number;
    judul_video_kegiatan: string;
    video: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    video: {
        data: myVideo[];
    };
}

const AdminVideoKegiatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    video,
}) => {
    return (
        <Flowbite>
            <Head title="List Video" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Video</h4>}>
                <Link href={route("createVideoKegiatan")} as="button">
                    <Button className="my-3">Tambah Video</Button>
                </Link>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Video</Table.HeadCell>
                        <Table.HeadCell>Video</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {video && video.data.length > 0 ? (
                        <Table.Body className="divide-y">
                            {video.data.map((vd: myVideo, k: number) => (
                                <Table.Row
                                    key={k}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        {vd.judul_video_kegiatan}{" "}
                                    </Table.Cell>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: vd.video,
                                        }}
                                    />
                                    <Table.Cell>
                                        <Link
                                            href={route("editVideoKegiatan", {
                                                id: vd.idVideo,
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
                                            href={route("hapusVideoKegiatan", {
                                                id: vd.idVideo,
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
                        <p> tidak ada Video Kegiatan </p>
                    )}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminVideoKegiatan;
