<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTupoksiRequest extends FormRequest
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
            'judul_tupoksi' => 'required|string|max:200',
            'deskripsi_tupoksi' => 'required|string|max:200',
            'isi_tupoksi' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Tupoksi
            'judul_tupoksi.required' => ':attribute Tidak Boleh Kosong',
            'judul_tupoksi.string' => ':attribute Harus Text',
            'judul_tupoksi.max' => ':attribute text maximal 200 digit',
            // Deskripsi Tupoksi
            'deskripsi_tupoksi.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_tupoksi.string' => ':attribute Harus Text',
            'deskripsi_tupoksi.max' => ':attribute text maximal 200 digit',
            // Isi Tupoksi
            'isi_tupoksi.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_tupoksi' => 'Judul Tupoksi',
            'deskripsi_tupoksi' => 'Deksripsi Tupoksi',
            'isi_tupoksi' => 'Konten Tupoksi',
        ];
    }
}
