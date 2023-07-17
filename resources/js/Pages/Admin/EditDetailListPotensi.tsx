import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";
import InputError from "@/Components/InputError";

interface Props {
    ListDetailPotensi: {
        idDetailPotensi: number;
        gambar_potensi: string;
        konten_potensi: any;
    };
}

const EditDetailListPotensi: React.FC<PageProps & Props> = ({
    auth,
    ListDetailPotensi,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        ListDetailPotensi.konten_potensi
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("konten_potensi", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        gambar_potensi: ListDetailPotensi.gambar_potensi,
        konten_potensi: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(
            route("updateDetailPotensi", {
                id: ListDetailPotensi.idDetailPotensi,
            })
        );
    };

    return (
        <Flowbite>
            <Head title="Edit Detail List Potensi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Detail List Potensi</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="gambar_potensi"
                                    value="Gambar Potensi"
                                />
                            </div>
                            <img
                                src={`${route("home")}/${
                                    ListDetailPotensi.gambar_potensi
                                }`}
                                alt="Foto Potensi"
                                className="w-1/3 mb-10"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_potensi"
                                name="gambar_potensi"
                                onChange={(e: any) =>
                                    setData("gambar_potensi", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.gambar_potensi}
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
                                message={errors.konten_potensi}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                className="mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                Ubah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default EditDetailListPotensi;
