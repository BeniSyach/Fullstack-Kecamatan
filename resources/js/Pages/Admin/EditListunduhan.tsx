import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import InputError from "@/Components/InputError";

interface Props {
    Listunduhan: {
        idUnduhan: number;
        judul_unduhan: string;
    };
}

const EditListUnduhan: React.FC<PageProps & Props> = ({
    auth,
    Listunduhan,
}) => {
    const { data, setData, put, errors, processing } = useForm({
        judul_unduhan: Listunduhan.judul_unduhan,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updateUnduhan", { id: Listunduhan.idUnduhan }));
    };

    return (
        <Flowbite>
            <Head title="Edit List Unduhan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit List Unduhan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_unduhan"
                                    value="Judul Unduhan"
                                />
                            </div>
                            <TextInput
                                id="judul_unduhan"
                                name="judul_unduhan"
                                value={data.judul_unduhan}
                                onChange={(e) =>
                                    setData("judul_unduhan", e.target.value)
                                }
                                placeholder="Judul Unduhan"
                                required
                            />
                            <InputError
                                message={errors.judul_unduhan}
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
export default EditListUnduhan;
