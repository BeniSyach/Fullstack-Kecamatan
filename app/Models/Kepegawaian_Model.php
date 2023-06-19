<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kepegawaian_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_kepegawaian';
    protected $primaryKey = 'idKepegawaian';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
