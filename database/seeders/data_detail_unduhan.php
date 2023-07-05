<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_detail_unduhan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_detail_unduhan')->insert([
            [
                'kode_kecamatan' => '000000',
                'unduhan_id' => 1,
                'dokumen' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
                'jumlah_unduhan' => 1,
                'created_at' =>now(),
                'updated_at' =>now()
            ],
            [
                'kode_kecamatan' => '000000',
                'unduhan_id' => 2,
                'dokumen' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
                'jumlah_unduhan' => 1,
                'created_at' =>now(),
                'updated_at' =>now()
            ],
        ]);
    }
}
