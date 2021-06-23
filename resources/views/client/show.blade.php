@extends('layouts.app')

@section('content')
    <div id="row ">

        <div class="col-sm-12 col-md-8">
            <div id="showItem"></div>
        </div>
        <div class="col-sm-12 col-md-4">
            <div id="ShowPayment" data-ShowPaymentid="{{ $property }}"></div> 
           
        </div>
    </div>
@endsection
