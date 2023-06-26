<?php

use App\Http\Controllers\Admin\AdminKataSambutan;
use App\Http\Controllers\KataSambutan;
use App\Http\Controllers\Admin\ListKecamatan;
use App\Http\Controllers\Admin\Profile\AdminAdatDanBudaya;
use App\Http\Controllers\Admin\Profile\AdminKepegawaian;
use App\Http\Controllers\Admin\Profile\AdminKependudukan;
use App\Http\Controllers\Admin\Profile\AdminLetakGeografis;
use App\Http\Controllers\Admin\Profile\AdminPrestasi;
use App\Http\Controllers\Admin\Profile\AdminSejarah;
use App\Http\Controllers\Admin\Profile\AdminStrukturOrganisasi;
use App\Http\Controllers\Admin\Profile\AdminTupoksi;
use App\Http\Controllers\Admin\Profile\AdminVisiDanMisi;
use App\Http\Controllers\Admin\Publikasi\AdminBerita;
use App\Http\Controllers\Admin\Publikasi\AdminFotoKegiatan;
use App\Http\Controllers\Admin\Publikasi\AdminVideoKegiatan;
use App\Http\Controllers\Admin\Publikasi\AdminWisata;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Home;
use App\Http\Controllers\Kontak_Kami;
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
use App\Http\Controllers\Publikasi\Agenda;
use App\Http\Controllers\Publikasi\Berita;
use App\Http\Controllers\Publikasi\FotoKegiatan;
use App\Http\Controllers\Publikasi\VideoKegiatan;
use App\Http\Controllers\Publikasi\Wisata;
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
Route::get('/publikasi/video_kegiatan',[VideoKegiatan::class,'index'])->name('videoKegiatan');
Route::get('/publikasi/foto_kegiatan',[FotoKegiatan::class,'index'])->name('fotoKegiatan');
Route::get('/publikasi/wisata',[Wisata::class,'index'])->name('wisata');
Route::get('/publikasi/wisata/{slug}',[Wisata::class,'detailWisata'])->name('detailWisata');
Route::get('/publikasi/agenda',[Agenda::class,'index'])->name('agenda');

// Kontak Kami
Route::get('/kontak_kami',[Kontak_Kami::class,'index'])->name('kontak_kami');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // list Kecamatan
    Route::get('/admin/list_kecamatan',[ListKecamatan::class,'index'])->name('listKecamatan');

    // list User
    Route::get('/admin/list_user', [UsersController::class,'index'])->name('listUser');

    // list Slider
    Route::get('/admin/slider',[SliderController::class,'index'])->name('listSlider');

    // Kata Sambutan
    Route::get('/admin/kata_sambutan',[AdminKataSambutan::class,'index'])->name('AdminKataSambutan');

    // Profile admin
    // sejarah
    Route::get('/admin/sejarah',[AdminSejarah::class,'index'])->name('AdminSejarah');
    Route::put('admin/sejarah/update_sejarah/{id}',[AdminSejarah::class,'updateSejarah'])->name('updateSejarah');

    // Letak Geografis
    Route::get('/admin/letak_geografis',[AdminLetakGeografis::class,'index'])->name('Adminletakgeografis');
    Route::put('admin/letak_gografis/update_letak_geografis/{id}',[AdminLetakGeografis::class,'updateLetakGeografis'])->name('updateLetakGeografis');

    // Kependudukan
    Route::get('/admin/kependudukan',[AdminKependudukan::class,'index'])->name('AdminKependudukan');
    Route::put('admin/kependudukan/update_kependudukan/{id}',[AdminKependudukan::class,'updateKependudukan'])->name('updateKependudukan');

    // Adat Dan Budaya
    Route::get('/admin/adatdanbudaya',[AdminAdatDanBudaya::class,'index'])->name('AdatDanBudaya');
    Route::put('/admin/adatdanbudaya/update/{id}',[AdminAdatDanBudaya::class,'updateAdatDanBudaya'])->name('updateAdatDanBudaya');

    // Visi Dan Misi
    Route::get('/admin/visi_dan_misi',[AdminVisiDanMisi::class,'index'])->name('adminVisiDanMisi');
    Route::put('/admin/visiMisi/update/{id}',[AdminVisiDanMisi::class,'updateVisiMisi'])->name('updateVisiMisi');

    // Prestasi
    Route::get('/admin/prestasi',[AdminPrestasi::class,'index'])->name('AdminPrestasi');

    // Struktur Organisasi
    Route::get('/admin/struktur_organisasi',[AdminStrukturOrganisasi::class,'index'])->name('AdminStrukturOrganisasi');

    // Tupoksi
    Route::get('/admin/tupoksi',[AdminTupoksi::class,'index'])->name('adminTupoksi');
    
    // Kepegawaian
    Route::get('/admin/kepegawaian',[AdminKepegawaian::class,'index'])->name('AdminKepegawaian');

    // Publikasi Admin
    Route::get('/admin/berita',[AdminBerita::class,'index'])->name('AdminBerita');
    Route::get('/admin/video_kegiatan',[AdminVideoKegiatan::class,'index'])->name('AdminVideoKegiatan');
    Route::get('/admin/foto_kegiatan',[AdminFotoKegiatan::class,'index'])->name('AdminFotoKegiatan');
    Route::get('/admin/wisata',[AdminWisata::class,'index'])->name('AdminWisata');
});

require __DIR__.'/auth.php';
