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
        Schema::create('tb_prestasi', function (Blueprint $table) {
            $table->id('idPrestasi');
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_prestasi');
            $table->string('deskripsi_prestasi');
            $table->text('isi_prestasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_prestasi');
    }
};
