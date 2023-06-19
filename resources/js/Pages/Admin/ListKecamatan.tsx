import { PageProps } from "@/types";
import { Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

interface myKecamatan {
    id: number;
    domain_kecamatan: string;
    kode_kecamatan: number;
    judul_website: string;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllKecamatan: myKecamatan[];
}

const ListKecamatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getAllKecamatan,
}) => {
    return (
        <Flowbite>
            <Head title="Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Data Kecamatan</h4>}
            >
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Domain Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Kode Kecamatan</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>

                    {getAllKecamatan && getAllKecamatan.length > 0 ? (
                        <Table.Body className="divide-y">
                            {getAllKecamatan.map(
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
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                href={route("dashboard", {
                                                    id: kecamatan.id,
                                                })}
                                            >
                                                <p>Edit</p>
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
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default ListKecamatan;
