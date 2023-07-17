<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVisiMisiRequest extends FormRequest
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
            'judul_VisiDanMisi' => 'required|string|max:200',
            'deskripsi_VisiDanMisi' => 'required|string|max:200',
            'isi_Visi' => 'required',
            'isi_Misi' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Visi & Misi
            'judul_VisiDanMisi.required' => ':attribute Tidak Boleh Kosong',
            'judul_VisiDanMisi.string' => ':attribute Harus Text',
            'judul_VisiDanMisi.max' => ':attribute text maximal 200 digit',
            // Deskripsi Visi & Misi
            'deskripsi_VisiDanMisi.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_VisiDanMisi.string' => ':attribute Harus Text',
            'deskripsi_VisiDanMisi.max' => ':attribute text maximal 200 digit',
            // Isi Visi & Misi
            'isi_Visi.required' => ':attribute Tidak Boleh Kosong',
            'isi_Misi.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_VisiDanMisi' => 'Judul Visi & Misi',
            'deskripsi_VisiDanMisi' => 'Deksripsi Visi & Misi',
            'isi_Visi' => 'Konten Visi',
            'isi_Misi' => 'Konten Misi',
        ];
    }
}
