<?php
/**
 * Created by PhpStorm.
 * User: dkeller
 * Date: 7/28/16
 * Time: 2:14 PM
 */


namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="daily_KPI")
 */
class DailyKPI
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $totalReach;

    /**
     * @ORM\Column(type="integer")
     */
    private $videoReach;

    /**
     * @ORM\Column(type="integer")
     */
    private $postReach;

    /**
     * @ORM\Column(type="integer")
     */
    private $totalImpressions;

    /**
     * @ORM\Column(type="integer")
     */
    private $videoImpressions;

    /**
     * @ORM\Column(type="integer")
     */
    private $postImpressions;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberVideos;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberPosts;

    /**
     * @ORM\Column(type="integer")
     */
    private $totalPosts;

    /**
     * @ORM\Column(type="integer")
     */
    private $videoViews;

    /**
     * @ORM\Column(type="integer")
     */
    private $videoCompletes;









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
     * Set totalReach
     *
     * @param integer $totalReach
     * @return DailyKPI
     */
    public function setTotalReach($totalReach)
    {
        $this->totalReach = $totalReach;

        return $this;
    }

    /**
     * Get totalReach
     *
     * @return integer 
     */
    public function getTotalReach()
    {
        return $this->totalReach;
    }

    /**
     * Set impressions
     *
     * @param integer $impressions
     * @return DailyKPI
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
     * Set postConsumptions
     *
     * @param integer $postConsumptions
     * @return DailyKPI
     */
    public function setPostConsumptions($postConsumptions)
    {
        $this->postConsumptions = $postConsumptions;

        return $this;
    }

    /**
     * Get postConsumptions
     *
     * @return integer 
     */
    public function getPostConsumptions()
    {
        return $this->postConsumptions;
    }

    /**
     * Set engagementRate
     *
     * @param integer $engagementRate
     * @return DailyKPI
     */
    public function setEngagementRate($engagementRate)
    {
        $this->engagementRate = $engagementRate;

        return $this;
    }

    /**
     * Get engagementRate
     *
     * @return integer 
     */
    public function getEngagementRate()
    {
        return $this->engagementRate;
    }

    /**
     * Set totalLikes
     *
     * @param integer $totalLikes
     * @return DailyKPI
     */
    public function setTotalLikes($totalLikes)
    {
        $this->totalLikes = $totalLikes;

        return $this;
    }

    /**
     * Get totalLikes
     *
     * @return integer 
     */
    public function getTotalLikes()
    {
        return $this->totalLikes;
    }

    /**
     * Set videoViews
     *
     * @param integer $videoViews
     * @return DailyKPI
     */
    public function setVideoViews($videoViews)
    {
        $this->videoViews = $videoViews;

        return $this;
    }

    /**
     * Get videoViews
     *
     * @return integer 
     */
    public function getVideoViews()
    {
        return $this->videoViews;
    }

    /**
     * Set videoCompletions
     *
     * @param integer $videoCompletions
     * @return DailyKPI
     */
    public function setVideoCompletions($videoCompletions)
    {
        $this->videoCompletions = $videoCompletions;

        return $this;
    }

    /**
     * Get videoCompletions
     *
     * @return integer 
     */
    public function getVideoCompletions()
    {
        return $this->videoCompletions;
    }

    /**
     * Set numberPosts
     *
     * @param integer $numberPosts
     * @return DailyKPI
     */
    public function setNumberPosts($numberPosts)
    {
        $this->numberPosts = $numberPosts;

        return $this;
    }

    /**
     * Get numberPosts
     *
     * @return integer 
     */
    public function getNumberPosts()
    {
        return $this->numberPosts;
    }

    /**
     * Set videoReach
     *
     * @param integer $videoReach
     * @return DailyKPI
     */
    public function setVideoReach($videoReach)
    {
        $this->videoReach = $videoReach;

        return $this;
    }

    /**
     * Get videoReach
     *
     * @return integer 
     */
    public function getVideoReach()
    {
        return $this->videoReach;
    }

    /**
     * Set postReach
     *
     * @param integer $postReach
     * @return DailyKPI
     */
    public function setPostReach($postReach)
    {
        $this->postReach = $postReach;

        return $this;
    }

    /**
     * Get postReach
     *
     * @return integer 
     */
    public function getPostReach()
    {
        return $this->postReach;
    }

    /**
     * Set totalImpressions
     *
     * @param integer $totalImpressions
     * @return DailyKPI
     */
    public function setTotalImpressions($totalImpressions)
    {
        $this->totalImpressions = $totalImpressions;

        return $this;
    }

    /**
     * Get totalImpressions
     *
     * @return integer 
     */
    public function getTotalImpressions()
    {
        return $this->totalImpressions;
    }

    /**
     * Set videoImpressions
     *
     * @param integer $videoImpressions
     * @return DailyKPI
     */
    public function setVideoImpressions($videoImpressions)
    {
        $this->videoImpressions = $videoImpressions;

        return $this;
    }

    /**
     * Get videoImpressions
     *
     * @return integer 
     */
    public function getVideoImpressions()
    {
        return $this->videoImpressions;
    }

    /**
     * Set postImpressions
     *
     * @param integer $postImpressions
     * @return DailyKPI
     */
    public function setPostImpressions($postImpressions)
    {
        $this->postImpressions = $postImpressions;

        return $this;
    }

    /**
     * Get postImpressions
     *
     * @return integer 
     */
    public function getPostImpressions()
    {
        return $this->postImpressions;
    }

    /**
     * Set numberVideos
     *
     * @param integer $numberVideos
     * @return DailyKPI
     */
    public function setNumberVideos($numberVideos)
    {
        $this->numberVideos = $numberVideos;

        return $this;
    }

    /**
     * Get numberVideos
     *
     * @return integer 
     */
    public function getNumberVideos()
    {
        return $this->numberVideos;
    }

    /**
     * Set totalPosts
     *
     * @param integer $totalPosts
     * @return DailyKPI
     */
    public function setTotalPosts($totalPosts)
    {
        $this->totalPosts = $totalPosts;

        return $this;
    }

    /**
     * Get totalPosts
     *
     * @return integer 
     */
    public function getTotalPosts()
    {
        return $this->totalPosts;
    }

    /**
     * Set videoCompletes
     *
     * @param integer $videoCompletes
     * @return DailyKPI
     */
    public function setVideoCompletes($videoCompletes)
    {
        $this->videoCompletes = $videoCompletes;

        return $this;
    }

    /**
     * Get videoCompletes
     *
     * @return integer 
     */
    public function getVideoCompletes()
    {
        return $this->videoCompletes;
    }
}
