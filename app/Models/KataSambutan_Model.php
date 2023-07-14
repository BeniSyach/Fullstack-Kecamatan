<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KataSambutan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_kata_sambutan';
    protected $primaryKey = 'idKataSambutan';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'nama_kepala_camat',
        'gambar_camat',
        'judul_kataSambutan',
        'isi_kataSambutan',
    ];
}
