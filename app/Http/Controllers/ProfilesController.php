<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Profile;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Storage;

// include composer autoload
//require 'vendor/autoload.php';

// import the Intervention Image Manager Class
// import the Intervention Image Manager Class
use Intervention\Image\ImageManagerStatic as Image;


class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\
     */
    public function index()
    {
        //Get articles
//        $profiles = Profile::paginate(10);

        $profiles = Profile::orderBy('updated_at', 'desc')->paginate(5);

        //Return collection of articles
        return ProfileResource::collection($profiles);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $profile = $request->isMethod('put') ? Profile::findOrFail($request->id) : new Profile();

        $profile->name = $request->name;
        //Image uploading
        if($request->get('img'))
        {
            $image = $request->get('img');
            $img_name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            \Intervention\Image\Facades\Image::make($request->get('img'))->save(public_path('img/').$img_name);
            $profile->img = "img/".$img_name;
        }

        $profile->save();
        return new ProfileResource($profile);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Resources\Json\
     */
    public function show($id)
    {
        //Get profile
        $profile = Profile::findOrFail($id);

        //Return profile as a resource
        return new ProfileResource($profile);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $profile = Profile::findOrFail($id);
        return new ProfileResource($profile);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
//        $id = $request->id;
        $profile = Profile::findOrFail($id);

        $profile->name = $request->name;

//        if ($request->file()) {
//            $path = Storage::putFile('public', $request->file('img'));
//            $url = Storage::url($path);
//            $profile->img = $url;
//        }

        //Image uploading
        if($request->get('img'))
        {
//            echo $request->get('img');
            if(!is_file(mb_substr($request->get('img'), 1))) {
                $image = $request->get('img');
                $img_name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                \Intervention\Image\Facades\Image::make($request->get('img'))->save(public_path('img/').$img_name);
                $profile->img = "img/".$img_name;
            }
        }



        $profile->update();
        return new ProfileResource($profile);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();

        return new ProfileResource($profile);

    }
}
