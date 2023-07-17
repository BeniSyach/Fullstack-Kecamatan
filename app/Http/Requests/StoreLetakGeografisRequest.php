<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLetakGeografisRequest extends FormRequest
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
            'judul_letak_geografis' => 'required|string|max:200',
            'Deskripsi_letak_geografis' => 'required|string|max:200',
            'isi_letak_geografis' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Letak Geografis
            'judul_letak_geografis.required' => ':attribute Tidak Boleh Kosong',
            'judul_letak_geografis.string' => ':attribute Harus Text',
            'judul_letak_geografis.max' => ':attribute text maximal 200 digit',
            // Deskripsi Letak Geografis
            'Deskripsi_letak_geografis.required' => ':attribute Tidak Boleh Kosong',
            'Deskripsi_letak_geografis.string' => ':attribute Harus Text',
            'Deskripsi_letak_geografis.max' => ':attribute text maximal 200 digit',
            // Isi Letak Geografis
            'isi_letak_geografis.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_letak_geografis' => 'Judul Letak Geografis',
            'Deskripsi_letak_geografis' => 'Deksripsi Letak Geografis',
            'isi_letak_geografis' => 'Konten Letak Geografis',
        ];
    }
}
