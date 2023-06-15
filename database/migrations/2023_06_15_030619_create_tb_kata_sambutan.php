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
        Schema::create('tb_kata_sambutan', function (Blueprint $table) {
            $table->id('idKataSambutan');
            $table->string('kode_kecamatan')->unique();
            $table->string('nama_kepala_camat');
            $table->string('gambar_camat');
            $table->string('judul_kataSambutan');
            $table->text('isi_kataSambutan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_kata_sambutan');
    }
};
