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
        Schema::create('tb_kepegawaian', function (Blueprint $table) {
            $table->id('idKepegawaian');
            $table->string('kode_kecamatan');
            $table->string('nama_pegawai');
            $table->string('gambar_pegawai')->nullable();
            $table->string('jabatan_pegawai');
            $table->string('motivasi_pegawai');
            $table->string('link_facebook')->nullable();
            $table->string('link_instagram')->nullable();
            $table->string('link_twitter')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_kepegawaian');
    }
};
