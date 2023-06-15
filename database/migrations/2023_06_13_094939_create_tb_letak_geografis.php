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
        Schema::create('tb_letak_geografis', function (Blueprint $table) {
            $table->id('idLetakGeografis');
            $table->string('kode_kecamatan')->unique();
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->string('judul_letak_geografis');
            $table->text('Deskripsi_letak_geografis');
            $table->text('isi_letak_geografis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_letak_geografis');
    }
};
