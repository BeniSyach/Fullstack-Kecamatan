import { Head, Link } from "@inertiajs/react";
import { Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

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
}

const ListUser: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getAllUser,
}) => {
    return (
        <Flowbite>
            <Head title="List User" />
            <AuthenticatedLayout user={auth.user} header={<h4>List User</h4>}>
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
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href={route("dashboard", {
                                                id: user.id,
                                            })}
                                        >
                                            <p>Edit</p>
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
