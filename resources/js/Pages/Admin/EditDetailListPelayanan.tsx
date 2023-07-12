import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {
    ListDetailPelayanan: {
        idDetailPelayanan: number;
        gambar_pelayanan: string;
        konten_pelayanan: any;
    };
}

const EditDetailListPelayanan: React.FC<PageProps & Props> = ({
    auth,
    ListDetailPelayanan,
}) => {
    const [EditorContent, SetEditorContent] = useState(
        ListDetailPelayanan.konten_pelayanan
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("konten_pelayanan", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        gambar_pelayanan: ListDetailPelayanan.gambar_pelayanan,
        konten_pelayanan: ListDetailPelayanan.konten_pelayanan,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(
            route("updateDetailPelayanan", {
                id: ListDetailPelayanan.idDetailPelayanan,
            })
        );
    };

    return (
        <Flowbite>
            <Head title="Edit Detail List Pelayanan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Detail List Pelayanan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="gambar_pelayanan"
                                    value="Gambar Pelayanan"
                                />
                            </div>
                            <img
                                src={data.gambar_pelayanan}
                                alt="Foto Pelayanan"
                                className="w-1/3 mb-10"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_pelayanan"
                                name="gambar_pelayanan"
                                onChange={(e) =>
                                    setData("gambar_pelayanan", e.target.value)
                                }
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
export default EditDetailListPelayanan;
