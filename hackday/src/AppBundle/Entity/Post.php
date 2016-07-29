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
* @ORM\Table(name="post")
*/
class Post 
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
	private $postId;

		/**
		*  @ORM\Column(type="string", length=255)
		 */
		private $title;

		/**
		*  @ORM\Column(type="integer")
		 */
		private $views;

		/**
		*  @ORM\Column(type="integer")
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
		private $clicks;


	/**
	 * @ORM\Column(type="integer")
	 */
	private $day;

	/**
	 * @ORM\Column(type="integer")
	 */
	private $year;

	/**
	 * @ORM\ManyToOne(targetEntity="PostMothership", inversedBy="dailyInfo")
	 */
	private $mothership;



		public function getTitle() 
		{
			return $this->title;
		}

		public function getLikes() 
		{
			return $this->likes;
		}

		public function getViews() 
		{
			return $this->views;
		}

		public function setTitle($title) 
		{
			$this->title = $title;

		}


		public function setLikes($likes) 
		{
			$this->likes = $likes;

		}

		public function setViews($views) 
		{
			$this->views = $views;
		}

	/**
	 * @return mixed
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * @param mixed $id
	 */
	public function setId($id)
	{
		$this->id = $id;
	}

    /**
     * Set reach
     *
     * @param integer $reach
     * @return Post
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
     * @return Post
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
     * @return Post
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
     * @return Post
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
     * Set clicks
     *
     * @param integer $clicks
     * @return Post
     */
    public function setClicks($clicks)
    {
        $this->clicks = $clicks;

        return $this;
    }

    /**
     * Get clicks
     *
     * @return integer 
     */
    public function getClicks()
    {
        return $this->clicks;
    }

    /**
     * Set collected
     *
     * @param \DateTime $collected
     * @return Post
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
     * @param \AppBundle\Entity\PostMothership $mothership
     * @return Post
     */
    public function setMothership(\AppBundle\Entity\PostMothership $mothership = null)
    {
        $this->mothership = $mothership;

        return $this;
    }

    /**
     * Get mothership
     *
     * @return \AppBundle\Entity\PostMothership 
     */
    public function getMothership()
    {
        return $this->mothership;
    }

    /**
     * Set postId
     *
     * @param string $postId
     * @return Post
     */
    public function setPostId($postId)
    {
        $this->postId = $postId;

        return $this;
    }

    /**
     * Get postId
     *
     * @return string 
     */
    public function getPostId()
    {
        return $this->postId;
    }

    /**
     * Set day
     *
     * @param integer $day
     * @return Post
     */
    public function setDay($day)
    {
        $this->day = $day;

        return $this;
    }

    /**
     * Get day
     *
     * @return integer 
     */
    public function getDay()
    {
        return $this->day;
    }

    /**
     * Set year
     *
     * @param integer $year
     * @return Post
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year
     *
     * @return integer 
     */
    public function getYear()
    {
        return $this->year;
    }
}
