<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KataSambutan_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_kata_sambutan';
    protected $primaryKey = 'idKataSambutan';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}