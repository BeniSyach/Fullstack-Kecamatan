import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";

interface Props {
    getTupoksi: {
        idTupoksi: number;
        judul_tupoksi: string;
        deskripsi_tupoksi: string;
        isi_tupoksi: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_tupoksi: string;
    deskripsi_tupoksi: string;
    isi_tupoksi: any;
}

const AdminTupoksi: React.FC<PageProps & Props> = ({
    auth,
    getTupoksi,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(getTupoksi.isi_tupoksi);
    const handleEditorChange = (content: string) => {
        SetEditorContent(content);
        setData("isi_tupoksi", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_tupoksi: getTupoksi.judul_tupoksi,
        deskripsi_tupoksi: getTupoksi.deskripsi_tupoksi,
        isi_tupoksi: getTupoksi.isi_tupoksi,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("updateTupoksi", { id: getTupoksi.idTupoksi }));
    };

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
            <Head title="Setting Tupoksi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Tupoksi</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_tupoksi"
                                    value="Judul Tupoksi"
                                />
                            </div>
                            <TextInput
                                id="judul_tupoksi"
                                name="judul_tupoksi"
                                value={data.judul_tupoksi}
                                onChange={(e) =>
                                    setData("judul_tupoksi", e.target.value)
                                }
                                placeholder="Judul Tupoksi"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_tupoksi"
                                    value="Deskripsi Singkat Tupoksi"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_tupoksi"
                                name="deskripsi_tupoksi"
                                value={data.deskripsi_tupoksi}
                                onChange={(e) =>
                                    setData("deskripsi_tupoksi", e.target.value)
                                }
                                placeholder="Deskripsi Singkat Tupoksi"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Konten
                            </Label>
                            <CKEditorComponen
                                value={EditorContent}
                                onchange={handleEditorChange}
                            />
                        </div>
                    </div>
                    <Button
                        className="my-5"
                        color="success"
                        type="submit"
                        disabled={processing}
                    >
                        Ubah
                    </Button>
                </form>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminTupoksi;
