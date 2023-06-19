<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adat_dan_budaya_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_adat_dan_budaya';
    protected $primaryKey = 'idAdatDanBudaya';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
