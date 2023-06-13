<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    use HasFactory;

    protected $table = 'tb_domain_kecamatan';
    protected $primaryKey = 'idDomain';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';

    
}
