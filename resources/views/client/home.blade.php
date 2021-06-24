@extends('layouts.app')

@section('content')
    <div class="jumbotron header" >
    <div class="container">
        <h1 class="display-4">DAMIMA HOUSE  DESIGN PLAN</h1>
        <p class="lead">Civil Engineering Works & Architectural Designs</p>
        <hr class="my-4">
        <p>Throughout history, builders have always been revered for their ability to mold the natural elements into something new, perhaps something  never seen before. Building is therefore a creative act on a momentous scale.

            For those lucky enough to be involved in Construction & Building, it’s an incredible joy to be involved in bringing forth from mere drawings and ideas a structure that will stand for many lifetimes.
            
            With this in mind, here are some of my favorite designs on Construction & Building.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    </div>
    <div id="ClientHome" data-ClientHome="{{ $propeties }}"></div>
    <div class="jumbotron header2" >
        <div class="container">
            <h1 class="display-4">What We Offer</h1>
            <p class="lead">High Quality Design</p>
            <hr class="my-4">
             <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
        </div>
@endsection
