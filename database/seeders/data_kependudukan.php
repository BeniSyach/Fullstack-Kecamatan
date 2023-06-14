<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_kependudukan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kependudukan')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_kependudukan' => 'Kependudukan Web Kecamatan',
                'deskripsi_kependudukan' => 'ini adalah data kependudukan di web Kecamatan',
                'isi_kependudukan' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'judul_kependudukan' => 'Kependudukan Web Kecamatan Bangun Purba',
                'deskripsi_kependudukan' => 'ini adalah data kependudukan di web Kecamatan Bangun Purba',
                'isi_kependudukan' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
