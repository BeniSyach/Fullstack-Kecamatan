<?php

namespace App\Http\Requests;

use App\Models\Kecamatan;
use Illuminate\Foundation\Http\FormRequest;

class UpdateKecamatanRequest extends FormRequest
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
            'judul_website' => 'required|string|max:100',
            'domain_kecamatan' => 'required|string|max:50',
            'kode_kecamatan' => 'required|numeric|max:130000',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Website
            'judul_website.required' => ':attribute Tidak Boleh Kosong',
            'judul_website.string' => ':attribute Harus Text',
            'judul_website.max' => ':attribute text maximal 100 digit',
            // Domain Website
            'domain_kecamatan.required' => ':attribute Tidak Boleh Kosong',
            'domain_kecamatan.string' => ':attribute Harus Text',
            'domain_kecamatan.max' => ':attribute maximal 100 digit',
            // kode Kecamatan
            'kode_kecamatan.required' => ':attribute Tidak Boleh Kosong',
            'kode_kecamatan.numeric' => ':attribute Harus angka',
            'kode_kecamatan.max' => ':attribute maximal dibawah 130.000',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_website' => 'Judul Website',
            'domain_kecamatan' => 'Domain Kecamatan',
            'kode_kecamatan' => 'Kode Kecamatan',
        ];
    }
}
