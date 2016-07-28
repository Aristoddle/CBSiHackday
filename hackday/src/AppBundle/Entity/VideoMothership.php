<?php
/**
 * Created by PhpStorm.
 * User: dkeller
 * Date: 7/28/16
 * Time: 1:47 PM
 */


namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="video_mothership")
 */
class VideoMothership
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     *  @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $posted;

    /**
     * @ORM\OneToMany(targetEntity="Video", mappedBy="mothership")
     */
    private $dailyInfo;
    
    /**
     * @ORM\Column(type="text")
     */
    private $postId;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->dailyInfo = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return VideoMothership
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string 
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set posted
     *
     * @param \DateTime $posted
     * @return VideoMothership
     */
    public function setPosted($posted)
    {
        $this->posted = $posted;

        return $this;
    }

    /**
     * Get posted
     *
     * @return \DateTime 
     */
    public function getPosted()
    {
        return $this->posted;
    }

    /**
     * Add dailyInfo
     *
     * @param \AppBundle\Entity\Video $dailyInfo
     * @return VideoMothership
     */
    public function addDailyInfo(\AppBundle\Entity\Video $dailyInfo)
    {
        $this->dailyInfo[] = $dailyInfo;

        return $this;
    }

    /**
     * Remove dailyInfo
     *
     * @param \AppBundle\Entity\Video $dailyInfo
     */
    public function removeDailyInfo(\AppBundle\Entity\Video $dailyInfo)
    {
        $this->dailyInfo->removeElement($dailyInfo);
    }

    /**
     * Get dailyInfo
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getDailyInfo()
    {
        return $this->dailyInfo;
    }
}
