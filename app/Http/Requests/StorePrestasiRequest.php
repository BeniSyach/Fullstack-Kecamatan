<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePrestasiRequest extends FormRequest
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
            'judul_prestasi' => 'required|string|max:200',
            'deskripsi_prestasi' => 'required|string|max:200',
            'isi_prestasi' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Prestasi
            'judul_prestasi.required' => ':attribute Tidak Boleh Kosong',
            'judul_prestasi.string' => ':attribute Harus Text',
            'judul_prestasi.max' => ':attribute text maximal 200 digit',
            // Deskripsi Prestasi
            'deskripsi_prestasi.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_prestasi.string' => ':attribute Harus Text',
            'deskripsi_prestasi.max' => ':attribute text maximal 200 digit',
            // Isi Prestasi
            'isi_prestasi.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_prestasi' => 'Judul Prestasi',
            'deskripsi_prestasi' => 'Deksripsi Prestasi',
            'isi_prestasi' => 'Konten Prestasi',
        ];
    }
}
