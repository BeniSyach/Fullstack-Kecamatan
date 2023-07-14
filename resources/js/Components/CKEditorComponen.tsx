import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface CKEditorProps {
    value: string;
    onchange: (content: string) => void;
}

const CKEditorComponen: React.FC<CKEditorProps> = ({ value, onchange }) => {
    const HandleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        onchange(data);
    };

    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={HandleEditorChange}
            config={{
                ckfinder: {
                    uploadUrl: route("uploadFoto", {
                        _token: (window as any).csrf,
                    }),
                },
            }}
        />
    );
};
export default CKEditorComponen;
