<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Kecamatan;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_all_user = User::all();

        
        return Inertia::render('Admin/ListUser',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllUser' => $get_all_user
        ]);
    }

    public function create(){
        return Inertia::render('Admin/TambahUsers');
    }

    public function store(StoreUserRequest $request){
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        event(new Registered($user));
        return redirect(route('listUser'))->with('message','User Berhasil Di Tambah');
    }

    public function edit($id){
        $data = User::where('id',$id)->first();
        return Inertia::render('Admin/EditUser',[
            'user' => $data
        ]);
    }

    public function update(UpdateUserRequest $request, User $user){
        $user::find(request()->segment(4))->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return redirect(route('listUser'))->with('message','User Berhasil Di Ubah');
    }

    public function hapus($id){
        $user =User::find($id);
        $user->delete();
        return redirect(route('listUser'))->with('message','User Berhasil Di Hapus');
    }
}