<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_Pelayanan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_detail_pelayanan';
    protected $primaryKey = 'idDetailPelayanan';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'pelayanan_id',
        'gambar_pelayanan',
        'konten_pelayanan',
    ];
}
