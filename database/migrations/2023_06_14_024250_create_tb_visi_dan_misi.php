<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_visi_dan_misi', function (Blueprint $table) {
            $table->id('id_VisiDanMisi');
            $table->string('kode_kecamatan')->unique();
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->string('judul_VisiDanMisi');
            $table->string('deskripsi_VisiDanMisi');
            $table->text('isi_VisiDanMisi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_visi_dan_misi');
    }
};
