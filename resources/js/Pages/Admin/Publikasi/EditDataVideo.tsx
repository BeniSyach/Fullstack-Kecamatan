import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";
import InputError from "@/Components/InputError";

interface Props {
    video: {
        idVideo: number;
        judul_video_kegiatan: string;
        video: string;
    };
}

const EditDataVideo: React.FC<PageProps & Props> = ({ auth, video }) => {
    const [EditorContent, SetEditorContent] = useState(video.video);
    const handleEditorChange = (content: any) => {
        SetEditorContent(content);
        setData("video", EditorContent);
    };

    const { data, setData, post, errors, processing } = useForm({
        judul_video_kegiatan: video.judul_video_kegiatan,
        video: video.video,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("updateVideoKegiatan", { id: video.idVideo }));
    };

    return (
        <Flowbite>
            <Head title="Edit Video" />
            <AuthenticatedLayout user={auth.user} header={<h4> Edit Video</h4>}>
                <div className="space-y-6 ml-5">
                    <form onSubmit={submit}>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_video_kegiatan"
                                    value="Judul Video"
                                />
                            </div>
                            <TextInput
                                id="judul_video_kegiatan"
                                name="judul_video_kegiatan"
                                value={data.judul_video_kegiatan}
                                onChange={(e) =>
                                    setData(
                                        "judul_video_kegiatan",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Video"
                                required
                            />
                            <InputError
                                message={errors.judul_video_kegiatan}
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
export default EditDataVideo;
