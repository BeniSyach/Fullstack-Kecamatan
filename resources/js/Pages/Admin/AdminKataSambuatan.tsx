import CKEditorComponen from "@/Components/CKEditorComponen";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, FormEventHandler, useEffect } from "react";
import InputError from "@/Components/InputError";
import Swal from "sweetalert2";

interface Props {
    getKataSambutan: {
        idKataSambutan: string;
        nama_kepala_camat: string;
        gambar_camat: File | null;
        judul_kataSambutan: string;
        isi_kataSambutan: any;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const AdminKataSambuatan: React.FC<PageProps & Props> = ({
    auth,
    getKataSambutan,
    flash,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getKataSambutan.isi_kataSambutan
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_kataSambutan", EditorContent);
    };
    const { data, setData, post, errors, processing } = useForm({
        nama_kepala_camat: getKataSambutan.nama_kepala_camat,
        gambar_camat: null,
        judul_kataSambutan: getKataSambutan.judul_kataSambutan,
        isi_kataSambutan: getKataSambutan.isi_kataSambutan,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(
            route("UpdateKataSambutan", { id: getKataSambutan.idKataSambutan })
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
            <Head title="Setting Kata Sambutan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Kata Sambutan</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-2xl flex-col gap-4 ml-3">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="nama_kepala_camat"
                                    value="Nama Kepala Camat"
                                />
                            </div>
                            <TextInput
                                id="nama_kepala_camat"
                                name="nama_kepala_camat"
                                value={data.nama_kepala_camat}
                                onChange={(e) =>
                                    setData("nama_kepala_camat", e.target.value)
                                }
                                placeholder="Nama Kepala Camat"
                                required
                            />
                            <InputError
                                message={errors.nama_kepala_camat}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="gambar_camat"
                                    value="Gambar Camat"
                                />
                            </div>
                            <img
                                src={`/${getKataSambutan.gambar_camat}`}
                                alt="Foto Camat"
                                className="w-1/3"
                            />
                            <FileInput
                                id="gambar_camat"
                                name="gambar_camat"
                                onChange={(e: any) =>
                                    setData("gambar_camat", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.gambar_camat}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_kataSambutan"
                                    value="Judul Kata Sambutan"
                                />
                            </div>
                            <TextInput
                                id="judul_kataSambutan"
                                name="judul_kataSambutan"
                                value={data.judul_kataSambutan}
                                onChange={(e) =>
                                    setData(
                                        "judul_kataSambutan",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Kata Sambutan"
                                required
                            />
                            <InputError
                                message={errors.judul_kataSambutan}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Isi Kata Sambutan
                            </Label>
                            <CKEditorComponen
                                value={EditorContent}
                                onchange={handleEditorChange}
                            />
                            <InputError
                                message={errors.isi_kataSambutan}
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
export default AdminKataSambuatan;
