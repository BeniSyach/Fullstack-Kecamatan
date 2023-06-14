<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_visi_dan_misi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_visi_dan_misi')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_VisiDanMisi' => 'Visi & Misi Web Kecamatan',
                'deskripsi_VisiDanMisi' => 'ini adalah data Visi & Misi di web Kecamatan',
                'isi_VisiDanMisi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'judul_VisiDanMisi' => 'Visi & Misi Web Kecamatan Bangun Purba',
                'deskripsi_VisiDanMisi' => 'ini adalah data Visi & Misi di web Kecamatan Bangun Purba',
                'isi_VisiDanMisi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
