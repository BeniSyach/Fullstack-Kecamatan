import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";
import InputError from "@/Components/InputError";

interface Props {
    ListDetailunduhan: {
        idDetailUnduhan: number;
        dokumen: string;
    };
}

const EditDetailListPotensi: React.FC<PageProps & Props> = ({
    auth,
    ListDetailunduhan,
}) => {
    const { data, setData, post, errors, processing } = useForm({
        dokumen: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(
            route("updateDetailUnduhan", {
                id: ListDetailunduhan.idDetailUnduhan,
            })
        );
    };

    return (
        <Flowbite>
            <Head title="Edit Detail Unduhan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Detail Unduhan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="dokumen" value="Dokumen" />
                            </div>
                            <FileInput
                                helperText="Ukuran dokumen Tidak Lebih dari 5 Mb"
                                id="dokumen"
                                name="dokumen"
                                onChange={(e: any) =>
                                    setData("dokumen", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.dokumen}
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
