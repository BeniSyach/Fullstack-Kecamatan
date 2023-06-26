import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface CustomFormData {
    [key: string]: unknown;
    judul_kependudukan: string;
    deskripsi_kependudukan: string;
    isi_kependudukan: any;
}

interface Props {
    getKependudukan: {
        idKependudukan: number;
        judul_kependudukan: string;
        deskripsi_kependudukan: string;
        isi_kependudukan: any;
    };
}

const Penduduk: React.FC<PageProps & Props> = ({ auth, getKependudukan }) => {
    const [EditorContent, SetEditorContent] = useState(
        getKependudukan.isi_kependudukan
    );
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_kependudukan", EditorContent);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_kependudukan: getKependudukan.judul_kependudukan,
        deskripsi_kependudukan: getKependudukan.deskripsi_kependudukan,
        isi_kependudukan: getKependudukan.isi_kependudukan,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(
            route("updateKependudukan", { id: getKependudukan.idKependudukan })
        );
    };
    return (
        <Flowbite>
            <Head title="Setting Kependudukan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Kependudukan</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_kependudukan"
                                    value="Judul Kependudukan"
                                />
                            </div>
                            <TextInput
                                id="judul_kependudukan"
                                name="judul_kependudukan"
                                value={data.judul_kependudukan}
                                onChange={(e) =>
                                    setData(
                                        "judul_kependudukan",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Kependudukan"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_kependudukan"
                                    value="Deskripsi Singkat Kependudukan"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_kependudukan"
                                name="deskripsi_kependudukan"
                                value={data.deskripsi_kependudukan}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_kependudukan",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Kependudukan"
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
export default Penduduk;
