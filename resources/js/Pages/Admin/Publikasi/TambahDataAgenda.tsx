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
    judul_agenda: string;
    tanggal_agenda: string;
    isi_agenda: any;
}

const TambahDataAgenda: React.FC<PageProps & Props> = ({ auth }) => {
    const [EditorContent, SetEditorContent] = useState("");
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("isi_agenda", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        judul_agenda: "",
        tanggal_agenda: "",
        isi_agenda: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahAgenda"));
    };

    return (
        <Flowbite>
            <Head title="Tambah Agenda" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah Agenda</h4>}
            >
                <div className="space-y-6 ml-5">
                    <form onSubmit={submit}>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_agenda"
                                    value="Judul Agenda"
                                />
                            </div>
                            <TextInput
                                id="judul_agenda"
                                name="judul_agenda"
                                value={data.judul_agenda}
                                onChange={(e) =>
                                    setData("judul_agenda", e.target.value)
                                }
                                placeholder="Judul Agenda"
                                required
                            />
                        </div>

                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="tanggal_agenda"
                                    value="Tanggal Agenda"
                                />
                            </div>
                            <TextInput
                                type="date"
                                id="tanggal_agenda"
                                name="tanggal_agenda"
                                value={data.tanggal_agenda}
                                onChange={(e) =>
                                    setData("tanggal_agenda", e.target.value)
                                }
                                placeholder="Tanggal Agenda"
                                required
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
                                Tambah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahDataAgenda;
