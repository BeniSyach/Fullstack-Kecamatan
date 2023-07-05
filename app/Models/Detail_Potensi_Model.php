<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_Potensi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_detail_potensi';
    protected $primaryKey = 'idDetailPotensi';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'potensi_id',
        'gambar_potensi',
        'konten_potensi',
    ];
}
