<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_foto extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_foto')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_foto_kegiatan' =>'Kegiatan Lorem Ipsum',
                'foto' => 'https://www.flowbite-react.com/images/products/apple-watch.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '000000',
                'judul_foto_kegiatan' =>'Kegiatan Lorem Ipsum',
                'foto' => 'https://www.flowbite-react.com/images/products/apple-watch.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
