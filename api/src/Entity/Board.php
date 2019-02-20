<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * A board.
 *
 * @ORM\Table(name="plannor_boards")
 * @ORM\Entity
 */
class Board
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $trelloBoardId;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    public function getId() {
        return $this->id;
    }

    public function getTrelloBoardId() {
        return $this->trelloBoardId;
    }

    public function setTrelloBoardId($trelloBoardId) {
        $this->trelloBoardId = $trelloBoardId;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

}
