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
        Schema::create('tb_detail_potensi', function (Blueprint $table) {
            $table->id('idDetailPotensi');
            $table->string('kode_kecamatan');
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->integer('potensi_id')->unique();
            $table->foreign('potensi_id')->references('idPotensi')->on('tb_list_potensi');
            $table->string('gambar_potensi');
            $table->text('konten_potensi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_detail_potensi');
    }
};
