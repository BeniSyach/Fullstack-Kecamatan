<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_slider';
    protected $primaryKey = 'idSlider';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'gambar_slider',
    ];
}
