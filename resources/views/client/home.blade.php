@extends('layouts.app')

@section('content')
    <div class="jumbotron header">
        <div class="container">
            <h1 class="display-4">DAMIMA HOUSE DESIGN PLAN</h1>
            <p class="lead">Civil Engineering Works & Architectural Designs</p>
            <hr class="my-4">
            <p>Throughout history, builders have always been revered for their ability to mold the natural elements into
                something new, perhaps something never seen before. Building is therefore a creative act on a momentous
                scale.

                For those lucky enough to be involved in Construction & Building, it’s an incredible joy to be involved in
                bringing forth from mere drawings and ideas a structure that will stand for many lifetimes.

                With this in mind, here are some of my favorite designs on Construction & Building.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
    <div id="ClientHome" data-ClientHome="{{ $propeties }}"></div>
    <div class="jumbotron header2">
        <div class="container">
            <h1 class="display-4">What We Offer</h1>
            <p class="lead">High Quality Design</p>
            <hr class="my-4">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>


    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-5 sliderText">
                            <p>
                                Good buildings come from good people, and all problems are solved by good design
                            </p>
                        </div>
                        <div class="col-sm-12 col-md-5 sliderText ">
                            <img src="/images/1.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-5 sliderText">
                            <p>
                                Good buildings come from good people, and all problems are solved by good design
                            </p>
                        </div>
                        <div class="col-sm-12 col-md-5 sliderText ">
                            <img src="/images/2.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-5 sliderText">
                            <p>
                                Good buildings come from good people, and all problems are solved by good design
                            </p>
                        </div>
                        <div class="col-sm-12 col-md-5 sliderText ">
                            <img src="/images/2.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>




    <div class="container  ">
        <div class="card contactForm">
            <h1><u> Contact</u></h1>
            <h2> Nairobi -Kenya</h2>
            <h4>
                damimaplans@gmail.com
            </h4>


            <h4>0726143237</h4>

            <h4> migwi81@gmail.com</h4>
            </h4>
            <div class=" ">
                <form>
                    <div class="cotainer">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group col-sm-12">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="Text" class="form-control col-sm-12" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Full Name">

                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group col-sm-12">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control col-sm-12" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Subject</label>
                        <input type="Text" class="form-control" id="exampleInputPassword1" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Subject</label>
                        <textarea type="Text" class="form-control" id="exampleInputPassword1"
                            placeholder="Type your message here">
                                </textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
@endsection
