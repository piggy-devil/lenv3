@extends('layouts.app')

@section('content')
<div class="w-full h-screen flex items-center justify-center">
        <form method="POST" action="{{ route('login') }}" class="w-full md:w-1/3 bg-white rounded-lg">
        @csrf
            <div class="flex font-bold justify-center mt-6">
                <img class="h-20 w-20"
                    src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg">
            </div>
            <h2 class="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
            <div class="px-12 pb-10">
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input id="email" type='email' name="email" value="{{ old('email') }}" required placeholder="Email" autocomplete="email" autofocus
                            class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input id="password" type="password" name="password" placeholder="Password" autocomplete="current-password"
                            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <a href="#" class="text-xs text-gray-500 float-right mb-4">Forgot Password?</a>
                <button type="submit"
                    class="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none">Button</button>
        </form>
    </div>
@endsection
