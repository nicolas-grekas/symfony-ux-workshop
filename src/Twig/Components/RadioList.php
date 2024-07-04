<?php

namespace App\Twig\Components;

use App\Repository\RadioRepository;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent()]
class RadioList
{
    public ?string $filter = null;

    public function __construct(
        private readonly RadioRepository $radioRepository
    ) {}

    public function getRadios(): array
    {
        if (null === $this->filter) {
            return $this->radioRepository->findAll();
        }

        return $this->radioRepository->findByGenre($this->filter);
    }
}