<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_video extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_video')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_video_kegiatan' =>'Kegiatan Lorem Ipsum',
                'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/343WrHr8zYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '000000',
                'judul_video_kegiatan' =>'Kegiatan Lorem Ipsum',
                'video' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/343WrHr8zYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
