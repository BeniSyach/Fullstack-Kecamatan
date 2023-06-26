<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sejarah_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_sejarah';
    protected $primaryKey = 'idSejarah';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'judul_sejarah',
        'Deskripsi_sejarah',
        'penulis_sejarah',
        'jabatan_penulis_sejarah',
        'isi_sejarah',
    ];
}
