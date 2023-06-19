<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisiDanMisi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_visi_dan_misi';
    protected $primaryKey = 'id_VisiDanMisi';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
