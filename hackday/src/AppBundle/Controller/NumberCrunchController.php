<?php
/**
 * Created by PhpStorm.
 * User: dkeller
 * Date: 7/28/16
 * Time: 2:20 PM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\DailyKPI;
use AppBundle\Entity\Post;
use AppBundle\Entity\Video;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\PostType;

class NumberCrunchController extends Controller
{
    /**
     *  @Route("/makeposts", name="makePosts")
     */
    public function populatePosts()
    {
        $em = $this->getDoctrine()->getManager();


        for($i = 0; $i < 40; $i++) {
        $post = new Post();

        $post->setPostId(rand(0, 9800000000) + 'sdasduy' + rand(0, 7827873628476));
        $post->setTitle('This is a Title' + rand(0, 100000));
        $post->setViews(rand(0, 40000));
        $post->setLikes(rand(0, 40000));
        $post->setReach(rand(0, 40000));
        $post->setShares(rand(0, 4000));
        $post->setImpressions(rand(0, 4000));
        $post->setComments(rand(0, 4000));
        $post->setClicks(rand(0, 4000));

        $year = (int)(date('Y'));
        $day = (int)(date('d'));

        $post->setDay(rand(1, 365));
        $post->setYear(rand(1999, 2016));

        // $post->setDay($day);
        // $post->setYear($year);

        //$post->setMothership($this->getMotherShip($post->getPostId(), null, 'AppBundle:PostMothership'));

        $em->persist($post);

        }
        $em->flush();
        
        return $this->render('homepage.html.twig');
    }


    public function getMotherShip($postId, $data, $repository)
    {
        $em = $this->getDoctrine()->getManager();
        
        $mothership = $em->getRepository($repository)
            ->createQueryBuilder('m')
            ->where('m.postId = :postId')
            ->setParameter('postId', $postId)
            ->getQuery()
            ->getResult();

        if ($mothership) {
            $mothership = $mothership[0];
        } else {
            //TODO: create new object with data
        }

        return $mothership;

    }

    /**
     *  @Route("/makevideos", name="makeVideos")
     */
    public function populateVideos()
    {
        $em = $this->getDoctrine()->getManager();

        for ($i = 0; $i<30; $i++) {

            $video = new Video();

            $video->setVideoId(rand(0, 9800000000) + 'sdasduy' + rand(0, 7827873628476));
            $video->setTitle('This is a Video Title' + rand(0, 100000));
            $video->setViews(rand(0, 40000));
            $video->setLikes(rand(0, 40000));
            $video->setReach(rand(0, 40000));
            $video->setShares(rand(0, 40000));
            $video->setImpressions(rand(0, 40000));
            $video->setComments(rand(0, 400000));
            $video->setPercentCompleted(rand(0, 400000));
            $video->setTenSecViews(rand(0, 400000));


            $year = (int)(date('Y'));
            $day = (int)(date('d'));

            $video->setDay(rand(1, 365));
            $video->setYear(rand(2000,2016));

            // $video->setDay($day);
            // $video->setYear($year);

            //$video->setMothership($this->getMotherShip($video->getPostId(), null, 'AppBundle:VideoMothership'));

            $em->persist($video);

        }
        $em->flush();

        return $this->render('homepage.html.twig');
    }

    /**
     *  @Route("/popkpi", name="kpiPopulate")
     */
    public function populateKPI()
    {

        $em = $this->getDoctrine()->getManager();

        $date = getdate();
        $dayOfYear = $date['yday'];
        $year = $date['year'];

        $dayOfYear = rand(2, 364);
        $year = rand(2000, 2016);

        //TODO: build out edge case catch for Jan 1st

        $oldPosts = $em->getRepository('AppBundle:Post')
            ->createQueryBuilder('p')
            ->where('p.day = :day')
            ->andWhere('p.year = :year')
            ->setParameter('year', $year)
            ->setParameter('day', ($dayOfYear - 1))
            ->getQuery()
            ->getResult();

        $oldPostArray = [];
        foreach ($oldPosts as $post) {
            $oldPostArray[$post->getPostId()] = $post;
        }

        $oldVideos = $em->getRepository('AppBundle:Video')
        ->createQueryBuilder('v')
        ->where('v.day = :day')
        ->andWhere('v.year = :year')
        ->setParameter('year', $year)
        ->setParameter('day', ($dayOfYear - 1))
        ->getQuery()
        ->getResult();

        $oldVideoArray = [];
        foreach ($oldVideos as $video) {
            $oldVideoArray[$video->getVideoId()] = $video;
        }

        $newPosts = $em->getRepository('AppBundle:Post')
            ->createQueryBuilder('p')
            ->where('p.day = :day')
            ->andWhere('p.year = :year')
            ->setParameter('year', $year)
            ->setParameter('day', $dayOfYear)
            ->getQuery()
            ->getResult();

        $newVideos = $em->getRepository('AppBundle:Video')
            ->createQueryBuilder('v')
            ->where('v.day = :day')
            ->andWhere('v.year = :year')
            ->setParameter('year', $year)
            ->setParameter('day', $dayOfYear)
            ->getQuery()
            ->getResult();

        $numberPosts = 0;
        $numberVideos = 0;

        $totalImpressionsPost = 0;
        $totalReachPost = 0;
        $totalPostConsumptions = 0;

        $totalImpressionsVideo = 0;
        $totalReachVideo = 0;
        $totalVideoViews = 0;
        $totalVideoCompletes = 0;

        foreach ($newPosts as $post) {
            $postImpressions = $post->getImpressions();
            $postReach = $post->getReach();
            $postConsumptions = $post->getConsumptions();
            $numberPosts++;
            if ($oldPostArray[$post->getPostId()] !== null) {
                $oldPost = $oldPostArray[$post->getPostId()];
                $postImpressions = $postImpressions - $oldPost->getImpressions();
                $postReach = $postReach - $oldPost->getReach();
                $postConsumptions = $postConsumptions - $oldPost->getConsumptions();
            }
            $totalImpressionsPost += $postImpressions;
            $totalReachPost += $postReach;
            $totalPostConsumptions += $postConsumptions;
        }

        foreach ($newVideos as $video) {
            $videoImpressions = $video->getImpressions();
            $videoReach = $video->getReach();
            $videoViews = $video->getViews();
            $videoCompletes = $video->getCompletes();
            if ($oldVideoArray[$video->getVideoId()] !== null) {
                $oldVideo = $oldVideoArray[$video->getVideoId()];
                $videoImpressions = $videoImpressions - $oldVideo->getImpressions();
                $videoReach -= $oldVideo->getReach();
                $videoViews -= $oldVideo->getViews();
                $videoCompletes -= $oldVideo->getCompletes();
            }
            $numberVideos++;
            $totalImpressionsVideo += $videoImpressions;
            $totalReachVideo += $videoReach;
            $totalVideoViews += $videoViews;
            $totalVideoCompletes += $videoCompletes;
        }

        $kpi = new DailyKPI();

        $kpi->setForday('The best Day');

        $kpi->setNumberVideos($numberVideos);
        $kpi->setNumberPosts($numberPosts);
        $kpi->setTotalPosts($numberVideos + $numberPosts);

        $kpi->setVideoReach($totalReachVideo);
        $kpi->setPostReach($totalReachPost);
        $kpi->setTotalReach($totalReachVideo + $totalReachPost);

        $kpi->setPostImpressions($totalImpressionsPost);
        $kpi->setVideoImpressions($totalImpressionsVideo);
        $kpi->setTotalImpressions($totalImpressionsPost + $totalImpressionsVideo);

        $kpi->setVideoViews($totalVideoViews);
        $kpi->setVideoCompletes($totalVideoCompletes);

        $em->persist($kpi);
        $em->flush();


        return $this->render('dailyKpi.html.twig', [
            'kpi' => $kpi,
        ]);

        return $this->render('homepage.html.twig');
    }

    

}