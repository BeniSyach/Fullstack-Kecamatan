import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

interface Props {
    ListPelayanan: {
        idPelayanan: number;
        judul_pelayanan: string;
    };
}

const EditListPelayanan: React.FC<PageProps & Props> = ({
    auth,
    ListPelayanan,
}) => {
    const { data, setData, put, errors, processing } = useForm({
        judul_pelayanan: ListPelayanan.judul_pelayanan,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updatePelayanan", { id: ListPelayanan.idPelayanan }));
    };

    return (
        <Flowbite>
            <Head title="Edit List Pelayanan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit List Pelayanan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_pelayanan"
                                    value="Judul Pelayanan"
                                />
                            </div>
                            <TextInput
                                id="judul_pelayanan"
                                name="judul_pelayanan"
                                value={data.judul_pelayanan}
                                onChange={(e) =>
                                    setData("judul_pelayanan", e.target.value)
                                }
                                placeholder="Judul Pelayanan"
                                required
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
export default EditListPelayanan;
