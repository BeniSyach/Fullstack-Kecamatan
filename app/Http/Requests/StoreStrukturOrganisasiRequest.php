<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStrukturOrganisasiRequest extends FormRequest
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
            'judul_struktur_organisasi' => 'required|string|max:200',
            'deskripsi_struktur_organisasi' => 'required|string|max:200',
            'isi_struktur_organisasi' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Struktur Organisasi
            'judul_struktur_organisasi.required' => ':attribute Tidak Boleh Kosong',
            'judul_struktur_organisasi.string' => ':attribute Harus Text',
            'judul_struktur_organisasi.max' => ':attribute text maximal 200 digit',
            // Deskripsi Struktur Organisasi
            'deskripsi_struktur_organisasi.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_struktur_organisasi.string' => ':attribute Harus Text',
            'deskripsi_struktur_organisasi.max' => ':attribute text maximal 200 digit',
            // Isi Struktur Organisasi
            'isi_struktur_organisasi.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_struktur_organisasi' => 'Judul Struktur Organisasi',
            'deskripsi_struktur_organisasi' => 'Deksripsi Struktur Organisasi',
            'isi_struktur_organisasi' => 'Konten Struktur Organisasi',
        ];
    }
}
