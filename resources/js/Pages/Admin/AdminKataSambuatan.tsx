import CKEditorComponen from "@/Components/CKEditorComponen";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, FormEventHandler } from "react";

interface Props {
    getKataSambutan: {
        idKataSambutan: string;
        nama_kepala_camat: string;
        gambar_camat: string;
        judul_kataSambutan: string;
        isi_kataSambutan: any;
    };
}

const AdminKataSambuatan: React.FC<PageProps & Props> = ({
    auth,
    getKataSambutan,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        getKataSambutan.isi_kataSambutan
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_kataSambutan", EditorContent);
    };
    const { data, setData, put, errors, processing } = useForm({
        nama_kepala_camat: getKataSambutan.nama_kepala_camat,
        gambar_camat: getKataSambutan.gambar_camat,
        judul_kataSambutan: getKataSambutan.judul_kataSambutan,
        isi_kataSambutan: getKataSambutan.isi_kataSambutan,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(
            route("UpdateKataSambutan", { id: getKataSambutan.idKataSambutan })
        );
    };
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
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="gambar_camat"
                                    value="Gambar Camat"
                                />
                            </div>
                            <img
                                src={data.gambar_camat}
                                alt="Foto Camat"
                                className="w-1/3"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_camat"
                                name="gambar_camat"
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
