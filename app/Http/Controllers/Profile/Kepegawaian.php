<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Kepegawaian extends Controller
{
    public function index(){
        return Inertia::render('Profile/Kepegawaian',[
            'judul'=>'Kepegawaian',
            'Deskripsi'=>'dnasjldnasknaksfnaknfkladnfk'
        ]);
    }
}
