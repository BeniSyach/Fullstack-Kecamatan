<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_struktur_organisasi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_struktur_organisasi')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_struktur_organisasi' => 'Struktur Organisasi Web Kecamatan',
                'deskripsi_struktur_organisasi' => 'ini adalah data Struktur Organisasi di web Kecamatan',
                'isi_struktur_organisasi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'judul_struktur_organisasi' => 'Struktur Organisasi Web Kecamatan Bangun Purba',
                'deskripsi_struktur_organisasi' => 'ini adalah data Struktur Organisasi di web Kecamatan Bangun Purba',
                'isi_struktur_organisasi' => '<p>Web Kecamatan Bangun Purba Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }
}
