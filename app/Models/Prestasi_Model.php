<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestasi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_prestasi';
    protected $primaryKey = 'idPrestasi';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'judul_prestasi',
        'deskripsi_prestasi',
        'isi_prestasi'
    ];
}
