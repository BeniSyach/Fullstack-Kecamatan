<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_video';
    protected $primaryKey = 'idVideo';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'judul_video_kegiatan',
        'video'
    ];
}
