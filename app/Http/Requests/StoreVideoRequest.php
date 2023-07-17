<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVideoRequest extends FormRequest
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
            'judul_video_kegiatan' => 'required|string|max:200',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Prestasi
            'judul_video_kegiatan.required' => ':attribute Tidak Boleh Kosong',
            'judul_video_kegiatan.string' => ':attribute Harus Text',
            'judul_video_kegiatan.max' => ':attribute text maximal 200 digit',

        ];
    }

    public function attributes(): array
    {
        return [
            'judul_video_kegiatan' => 'Judul Video',
        ];
    }
}
