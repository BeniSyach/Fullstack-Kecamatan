<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSejarahRequest extends FormRequest
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
            'judul_sejarah' => 'required|string|max:200',
            'Deskripsi_sejarah' => 'required|string|max:200',
            'penulis_sejarah' => 'required|string|max:200',
            'jabatan_penulis_sejarah' => 'required|string|max:200',
            'isi_sejarah' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Sejarah
            'judul_sejarah.required' => ':attribute Tidak Boleh Kosong',
            'judul_sejarah.string' => ':attribute Harus Text',
            'judul_sejarah.max' => ':attribute text maximal 200 digit',
            // Deskripsi Sejarah
            'Deskripsi_sejarah.required' => ':attribute Tidak Boleh Kosong',
            'Deskripsi_sejarah.string' => ':attribute Harus Text',
            'Deskripsi_sejarah.max' => ':attribute text maximal 200 digit',
            // Penulis Sejarah
            'penulis_sejarah.required' => ':attribute Tidak Boleh Kosong',
            'penulis_sejarah.string' => ':attribute Harus Text',
            'penulis_sejarah.max' => ':attribute text maximal 200 digit',
            // Jabatan Penulis Sejarah
            'jabatan_penulis_sejarah.required' => ':attribute Tidak Boleh Kosong',
            'jabatan_penulis_sejarah.string' => ':attribute Harus Text',
            'jabatan_penulis_sejarah.max' => ':attribute text maximal 200 digit',
            // Isi sejarah
            'isi_sejarah.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_sejarah' => 'Judul Sejarah',
            'Deskripsi_sejarah' => 'Deksripsi Sejarah',
            'penulis_sejarah' => 'Penulis Sejarah',
            'jabatan_penulis_sejarah' => 'Jabatan Penulis Sejarah',
            'isi_sejarah' => 'Konten Sejarah',
        ];
    }
}
