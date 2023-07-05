<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_Unduhan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_detail_unduhan';
    protected $primaryKey = 'idDetailUnduhan';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'unduhan_id',
        'dokumen',
        'jumlah_unduhan',
    ];
}
