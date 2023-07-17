<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_foto';
    protected $primaryKey = 'idFoto';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'judul_foto_kegiatan',
        'foto'
    ];
}
