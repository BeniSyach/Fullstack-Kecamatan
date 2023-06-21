import { PageProps } from "@/types";
import { Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

interface myVideo {}

interface Props {
    domain: {
        judul_website: string;
    };
    // getVideo: myVideo[];
}

const AdminVideoKegiatan: React.FC<PageProps & Props> = ({ auth, domain }) => {
    return (
        <Flowbite>
            <Head title="List Video" />
            <AuthenticatedLayout user={auth.user} header={<h4>List Video</h4>}>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Judul Video</Table.HeadCell>
                        <Table.HeadCell>Video</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {/* {getBerita && getBerita.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getBerita.map((berita: myBerita, k: number) => (
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
                                            src={berita.gambar_berita}
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
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href={route("dashboard", {
                                                id: berita.idBerita,
                                            })}
                                        >
                                            <p>Edit</p>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    ) : (
                        <p> tidak ada Video Kegiatan </p>
                    )} */}
                </Table>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminVideoKegiatan;
