<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Potensi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_list_potensi';
    protected $primaryKey = 'idPotensi';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'judul_potensi',
        'slug_potensi',
    ];
}
