<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kependudukan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_kependudukan';
    protected $primaryKey = 'idKependudukan';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
