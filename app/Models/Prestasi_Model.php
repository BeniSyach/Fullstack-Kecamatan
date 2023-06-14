<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestasi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_prestasi';
    protected $primaryKey = 'idPrestasi';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}
