import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";

interface Props {
    getAdatDanBudaya: {
        idAdatDanBudaya: number;
        judul_adatDanBudaya: string;
        deskripsi_adatDanBudaya: string;
        isi_adatDanBudaya: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_adatDanBudaya: string;
    deskripsi_adatDanBudaya: string;
    isi_adatDanBudaya: any;
}

const AdatDanBudaya: React.FC<PageProps & Props> = ({
    auth,
    getAdatDanBudaya,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getAdatDanBudaya.isi_adatDanBudaya
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_adatDanBudaya", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_adatDanBudaya: getAdatDanBudaya.judul_adatDanBudaya,
        deskripsi_adatDanBudaya: getAdatDanBudaya.deskripsi_adatDanBudaya,
        isi_adatDanBudaya: getAdatDanBudaya.isi_adatDanBudaya,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(
            route("updateAdatDanBudaya", {
                id: getAdatDanBudaya.idAdatDanBudaya,
            })
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
            <Head title="Setting Adat Dan Budaya" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Adat Dan Budaya</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_adatDanBudaya"
                                    value="Judul Adat Dan Budaya"
                                />
                            </div>
                            <TextInput
                                id="judul_adatDanBudaya"
                                name="judul_adatDanBudaya"
                                value={data.judul_adatDanBudaya}
                                onChange={(e) =>
                                    setData(
                                        "judul_adatDanBudaya",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Adat Dan Budaya"
                                required
                            />
                            <InputError
                                message={errors.judul_adatDanBudaya}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_adatDanBudaya"
                                    value="Deskripsi Singkat Adat Dan Budaya"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_adatDanBudaya"
                                name="deskripsi_adatDanBudaya"
                                value={data.deskripsi_adatDanBudaya}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_adatDanBudaya",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Adat Dan Budaya"
                                required
                            />
                            <InputError
                                message={errors.deskripsi_adatDanBudaya}
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
                                message={errors.isi_adatDanBudaya}
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
export default AdatDanBudaya;
