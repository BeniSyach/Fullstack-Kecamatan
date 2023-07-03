import { Head, useForm } from "@inertiajs/react";
import {
    Button,
    FileInput,
    Flowbite,
    Label,
    Modal,
    Select,
    TextInput,
} from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {
    kategori_berita: any;
}

const TambahDataBerita: React.FC<PageProps & Props> = ({
    auth,
    kategori_berita,
}) => {
    const [EditorContent, SetEditorContent] = useState("");
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_berita", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        judul_berita: "",
        gambar_berita: "",
        isi_berita: "",
        kategori_berita_id: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahBerita"));
    };

    return (
        <Flowbite>
            <Head title="Tambah Berita" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah Berita</h4>}
            >
                <div className="space-y-6 ml-5">
                    <form onSubmit={submit}>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_berita"
                                    value="Judul Berita"
                                />
                            </div>
                            <TextInput
                                id="judul_berita"
                                name="judul_berita"
                                value={data.judul_berita}
                                onChange={(e) =>
                                    setData("judul_berita", e.target.value)
                                }
                                placeholder="Judul Berita"
                                required
                            />
                        </div>
                        <div className="max-w-md">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="gambar_berita"
                                    value="Gambar Berita"
                                />
                            </div>
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_berita"
                                name="gambar_berita"
                                onChange={(e) =>
                                    setData("gambar_berita", e.target.value)
                                }
                            />
                        </div>
                        <div className="max-w-md" id="select">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="kategori_berita"
                                    value="Kategori Berita"
                                />
                            </div>
                            <Select
                                id="kategori_berita"
                                onChange={(e) =>
                                    setData(
                                        "kategori_berita_id",
                                        e.target.value
                                    )
                                }
                                required
                            >
                                {kategori_berita &&
                                kategori_berita.length > 0 ? (
                                    <>
                                        {kategori_berita.map(
                                            (kategori, k: number) => (
                                                <option
                                                    key={k}
                                                    value={
                                                        kategori.jenis_kategori_berita
                                                    }
                                                >
                                                    {
                                                        kategori.jenis_kategori_berita
                                                    }
                                                </option>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <p>Data Tidak Ada</p>
                                )}
                            </Select>
                        </div>
                        <div className="max-w-full sm:col-span-2">
                            <Label
                                htmlFor="description"
                                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Konten
                            </Label>
                            <CKEditorComponen
                                value={EditorContent}
                                onchange={handleEditorChange}
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                className="mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                Tambah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahDataBerita;
