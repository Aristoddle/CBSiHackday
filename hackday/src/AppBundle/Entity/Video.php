<?php
/**
 * Created by PhpStorm.
 * User: dkeller
 * Date: 7/28/16
 * Time: 11:44 AM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="video")
 */
class Video
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $videoId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="integer")
     */
    private $views;

    /**
     * @ORM\Column(type="integer")
     */
    private $likes;

    /**
     * @ORM\Column(type="integer")
     */
    private $reach;

    /**
     * @ORM\Column(type="integer")
     */
    private $shares;

    /**
     * @ORM\Column(type="integer")
     */
    private $impressions;

    /**
     * @ORM\Column(type="integer")
     */
    private $comments;

    /**
     * @ORM\Column(type="integer")
     */
    private $percentCompleted;

    /**
     * @ORM\Column(type="integer")
     */
    private $tensecViews;



    /**
     * @ORM\Column(type="integer")
     */
    private $day;

    /**
     * @ORM\Column(type="integer")
     */
    private $year;



    /**
     * @ORM\ManyToOne(targetEntity="VideoMothership", inversedBy="dailyInfo")
     */
    private $mothership;


    

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
     * @return Video
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
     * Set views
     *
     * @param integer $views
     * @return Video
     */
    public function setViews($views)
    {
        $this->views = $views;

        return $this;
    }

    /**
     * Get views
     *
     * @return integer 
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * Set likes
     *
     * @param integer $likes
     * @return Video
     */
    public function setLikes($likes)
    {
        $this->likes = $likes;

        return $this;
    }

    /**
     * Get likes
     *
     * @return integer 
     */
    public function getLikes()
    {
        return $this->likes;
    }

    /**
     * Set reach
     *
     * @param integer $reach
     * @return Video
     */
    public function setReach($reach)
    {
        $this->reach = $reach;

        return $this;
    }

    /**
     * Get reach
     *
     * @return integer 
     */
    public function getReach()
    {
        return $this->reach;
    }

    /**
     * Set shares
     *
     * @param integer $shares
     * @return Video
     */
    public function setShares($shares)
    {
        $this->shares = $shares;

        return $this;
    }

    /**
     * Get shares
     *
     * @return integer 
     */
    public function getShares()
    {
        return $this->shares;
    }

    /**
     * Set impressions
     *
     * @param integer $impressions
     * @return Video
     */
    public function setImpressions($impressions)
    {
        $this->impressions = $impressions;

        return $this;
    }

    /**
     * Get impressions
     *
     * @return integer 
     */
    public function getImpressions()
    {
        return $this->impressions;
    }

    /**
     * Set comments
     *
     * @param integer $comments
     * @return Video
     */
    public function setComments($comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get comments
     *
     * @return integer 
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set percentCompleted
     *
     * @param integer $percentCompleted
     * @return Video
     */
    public function setPercentCompleted($percentCompleted)
    {
        $this->percentCompleted = $percentCompleted;

        return $this;
    }

    /**
     * Get percentCompleted
     *
     * @return integer 
     */
    public function getPercentCompleted()
    {
        return $this->percentCompleted;
    }

    /**
     * Set tensecViews
     *
     * @param integer $tensecViews
     * @return Video
     */
    public function setTensecViews($tensecViews)
    {
        $this->tensecViews = $tensecViews;

        return $this;
    }

    /**
     * Get tensecViews
     *
     * @return integer 
     */
    public function getTensecViews()
    {
        return $this->tensecViews;
    }

    /**
     * Set collected
     *
     * @param \DateTime $collected
     * @return Video
     */
    public function setCollected($collected)
    {
        $this->collected = $collected;

        return $this;
    }

    /**
     * Get collected
     *
     * @return \DateTime 
     */
    public function getCollected()
    {
        return $this->collected;
    }

    /**
     * Set mothership
     *
     * @param \AppBundle\Entity\VideoMothership $mothership
     * @return Video
     */
    public function setMothership(\AppBundle\Entity\VideoMothership $mothership = null)
    {
        $this->mothership = $mothership;

        return $this;
    }

    /**
     * Get mothership
     *
     * @return \AppBundle\Entity\VideoMothership 
     */
    public function getMothership()
    {
        return $this->mothership;
    }

    /**
     * Set videoId
     *
     * @param string $videoId
     * @return Video
     */
    public function setVideoId($videoId)
    {
        $this->videoId = $videoId;

        return $this;
    }

    /**
     * Get videoId
     *
     * @return string 
     */
    public function getVideoId()
    {
        return $this->videoId;
    }
}
