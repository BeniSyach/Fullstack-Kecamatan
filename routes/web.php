<?php

use App\Http\Controllers\Admin\AdminKataSambutan;
use App\Http\Controllers\Admin\AdminPelayanan;
use App\Http\Controllers\Admin\AdminPotensi;
use App\Http\Controllers\Admin\AdminUnduhan;
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
use App\Http\Controllers\Admin\Publikasi\AdminAgenda;
use App\Http\Controllers\Admin\Publikasi\AdminBerita;
use App\Http\Controllers\Admin\Publikasi\AdminFotoKegiatan;
use App\Http\Controllers\Admin\Publikasi\AdminVideoKegiatan;
use App\Http\Controllers\Admin\Publikasi\AdminWisata;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Home;
use App\Http\Controllers\Kontak_Kami;
use App\Http\Controllers\PelayananController;
use App\Http\Controllers\PotensiController;
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
use App\Http\Controllers\UnduhanController;
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


// potensi
Route::get('/api/potensi/{id}',[PotensiController::class,'GetAllApi'])->name('apigetAllPotensi');
Route::get('/potensi/detail/{slug}',[PotensiController::class,'detail'])->name('detailPotensi');

// Pelayanan
Route::get('/api/pelayanan/{id}',[PelayananController::class,'GetAllApi'])->name('apigetAllPelayanan');
Route::get('/pelayanan/detail/{slug}',[PelayananController::class,'detail'])->name('detailPelayanan');

// Statistik

// Unduhan
Route::get('/api/unduhan/{id}',[UnduhanController::class,'GetAllApi'])->name('apigetAllUnduhan');
Route::get('/unduhan/detail/{slug}',[UnduhanController::class,'detail'])->name('detailUnduhan');

// Kontak Kami
Route::get('/kontak_kami',[Kontak_Kami::class,'index'])->name('kontak_kami');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Edit User
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // list Kecamatan
    Route::get('/admin/list_kecamatan',[ListKecamatan::class,'index'])->name('listKecamatan');
    Route::get('/admin/list_kecamatan/create',[ListKecamatan::class,'create'])->name('createKecamatan');
    Route::post('/admin/list_kecamatan/tambah',[ListKecamatan::class,'store'])->name('tambahDataKecamatan');
    Route::get('/admin/list_kecamatan/edit/{id}',[ListKecamatan::class,'edit'])->name('EditDataKecamatan');
    Route::put('/admin/list_kecamatan/update/{id}',[ListKecamatan::class,'update'])->name('updateDataKecamatan');
    Route::delete('/admin/list_kecamatan/hapus/{id}',[ListKecamatan::class,'hapus'])->name('HapusDataKecamatan');

    // list User
    Route::get('/admin/list_user', [UsersController::class,'index'])->name('listUser');
    Route::get('/admin/list_user/create',[UsersController::class,'create'])->name('createUsers');
    Route::post('/admin/list_user/tambah',[UsersController::class,'store'])->name('tambahUsers');
    Route::get('/admin/list_user/edit/{id}',[UsersController::class,'edit'])->name('editUsers');
    Route::put('/admin/list_user/update/{id}',[UsersController::class,'update'])->name('updateUsers');
    Route::delete('/admin/list_user/hapus/{id}',[UsersController::class,'hapus'])->name('hapusUsers');

    // list Slider
    Route::get('/admin/slider',[SliderController::class,'index'])->name('listSlider');
    Route::get('/admin/tambah_slider',[SliderController::class,'create'])->name('createSlider');
    Route::post('/admin/slider/tambah',[SliderController::class,'store'])->name('tambahSlider');
    Route::get('/admin/slider/edit/{id}',[SliderController::class,'edit'])->name('editSlider');
    Route::post('/admin/slider/update/{id}',[SliderController::class,'update'])->name('updateSlider');
    Route::delete('/admin/slider/hapus/{id}',[SliderController::class,'hapus'])->name('hapusSlider');

    // Kata Sambutan
    Route::get('/admin/kata_sambutan',[AdminKataSambutan::class,'index'])->name('AdminKataSambutan');
    Route::put('/admin/kata_sambutan/{id}',[AdminKataSambutan::class,'update'])->name('UpdateKataSambutan');

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
    Route::put('/admin/prestasi/update/{id}',[AdminPrestasi::class,'updatePrestasi'])->name('updatePrestasi');

    // Struktur Organisasi
    Route::get('/admin/struktur_organisasi',[AdminStrukturOrganisasi::class,'index'])->name('AdminStrukturOrganisasi');
    Route::put('/admin/strukturOrganisasi/update/{id}',[AdminStrukturOrganisasi::class,'updateStrukturOrganisasi'])->name('update_struktur_organisasi');

    // Tupoksi
    Route::get('/admin/tupoksi',[AdminTupoksi::class,'index'])->name('adminTupoksi');
    Route::put('/admin/tupoksi/update/{id}',[AdminTupoksi::class,'updateTupoksi'])->name('updateTupoksi');
    
    // Kepegawaian
    Route::get('/admin/kepegawaian',[AdminKepegawaian::class,'index'])->name('AdminKepegawaian');
    Route::get('/admin/kepegawaian/create',[AdminKepegawaian::class,'create'])->name('createPegawai');
    Route::post('/admin/kepegawaian/tambah',[AdminKepegawaian::class,'store'])->name('tambahPegawai');
    Route::get('/admin/kepegawaian/edit/{id}',[AdminKepegawaian::class,'edit'])->name('editPegawai');
    Route::put('/admin/kepegawaian/update/{id}',[AdminKepegawaian::class,'update'])->name('updatePegawai');
    Route::delete('/admin/kepegawaian/hapus/{id}',[AdminKepegawaian::class,'hapus'])->name('hapusPegawai');

    // Publikasi Admin
    // Berita
    Route::get('/admin/berita',[AdminBerita::class,'index'])->name('AdminBerita');
    Route::get('/admin/berita/create',[AdminBerita::class,'create'])->name('createBerita');
    Route::post('/admin/berita/tambah',[AdminBerita::class,'store'])->name('tambahBerita');
    Route::get('/admin/berita/edit/{id}',[AdminBerita::class,'edit'])->name('editBerita');
    Route::put('/admin/berita/update/{id}',[AdminBerita::class,'update'])->name('updateBerita');
    Route::delete('/admin/berita/hapus/{id}',[AdminBerita::class,'hapus'])->name('hapusBerita');

    // Video Kegiatan
    Route::get('/admin/video_kegiatan',[AdminVideoKegiatan::class,'index'])->name('AdminVideoKegiatan');
    Route::get('/admin/video_kegiatan/create',[AdminVideoKegiatan::class,'create'])->name('createVideoKegiatan');
    Route::post('/admin/video_kegiatan/tambah',[AdminVideoKegiatan::class,'store'])->name('tambahVideoKegiatan');
    Route::get('/admin/video_kegiatan/edit/{id}',[AdminVideoKegiatan::class,'edit'])->name('editVideoKegiatan');
    Route::put('/admin/video_kegiatan/update/{id}',[AdminVideoKegiatan::class,'update'])->name('updateVideoKegiatan');
    Route::delete('/admin/video_kegiatan/hapus/{id}',[AdminVideoKegiatan::class,'hapus'])->name('hapusVideoKegiatan');

    // Foto Kegiatan
    Route::get('/admin/foto_kegiatan',[AdminFotoKegiatan::class,'index'])->name('AdminFotoKegiatan');
    Route::get('/admin/foto_kegiatan/create',[AdminFotoKegiatan::class,'create'])->name('createFotoAdminFotoKegiatan');
    Route::post('/admin/foto_kegiatan/tambah',[AdminFotoKegiatan::class,'store'])->name('tambahFotoAdminFotoKegiatan');
    Route::get('/admin/foto_kegiatan/edit/{id}',[AdminFotoKegiatan::class,'edit'])->name('editFotoAdminFotoKegiatan');
    Route::put('/admin/foto_kegiatan/update/{id}',[AdminFotoKegiatan::class,'update'])->name('updateFotoAdminFotoKegiatan');
    Route::delete('/admin/foto_kegiatan/hapus/{id}',[AdminFotoKegiatan::class,'hapus'])->name('hapusFotoAdminFotoKegiatan');

    // Wisata
    Route::get('/admin/wisata',[AdminWisata::class,'index'])->name('AdminWisata');
    Route::get('/admin/wisata/create',[AdminWisata::class,'create'])->name('createWisata');
    Route::post('/admin/wisata/tambah',[AdminWisata::class,'store'])->name('tambahWisata');
    Route::get('/admin/wisata/edit/{id}',[AdminWisata::class,'edit'])->name('editWisata');
    Route::put('/admin/wisata/update/{id}',[AdminWisata::class,'update'])->name('updateWisata');
    Route::delete('/admin/wisata/hapus/{id}',[AdminWisata::class,'hapus'])->name('hapusWisata');

    // Agenda
    Route::get('/admin/agenda',[AdminAgenda::class,'index'])->name('AdminAgenda');
    Route::get('/admin/agenda/create',[AdminAgenda::class,'create'])->name('createAgenda');
    Route::post('/admin/agenda/tambah',[AdminAgenda::class,'store'])->name('tambahAgenda');
    Route::get('/admin/agenda/edit/{id}',[AdminAgenda::class,'edit'])->name('editAgenda');
    Route::put('/admin/agenda/update/{id}',[AdminAgenda::class,'update'])->name('updateAgenda');
    Route::delete('/admin/agenda/hapus/{id}',[AdminAgenda::class,'hapus'])->name('hapusAgenda');

    // Potensi
    Route::get('/admin/potensi',[AdminPotensi::class,'index'])->name('AdminPotensi');
    Route::get('/admin/potensi/create',[AdminPotensi::class,'create'])->name('createPotensi');
    Route::post('/admin/potensi/tambah',[AdminPotensi::class,'store'])->name('tambahPotensi');
    Route::get('/admin/potensi/edit/{id}',[AdminPotensi::class,'edit'])->name('editPotensi');
    Route::put('/admin/potensi/update/{id}',[AdminPotensi::class,'update'])->name('updatePotensi');
    Route::delete('/admin/potensi/hapus/{id}',[AdminPotensi::class,'hapus'])->name('hapusPotensi');
    Route::get('/admin/potensi/detail_edit/{id}',[AdminPotensi::class,'detail_edit'])->name('editDetailPotensi');
    Route::post('/admin/potensi/update_detail/{id}',[AdminPotensi::class,'update_detail'])->name('updateDetailPotensi');

    // Pelayanan
    Route::get('/admin/pelayanan',[AdminPelayanan::class,'index'])->name('AdminPelayanan');
    Route::get('/admin/pelayanan/create',[AdminPelayanan::class,'create'])->name('createPelayanan');
    Route::post('/admin/pelayanan/tambah',[AdminPelayanan::class,'store'])->name('tambahPelayanan');
    Route::get('/admin/pelayanan/edit/{id}',[AdminPelayanan::class,'edit'])->name('editPelayanan');
    Route::put('/admin/pelayanan/update/{id}',[AdminPelayanan::class,'update'])->name('updatePelayanan');
    Route::delete('/admin/pelayanan/hapus/{id}',[AdminPelayanan::class,'hapus'])->name('hapusPelayanan');
    Route::get('/admin/pelayanan/detail_edit/{id}',[AdminPelayanan::class,'detail_edit'])->name('editDetailPeyanan');
    Route::post('/admin/pelayanan/update_detail/{id}',[AdminPelayanan::class,'update_detail'])->name('updateDetailPeyanan');

    // Statistik

    // Unduhan
    Route::get('/admin/unduhan',[AdminUnduhan::class,'index'])->name('AdminUnduhan');
    Route::get('/admin/unduhan/create',[AdminUnduhan::class,'create'])->name('createUnduhan');
    Route::post('/admin/unduhan/tambah',[AdminUnduhan::class,'store'])->name('tambahUnduhan');
    Route::get('/admin/unduhan/edit/{id}',[AdminUnduhan::class,'edit'])->name('editUnduhan');
    Route::put('/admin/unduhan/update/{id}',[AdminUnduhan::class,'update'])->name('updateUnduhan');
    Route::delete('/admin/unduhan/hapus/{id}',[AdminUnduhan::class,'hapus'])->name('hapusUnduhan');
    Route::get('/admin/unduhan/detail_edit/{id}',[AdminUnduhan::class,'detail_edit'])->name('editDetailUnduhan');
    Route::post('/admin/unduhan/update_detail/{id}',[AdminUnduhan::class,'update_detail'])->name('updateDetailUnduhan');
});

require __DIR__.'/auth.php';
