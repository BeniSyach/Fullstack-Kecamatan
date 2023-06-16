<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_berita';
    protected $primaryKey = 'idBerita';
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';

    public function get_kategori_berita()
    {
        return $this->belongsTo(User::class);
    }

    public function get_user(){
        return $this->belongsTo(KategoriBerita_Model::class);
    }
}
