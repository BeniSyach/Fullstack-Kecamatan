import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";

interface CustomFormData {
    [key: string]: unknown;
    judul_kependudukan: string;
    deskripsi_kependudukan: string;
    isi_kependudukan: any;
}

interface Props {
    getKependudukan: {
        idKependudukan: number;
        judul_kependudukan: string;
        deskripsi_kependudukan: string;
        isi_kependudukan: any;
    };
}

interface FlashProps {
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const Penduduk: React.FC<PageProps & Props & FlashProps> = ({
    auth,
    getKependudukan,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getKependudukan.isi_kependudukan
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_kependudukan", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_kependudukan: getKependudukan.judul_kependudukan,
        deskripsi_kependudukan: getKependudukan.deskripsi_kependudukan,
        isi_kependudukan: getKependudukan.isi_kependudukan,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(
            route("updateKependudukan", { id: getKependudukan.idKependudukan })
        );
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
            <Head title="Setting Kependudukan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Kependudukan</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_kependudukan"
                                    value="Judul Kependudukan"
                                />
                            </div>
                            <TextInput
                                id="judul_kependudukan"
                                name="judul_kependudukan"
                                value={data.judul_kependudukan}
                                onChange={(e) =>
                                    setData(
                                        "judul_kependudukan",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Kependudukan"
                                required
                            />
                            <InputError
                                message={errors.judul_kependudukan}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_kependudukan"
                                    value="Deskripsi Singkat Kependudukan"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_kependudukan"
                                name="deskripsi_kependudukan"
                                value={data.deskripsi_kependudukan}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_kependudukan",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Kependudukan"
                                required
                            />
                            <InputError
                                message={errors.deskripsi_kependudukan}
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
                                message={errors.isi_kependudukan}
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
export default Penduduk;
