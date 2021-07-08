<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $p;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user,$p )
    {
        $this->user = $user;
        $this->p = $p;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $em = $this->from('orders@damamaconstruction.com')->subject('Order')->view('mail')->with(['user'=>$this->user, 'properties'=>$this->p]);
        for ($i = 0; $i < count(json_decode($this->p->images)); $i++)  {
        $em->attach(Storage::path('public/'.json_decode($this->p->images)[$i]));
        }
        $em->attach(Storage::path('public/'. $this->p->finalimage));
        return $em;
         
    }
}
