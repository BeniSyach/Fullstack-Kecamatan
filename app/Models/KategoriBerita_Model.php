<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriBerita_Model extends Model
{
    use HasFactory;

    protected $table = 'tb_kategori_berita';
    protected $primaryKey = 'idKategoriBerita';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public function kategori_berita()
    {
        return $this->hasMany(Berita_Model::class);
    }
}
