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
        Schema::create('tb_detail_pelayanan', function (Blueprint $table) {
            $table->id('idDetailPelayanan');
            $table->string('kode_kecamatan');
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->integer('pelayanan_id')->unique();
            $table->foreign('pelayanan_id')->references('idpelayanan')->on('tb_pelayanan');
            $table->string('gambar_pelayanan');
            $table->text('konten_pelayanan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_detail_pelayanan');
    }
};
