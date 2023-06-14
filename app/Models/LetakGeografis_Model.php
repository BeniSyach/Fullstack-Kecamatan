<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LetakGeografis_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_letak_geografis';
    protected $primaryKey = 'idLetakGeografis';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}
