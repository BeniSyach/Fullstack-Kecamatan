<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sejarah_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_sejarah';
    protected $primaryKey = 'idSejarah';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}
