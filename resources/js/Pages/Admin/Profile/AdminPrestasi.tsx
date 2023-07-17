import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";

interface Props {
    getPrestasi: {
        idPrestasi: number;
        judul_prestasi: string;
        deskripsi_prestasi: string;
        isi_prestasi: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_prestasi: string;
    deskripsi_prestasi: string;
    isi_prestasi: any;
}

const AdminPrestasi: React.FC<PageProps & Props> = ({
    auth,
    getPrestasi,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getPrestasi.isi_prestasi
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_prestasi", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_prestasi: getPrestasi.judul_prestasi,
        deskripsi_prestasi: getPrestasi.deskripsi_prestasi,
        isi_prestasi: getPrestasi.isi_prestasi,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("updatePrestasi", { id: getPrestasi.idPrestasi }));
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
            <Head title="Setting Prestasi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Prestasi</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_prestasi"
                                    value="Judul Prestasi"
                                />
                            </div>
                            <TextInput
                                id="judul_prestasi"
                                name="judul_prestasi"
                                value={data.judul_prestasi}
                                onChange={(e) =>
                                    setData("judul_prestasi", e.target.value)
                                }
                                placeholder="Judul Prestasi"
                                required
                            />
                            <InputError
                                message={errors.judul_prestasi}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_prestasi"
                                    value="Deskripsi Singkat Prestasi"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_prestasi"
                                name="deskripsi_prestasi"
                                value={data.deskripsi_prestasi}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_prestasi",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Prestasi"
                                required
                            />
                            <InputError
                                message={errors.deskripsi_prestasi}
                                className="mt-2"
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
                            <InputError
                                message={errors.isi_prestasi}
                                className="mt-2"
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
export default AdminPrestasi;
