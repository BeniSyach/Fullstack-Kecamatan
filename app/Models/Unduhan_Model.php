<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unduhan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_list_unduhan';
    protected $primaryKey = 'idUnduhan';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
        'kode_kecamatan',
        'judul_unduhan',
        'slug_unduhan',
    ];
}
