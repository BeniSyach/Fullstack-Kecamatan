<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAdatDanBudaya extends FormRequest
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
            'judul_adatDanBudaya' => 'required|string|max:200',
            'deskripsi_adatDanBudaya' => 'required|string|max:200',
            'isi_adatDanBudaya' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Adat & Budaya
            'judul_adatDanBudaya.required' => ':attribute Tidak Boleh Kosong',
            'judul_adatDanBudaya.string' => ':attribute Harus Text',
            'judul_adatDanBudaya.max' => ':attribute text maximal 200 digit',
            // Deskripsi Adat & Budaya
            'deskripsi_adatDanBudaya.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_adatDanBudaya.string' => ':attribute Harus Text',
            'deskripsi_adatDanBudaya.max' => ':attribute text maximal 200 digit',
            // Isi Adat & Budaya
            'isi_adatDanBudaya.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_adatDanBudaya' => 'Judul Adat & Budaya',
            'deskripsi_adatDanBudaya' => 'Deksripsi Adat & Budaya',
            'isi_adatDanBudaya' => 'Konten Adat & Budaya',
        ];
    }
}
