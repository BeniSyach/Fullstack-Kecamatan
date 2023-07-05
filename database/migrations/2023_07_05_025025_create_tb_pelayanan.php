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
        Schema::create('tb_pelayanan', function (Blueprint $table) {
            $table->id('idPelayanan');
            $table->string('kode_kecamatan');
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->string('judul_pelayanan');
            $table->string('slug_pelayanan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_pelayanan');
    }
};
