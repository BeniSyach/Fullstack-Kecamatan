import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, Modal, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

interface Props {
    user: {
        id: number;
        name: string;
        email: string;
        password: any;
    };
}

const EditUser: React.FC<PageProps & Props> = ({ auth, user }) => {
    const { data, setData, put, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        password: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updateUsers", { id: user.id }));
    };

    return (
        <Flowbite>
            <Head title="Edit User" />
            <AuthenticatedLayout user={auth.user} header={<h4> Edit User</h4>}>
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="name" value="Nama Lengkap" />
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Nama Lengkap"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="email" value="Email Anda" />
                            </div>
                            <TextInput
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Email Anda"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Password"
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
export default EditUser;
