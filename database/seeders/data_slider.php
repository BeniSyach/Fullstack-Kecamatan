<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_slider extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_slider')->insert([
            [
                'kode_kecamatan' => '000000',
                'gambar_slider' => 'https://deliserdangkab.go.id/logonya.png',
                'created_at' =>now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '000000',
                'gambar_slider' => 'https://informasijurnalis.com/wp-content/uploads/2023/01/IMG-20220202-WA0068.jpg',
                'created_at' =>now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '000000',
                'gambar_slider' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
                'created_at' =>now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'gambar_slider' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
                'created_at' =>now(),
                'updated_at' => now()
            ],
        ]);
    }
}
