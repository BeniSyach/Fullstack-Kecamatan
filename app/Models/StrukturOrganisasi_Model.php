<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrukturOrganisasi_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_struktur_organisasi';
    protected $primaryKey = 'idStrukturOrganisasi';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
