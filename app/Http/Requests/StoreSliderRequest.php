<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSliderRequest extends FormRequest
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
            'gambar_slider' => 'required|image|mimes:jpeg,jpg,png,gif|dimensions:max_width=1000,max_height=250|max:5000'
        ];
    }

    public function messages(): array
    {
        return [
            'gambar_slider.required' => ':attribute Tidak Boleh Kosong',
            'gambar_slider.image' => ':attribute harus foto/gambar',
            'gambar_slider.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_slider.max' => ':attribute tidak lebih dari 5 MB',
            'gambar_slider.dimensions' => ':attribute ukuran maximal lebar : 1000 pixel dan tinggi : 250 Pixel',
        ];
    }

    public function attributes(): array
    {
        return [
            'gambar_slider' => 'Slider',
        ];
    }
}
