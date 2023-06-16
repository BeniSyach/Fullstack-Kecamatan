<?php

use App\Http\Controllers\Home;
use App\Http\Controllers\Kontak_Kami;
use App\Http\Controllers\Profile\AdatDanBudaya;
use App\Http\Controllers\Profile\KataSambutan;
use App\Http\Controllers\Profile\Kepegawaian;
use App\Http\Controllers\Profile\Kependudukan;
use App\Http\Controllers\Profile\Letak_Geografis;
use App\Http\Controllers\Profile\Prestasi;
use App\Http\Controllers\Profile\Sejarah;
use App\Http\Controllers\Profile\StrukturOrganisasi;
use App\Http\Controllers\Profile\Tupoksi;
use App\Http\Controllers\Profile\VisiDanMisi;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Publikasi\Berita;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Home::class,'index'])->name('home');

// Profil
Route::get('/profil/sejarah',[Sejarah::class,'index'])->name('sejarah');
Route::get('/profil/letak_geografis',[Letak_Geografis::class,'index'])->name('letak_geografis');
Route::get('/profil/kependudukan',[Kependudukan::class,'index'])->name('kependududkan');
Route::get('/profil/adat_dan_budaya',[AdatDanBudaya::class,'index'])->name('adat_dan_budaya');
Route::get('/profil/visi_dan_misi',[VisiDanMisi::class,'index'])->name('visi_dan_misi');
Route::get('/profil/prestasi',[Prestasi::class,'index'])->name('prestasi');
Route::get('/profil/struktur_organisasi',[StrukturOrganisasi::class,'index'])->name('struktur_organisasi');
Route::get('/profil/tupoksi',[Tupoksi::class,'index'])->name('tupoksi');
Route::get('/profil/kepegawaian',[Kepegawaian::class,'index'])->name('kepegawaian');

// kata Sambutan
Route::get('/profil/kata_sambutan',[KataSambutan::class,'index'])->name('kata_sambutan');

// Publikasi
Route::get('/publikasi/berita',[Berita::class,'index'])->name('berita');
Route::get('/publikasi/berita/{slug}',[Berita::class,'detailBerita'])->name('detailBerita');

// Kontak Kami
Route::get('/kontak_kami',[Kontak_Kami::class,'index'])->name('kontak_kami');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
