import CKEditorComponen from "@/Components/CKEditorComponen";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";

interface Props {}

const AdminKataSambuatan: React.FC<PageProps & Props> = ({ auth }) => {
    const [EditorContent, SetEditorContent] = useState("");
    const handleEditorChange = (content: string) => {
        SetEditorContent(content);
    };
    return (
        <Flowbite>
            <Head title="Setting Kata Sambutan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Kata Sambutan</h4>}
            >
                <form action="#" className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="nama_kepala_camat"
                                    value="Nama Kepala Camat"
                                />
                            </div>
                            <TextInput
                                // helperText={
                                //     <>
                                //         <span className="font-medium">
                                //             Alright!
                                //         </span>
                                //         Username available!
                                //     </>
                                // }
                                id="nama_kepala_camat"
                                name="nama_kepala_camat"
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
                                // helperText={
                                //     <>
                                //         <span className="font-medium">
                                //             Alright!
                                //         </span>
                                //         Username available!
                                //     </>
                                // }
                                id="judul_kataSambutan"
                                name="judul_kataSambutan"
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
                    <Button className="my-5" color="success">
                        Ubah
                    </Button>
                </form>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminKataSambuatan;
