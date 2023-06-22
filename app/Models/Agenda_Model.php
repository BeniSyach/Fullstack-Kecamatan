<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_agenda';
    protected $primaryKey = 'idAgenda';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
