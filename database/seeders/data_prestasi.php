<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_prestasi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_prestasi')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_prestasi' =>'prestasi Web Kecamatan',
                'deskripsi_prestasi' => 'Ini adalah prestasi Web kecamatan Dibangun',
                'isi_prestasi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_prestasi' =>'prestasi Web Kecamatan Bangun Purba ',
                'deskripsi_prestasi' => 'Ini adalah prestasi Web kecamatan Bangun Purba Dibangun',
                'isi_prestasi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
