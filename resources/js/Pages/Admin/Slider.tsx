import { Head, Link } from "@inertiajs/react";
import { Flowbite, Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

interface mySlider {
    gambar_slider: string;
    id: number;
}

interface Props {
    domain: {
        judul_website: string;
    };
    getAllSlider: mySlider[];
}

const Slider: React.FC<Props & PageProps> = ({
    auth,
    domain,
    getAllSlider,
}) => {
    return (
        <Flowbite>
            <Head title="List Slider" />
            <AuthenticatedLayout user={auth.user} header={<h4>List User</h4>}>
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
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>
                                        {" "}
                                        <img
                                            src={slider.gambar_slider}
                                            alt=""
                                            className="w-1/4"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            href={route("dashboard", {
                                                id: slider.id,
                                            })}
                                        >
                                            <p>Edit</p>
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
