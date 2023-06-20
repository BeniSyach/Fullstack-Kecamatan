import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {}

const AdminStrukturOrganisasi: React.FC<PageProps & Props> = ({ auth }) => {
    const [EditorContent, SetEditorContent] = useState("");
    const handleEditorChange = (content: string) => {
        SetEditorContent(content);
    };
    return (
        <Flowbite>
            <Head title="Setting Struktur Organisasi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Struktur Organisasi</h4>}
            >
                <form action="#" className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_struktur_organisasi"
                                    value="Judul Struktur Organisasi"
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
                                id="judul_struktur_organisasi"
                                name="judul_struktur_organisasi"
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
                                // helperText={
                                //     <>
                                //         <span className="font-medium">
                                //             Alright!
                                //         </span>
                                //         Username available!
                                //     </>
                                // }
                                id="deskripsi_struktur_organisasi"
                                name="deskripsi_struktur_organisasi"
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
                    <Button className="my-5" color="success">
                        Ubah
                    </Button>
                </form>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default AdminStrukturOrganisasi;
