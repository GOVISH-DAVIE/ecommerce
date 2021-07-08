<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->

    <!-- Fonts -->



    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md   ">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="/LOGO.webp">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                                 document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
{{-- <img src="" alt=""> --}}
        <main class="py-4">

            @yield('content')

        </main>
        <hr>
        <div class="container cp">

            © 2020 Copyright: 9davidmuia@gmail.com
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://unpkg.com/intasend-inlinejs-sdk@2.0.8/build/intasend-inline.js"></script>


    <script>
        function bindEvent(element, eventName, eventHandler) {
            if (element.addEventListener) {
                console.log('add event listener');
                element.addEventListener(eventName, eventHandler);
            } else if (element.attachEvent) {
                console.log('attach event');
                element.attachEvent('on' + eventName, eventHandler);
            }
        }
      
           
    </script>

</body>


{{-- <script defer  >
    window.IntaSend.setup({
        publicAPIKey: "ISPubKey_test_e37f1334-366b-4b5e-9975-7793b6891a00",
        // Optional URL to redirect your clients after payment
        redirectURL: "https://flemingtech.ac.ke/",

        live: false,

    })
</script> --}}
<script>



</script>

</html>
