import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FormEventHandler } from "react";

interface myUser {
    id: number;
    name: string;
    email: string;
    password: any;
}

const TambahUsers: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        kode_kecamatan: "",
        password: "",
        konfirmasi_password: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahUsers"));
    };
    return (
        <Flowbite>
            <Head title="Tambah User" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah User</h4>}
            >
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
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="konfirmasi_password"
                                    value="Konfirmasi Password"
                                />
                            </div>
                            <TextInput
                                id="konfirmasi_password"
                                name="konfirmasi_password"
                                type="password"
                                value={data.konfirmasi_password}
                                onChange={(e) =>
                                    setData(
                                        "konfirmasi_password",
                                        e.target.value
                                    )
                                }
                                placeholder="Konfirmasi Password"
                                required
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
export default TambahUsers;
