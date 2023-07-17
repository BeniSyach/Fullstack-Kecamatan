import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";

interface Props {
    getLetakGeografis: {
        idLetakGeografis: number;
        judul_letak_geografis: string;
        Deskripsi_letak_geografis: string;
        isi_letak_geografis: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_letak_geografis: string;
    Deskripsi_letak_geografis: string;
    isi_letak_geografis: any;
}

const LetakGeografis: React.FC<PageProps & Props> = ({
    auth,
    getLetakGeografis,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getLetakGeografis.isi_letak_geografis
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_letak_geografis", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_letak_geografis: getLetakGeografis.judul_letak_geografis,
        Deskripsi_letak_geografis: getLetakGeografis.Deskripsi_letak_geografis,
        isi_letak_geografis: getLetakGeografis.isi_letak_geografis,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(
            route("updateLetakGeografis", {
                id: getLetakGeografis.idLetakGeografis,
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
            <Head title="Setting Letak Geografis" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Letak Geografis</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_letak_geografis"
                                    value="Judul Letak Geografis"
                                />
                            </div>
                            <TextInput
                                id="judul_letak_geografis"
                                name="judul_letak_geografis"
                                value={data.judul_letak_geografis}
                                onChange={(e) =>
                                    setData(
                                        "judul_letak_geografis",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Letak Geografis"
                                required
                            />
                            <InputError
                                message={errors.judul_letak_geografis}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Deskripsi_letak_geografis"
                                    value="Deskripsi Singkat Letak Geografis"
                                />
                            </div>
                            <TextInput
                                id="Deskripsi_letak_geografis"
                                name="Deskripsi_letak_geografis"
                                value={data.Deskripsi_letak_geografis}
                                onChange={(e) =>
                                    setData(
                                        "Deskripsi_letak_geografis",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Letak Geografis"
                                required
                            />
                            <InputError
                                message={errors.Deskripsi_letak_geografis}
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
                                message={errors.isi_letak_geografis}
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
export default LetakGeografis;
