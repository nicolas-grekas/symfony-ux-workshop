<?php

namespace App\Controller;

use App\Repository\RadioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RadioController extends AbstractController
{
    public function __construct(
        private readonly RadioRepository $radioRepository
    ) {}

    #[Route('/')]
    public function index(): Response
    {
        return $this->render('home.html.twig');
    }

    #[Route('/genre')]
    public function genres(): Response
    {
        return $this->render('genre.html.twig');
    }

    #[Route('/year')]
    public function years(): Response
    {
        return $this->render('years.html.twig');
    }
}