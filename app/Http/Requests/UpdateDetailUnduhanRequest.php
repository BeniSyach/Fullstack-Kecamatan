<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDetailUnduhanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'dokumen' => 'required|mimes:doc,pdf,docx,csv,xlsx,xls|max:5000'
        ];
    }

    public function messages(): array
    {
        return [
            // judul Foto
            'dokumen.required' => ':attribute Tidak Boleh Kosong',
            'dokumen.mimes' => ':attribute File harus berektensi doc,pdf,docx,csv,xlsx,xls',
            'dokumen.max' => ':attribute tidak lebih dari 5 MB',
        ];
    }

    public function attributes(): array
    {
        return [
            'dokumen' => 'Dokumen',
        ];
    }
}
