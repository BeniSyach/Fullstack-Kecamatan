<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_kepegawaian extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kepegawaian')->insert([
            [
                'kode_kecamatan' => '000000',
                'nama_pegawai' => 'Beni Syach',
                'gambar_pegawai' => '',
                'jabatan_pegawai' => 'Programmer',
                'motivasi_pegawai' => 'Tetap Semangat Pantang Menyerah',
                'link_facebook' =>'',
                'link_instagram' =>'',
                'link_twitter' =>''
            ], 
            [
                'kode_kecamatan' => '000000',
                'nama_pegawai' => 'setiawan',
                'gambar_pegawai' => '',
                'jabatan_pegawai' => 'Programmer',
                'motivasi_pegawai' => 'Tetap Semangat Pantang Menyerah',
                'link_facebook' =>'',
                'link_instagram' =>'',
                'link_twitter' =>''
            ], 
        ]);
    }
}
