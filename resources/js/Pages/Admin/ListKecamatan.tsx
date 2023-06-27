import { PageProps } from "@/types";
import { Flowbite, Pagination, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TambahDataKecamatan from "@/Components/TambahDataKecamatan";
import { useState } from "react";
import Paginator from "@/Components/Paginator";

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
    getAllKecamatan: {
        data: myKecamatan[];
        current_page: number;
        total: number;
        links: any;
    };
}

const ListKecamatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    getAllKecamatan,
}) => {
    const [currentPage, setCurrentPage] = useState(
        getAllKecamatan.current_page
    );
    const onPageChange = (page: number) => setCurrentPage(page);
    console.log(getAllKecamatan);
    return (
        <Flowbite>
            <Head title="Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Data Kecamatan</h4>}
            >
                <TambahDataKecamatan />
                <Table hoverable className="mt-5">
                    <Table.Head>
                        <Table.HeadCell>No</Table.HeadCell>
                        <Table.HeadCell>Nama Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Domain Kecamatan</Table.HeadCell>
                        <Table.HeadCell>Kode Kecamatan</Table.HeadCell>
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
                                            <p className="text-blue-500">
                                                edit
                                            </p>
                                            <p className="text-red-500">
                                                hapus
                                            </p>
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
