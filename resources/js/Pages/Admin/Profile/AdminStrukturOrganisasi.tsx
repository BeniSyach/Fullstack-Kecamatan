import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {
    getStrukturOrganisasi: {
        idStrukturOrganisasi: number;
        judul_struktur_organisasi: string;
        deskripsi_struktur_organisasi: string;
        isi_struktur_organisasi: any;
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
export default AdminStrukturOrganisasi;
