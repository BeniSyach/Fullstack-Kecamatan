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
import InputError from "@/Components/InputError";

interface Props {
    wisata: {
        idWisata: number;
        judul_wisata: string;
        foto_wisata: string;
        deskripsi_wisata: string;
        konten_wisata: string;
    };
}

const EditDataWisata: React.FC<PageProps & Props> = ({ auth, wisata }) => {
    const [EditorContent, SetEditorContent] = useState(wisata.konten_wisata);
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("konten_wisata", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        judul_wisata: wisata.judul_wisata,
        foto_wisata: wisata.foto_wisata,
        deskripsi_wisata: wisata.deskripsi_wisata,
        konten_wisata: wisata.konten_wisata,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("updateWisata", { id: wisata.idWisata }));
    };

    return (
        <Flowbite>
            <Head title="Edit Wisata" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Wisata</h4>}
            >
                <div className="space-y-6 ml-5">
                    <form onSubmit={submit}>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_wisata"
                                    value="Judul Wisata"
                                />
                            </div>
                            <TextInput
                                id="judul_wisata"
                                name="judul_wisata"
                                value={data.judul_wisata}
                                onChange={(e) =>
                                    setData("judul_wisata", e.target.value)
                                }
                                placeholder="Judul Wisata"
                                required
                            />
                            <InputError
                                message={errors.judul_wisata}
                                className="mt-2"
                            />
                        </div>
                        <div className="max-w-md">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="foto_wisata"
                                    value="Foto Wisata"
                                />
                            </div>
                            <img
                                src={`${route("home")}/${wisata.foto_wisata}`}
                                alt="Foto Berita"
                                className="w-1/3 mb-3"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="foto_wisata"
                                name="foto_wisata"
                                onChange={(e: any) =>
                                    setData("foto_wisata", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.foto_wisata}
                                className="mt-2"
                            />
                        </div>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="deskripsi_wisata"
                                    value="Deskripsi Wisata"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_wisata"
                                name="deskripsi_wisata"
                                value={data.deskripsi_wisata}
                                onChange={(e) =>
                                    setData("deskripsi_wisata", e.target.value)
                                }
                                placeholder="Deskripsi Wisata"
                                required
                            />
                            <InputError
                                message={errors.deskripsi_wisata}
                                className="mt-2"
                            />
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
                            <InputError
                                message={errors.konten_wisata}
                                className="mt-2"
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
export default EditDataWisata;
