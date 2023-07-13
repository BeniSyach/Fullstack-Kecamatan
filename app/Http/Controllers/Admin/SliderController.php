<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSliderRequest;
use App\Http\Requests\UpdateSliderRequest;
use App\Models\Kecamatan;
use App\Models\Slider_Model;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class SliderController extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil gambar slider melalui kode kecamatan
        $get_all_slider = Slider_Model::where('kode_kecamatan',$get_kd_kecamatan)->get();

        
        return Inertia::render('Admin/Slider',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllSlider' => $get_all_slider
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/TambahDataSlider');
    }

    public function store(StoreSliderRequest $request)
    {
        $request->validated();

        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $imageName = time().'.'.$request->gambar_slider->extension();
        $uploadedImage = $request->gambar_slider->move(public_path('images'), $imageName);
        $imagePath = 'images/' . $imageName;

        $slider = new Slider_Model();
        $slider->kode_kecamatan = $get_kd_kecamatan;
        $slider->gambar_slider = $imagePath;
        $slider->save();
        return redirect(route('listSlider'))->with('message','Data Berhasil Di Tambah');        
    }

    public function edit($id){
        $data = Slider_Model::where('idSlider',$id)->first();
        return Inertia::render('Admin/EditSlider',[
            'slider' => $data
        ]);
    }

    public function update(UpdateSliderRequest $request, Slider_Model $slider)
    {
        $request->validated();


        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $hapus_slider=Slider_Model::find(request()->segment(4));
        unlink($hapus_slider->gambar_slider);

        $imageName = time().'.'.$request->gambar_slider->extension();
        $uploadedImage = $request->gambar_slider->move(public_path('images'), $imageName);
        $imagePath = 'images/' . $imageName;

        $slider::find(request()->segment(4))->update([
            'kode_kecamatan' => $get_kd_kecamatan,
            'gambar_slider' => $imagePath
        ]);



        return redirect(route('listSlider'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $slider =Slider_Model::find($id);
        unlink($slider->gambar_slider);
        $slider->delete();
        return redirect(route('listSlider'))->with('message','Data Berhasil Di Hapus');
    }
}