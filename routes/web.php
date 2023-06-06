<?php

use App\Http\Controllers\Home;
use App\Http\Controllers\Profile\AdatDanBudaya;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [Home::class,'index'])->name('home');

// Profil
Route::get('/sejarah',[Sejarah::class,'index'])->name('sejarah');
Route::get('/letak_geografis',[Letak_Geografis::class,'index'])->name('letak_geografis');
Route::get('/kependudukan',[Kependudukan::class,'index'])->name('kependududkan');
Route::get('/adat_dan_budaya',[AdatDanBudaya::class,'index'])->name('adat_dan_budaya');
Route::get('/visi_dan_misi',[VisiDanMisi::class,'index'])->name('visi_dan_misi');
Route::get('/prestasi',[Prestasi::class,'index'])->name('prestasi');
Route::get('/struktur_organisasi',[StrukturOrganisasi::class,'index'])->name('struktur_organisasi');
Route::get('/tupoksi',[Tupoksi::class,'index'])->name('tupoksi');
Route::get('/kepegawaian',[Kepegawaian::class,'index'])->name('kepegawaian');
// Publikasi
Route::get('/berita',[Berita::class,'index'])->name('berita');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
