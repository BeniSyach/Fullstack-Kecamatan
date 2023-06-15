<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_kategori_berita extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kategori_berita')->insert([
            [
                'jenis_kategori_berita' =>'Semua',
                'created_at' =>now(),
                'updated_at' =>now()
            ],
            [
                'jenis_kategori_berita' =>'Musyawarah',
                'created_at' =>now(),
                'updated_at' =>now()
            ],
            [
                'jenis_kategori_berita' =>'Olahraga',
                'created_at' =>now(),
                'updated_at' =>now()
            ],
            [
                'jenis_kategori_berita' =>'Kesehatan',
                'created_at' =>now(),
                'updated_at' =>now()
            ],
          
        ]);
    }
}
