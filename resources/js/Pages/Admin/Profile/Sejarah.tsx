import { PageProps } from "@/types";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";
import InputError from "@/Components/InputError";
import Swal from "sweetalert2";

interface Props {
    sejarah: {
        idSejarah: number;
        judul_sejarah: string;
        Deskripsi_sejarah: string;
        penulis_sejarah: string;
        jabatan_penulis_sejarah: string;
        isi_sejarah: string;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_sejarah: string;
    Deskripsi_sejarah: string;
    penulis_sejarah: string;
    jabatan_penulis_sejarah: string;
    content: any;
}

const Sejarah: React.FC<PageProps & Props> = ({ auth, sejarah, flash }) => {
    const [EditorContent, SetEditorContent] = useState(sejarah.isi_sejarah);
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("content", EditorContent);
    };

    const { mySejarah } = usePage().props;

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_sejarah: sejarah.judul_sejarah,
        Deskripsi_sejarah: sejarah.Deskripsi_sejarah,
        penulis_sejarah: sejarah.penulis_sejarah,
        jabatan_penulis_sejarah: sejarah.jabatan_penulis_sejarah,
        content: EditorContent,
    });

    useEffect(() => {
        if (!mySejarah) {
            router.get(route("AdminSejarah"));
        }
        return;
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("updateSejarah", { id: sejarah.idSejarah }));
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
            <Head title="Setting Sejarah" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Sejarah</h4>}
            >
                {/* <div>
                    {flash.message && (
                        <div className="alert alert-info shadow-lg">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current flex-shrink-0 w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span>{flash.message}.</span>
                            </div>
                        </div>
                    )}
                </div> */}
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_sejarah"
                                    value="Judul Sejarah"
                                />
                            </div>
                            <TextInput
                                id="judul_sejarah"
                                name="judul_sejarah"
                                value={data.judul_sejarah}
                                onChange={(e) =>
                                    setData("judul_sejarah", e.target.value)
                                }
                                placeholder="Judul Sejarah"
                                required
                            />
                            <InputError
                                message={errors.judul_sejarah}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Deskripsi_sejarah"
                                    value="Deskripsi Singkat Sejarah"
                                />
                            </div>
                            <TextInput
                                id="Deskripsi_sejarah"
                                name="Deskripsi_sejarah"
                                value={data.Deskripsi_sejarah}
                                onChange={(e) =>
                                    setData("Deskripsi_sejarah", e.target.value)
                                }
                                placeholder="Deskripsi Singkat Sejarah"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="penulis_sejarah"
                                    value="Penulis Sejarah"
                                />
                            </div>
                            <TextInput
                                id="penulis_sejarah"
                                name="penulis_sejarah"
                                value={data.penulis_sejarah}
                                onChange={(e) =>
                                    setData("penulis_sejarah", e.target.value)
                                }
                                placeholder="Penulis Sejarah"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="jabatan_penulis_sejarah"
                                    value="Jabatan Penulis"
                                />
                            </div>
                            <TextInput
                                id="jabatan_penulis_sejarah"
                                name="jabatan_penulis_sejarah"
                                value={data.jabatan_penulis_sejarah}
                                onChange={(e) =>
                                    setData(
                                        "jabatan_penulis_sejarah",
                                        e.target.value
                                    )
                                }
                                placeholder="Jabatan Penulis"
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
export default Sejarah;
