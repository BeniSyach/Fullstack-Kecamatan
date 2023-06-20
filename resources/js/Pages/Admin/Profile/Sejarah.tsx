import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {}

const Sejarah: React.FC<PageProps & Props> = ({ auth }) => {
    const [EditorContent, SetEditorContent] = useState("");
    const handleEditorChange = (content: string) => {
        SetEditorContent(content);
    };
    return (
        <Flowbite>
            <Head title="Setting Sejarah" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Sejarah</h4>}
            >
                <form action="#" className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_sejarah"
                                    value="Judul Sejarah"
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
                                id="judul_sejarah"
                                name="judul_sejarah"
                                placeholder="Judul Sejarah"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Deskripsi_sejarah"
                                    value="Deskripsi Singkat Sejarah"
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
                                id="Deskripsi_sejarah"
                                name="Deskripsi_sejarah"
                                placeholder="Deskripsi Singkat Sejarah"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="penulis_sejarah"
                                    value="Penulis Sejarah"
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
                                id="penulis_sejarah"
                                name="penulis_sejarah"
                                placeholder="Penulis Sejarah"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="jabatan_penulis_sejarah"
                                    value="Jabatan Penulis"
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
                                id="jabatan_penulis_sejarah"
                                name="jabatan_penulis_sejarah"
                                placeholder="Jabatan Penulis"
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
export default Sejarah;
