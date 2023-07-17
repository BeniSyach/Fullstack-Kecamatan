import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";

interface Props {
    getStrukturOrganisasi: {
        idStrukturOrganisasi: number;
        judul_struktur_organisasi: string;
        deskripsi_struktur_organisasi: string;
        isi_struktur_organisasi: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_struktur_organisasi: string;
    deskripsi_struktur_organisasi: string;
    isi_struktur_organisasi: any;
}

const AdminStrukturOrganisasi: React.FC<PageProps & Props> = ({
    auth,
    getStrukturOrganisasi,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getStrukturOrganisasi.isi_struktur_organisasi
    );
    const handleEditorChange = (content: string) => {
        SetEditorContent(content);
        setData("isi_struktur_organisasi", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_struktur_organisasi:
            getStrukturOrganisasi.judul_struktur_organisasi,
        deskripsi_struktur_organisasi:
            getStrukturOrganisasi.deskripsi_struktur_organisasi,
        isi_struktur_organisasi: getStrukturOrganisasi.isi_struktur_organisasi,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(
            route("update_struktur_organisasi", {
                id: getStrukturOrganisasi.idStrukturOrganisasi,
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
            <Head title="Setting Struktur Organisasi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Struktur Organisasi</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_struktur_organisasi"
                                    value="Judul Struktur Organisasi"
                                />
                            </div>
                            <TextInput
                                id="judul_struktur_organisasi"
                                name="judul_struktur_organisasi"
                                value={data.judul_struktur_organisasi}
                                onChange={(e) =>
                                    setData(
                                        "judul_struktur_organisasi",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Struktur Organisasi"
                                required
                            />
                            <InputError
                                message={errors.judul_struktur_organisasi}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_struktur_organisasi"
                                    value="Deskripsi Singkat Struktur Organisasi"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_struktur_organisasi"
                                name="deskripsi_struktur_organisasi"
                                value={data.deskripsi_struktur_organisasi}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_struktur_organisasi",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Struktur Organisasi"
                                required
                            />
                            <InputError
                                message={errors.deskripsi_struktur_organisasi}
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
                                message={errors.isi_struktur_organisasi}
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
export default AdminStrukturOrganisasi;
