<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_sejarah_kecamatan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_sejarah')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_sejarah' =>'Sejarah Web Kecamatan',
                'Deskripsi_sejarah' => 'Ini adalah Sejarah Web kecamatan Dibangun',
                'isi_sejarah' =>'Web Kecamatan Ini Menggunakan Teknologi PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10',
                'penulis_sejarah' => 'Beni Syach Setiawan Ketaren',
                'jabatan_penulis_sejarah' =>'Programmer',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_sejarah' =>'Sejarah Web Kecamatan Bangun Purba',
                'Deskripsi_sejarah' => 'Ini adalah Sejarah Web kecamatan Bangun Purba Dibangun',
                'isi_sejarah' =>'Web Kecamatan Ini Menggunakan Teknologi PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10',
                'penulis_sejarah' => 'Beni Syach Setiawan Ketaren',
                'jabatan_penulis_sejarah' =>'Programmer Diskominfostan Deli Serdang',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
