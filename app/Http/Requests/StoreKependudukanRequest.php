<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKependudukanRequest extends FormRequest
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
            'judul_kependudukan' => 'required|string|max:200',
            'deskripsi_kependudukan' => 'required|string|max:200',
            'isi_kependudukan' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Kependudukan
            'judul_kependudukan.required' => ':attribute Tidak Boleh Kosong',
            'judul_kependudukan.string' => ':attribute Harus Text',
            'judul_kependudukan.max' => ':attribute text maximal 200 digit',
            // Deskripsi Kependudukan
            'deskripsi_kependudukan.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_kependudukan.string' => ':attribute Harus Text',
            'deskripsi_kependudukan.max' => ':attribute text maximal 200 digit',
            // Isi Kependudukan
            'isi_kependudukan.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_kependudukan' => 'Judul Kependudukan',
            'deskripsi_kependudukan' => 'Deksripsi Kependudukan',
            'isi_kependudukan' => 'Konten Kependudukan',
        ];
    }
}
