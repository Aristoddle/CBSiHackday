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

class NumberCrunchController extends Controller
{

    public function populatePosts()
    {
        $em = $this->getDoctrine()->getManager();

        $post = new Post();

        $post->setPostId();
        $post->setTitle();
        $post->setViews();
        $post->setLikes();
        $post->setReach();
        $post->setShares();
        $post->setImpressions();
        $post->setComments();
        $post->setClicks();

        $year = (int)(date('Y'));
        $day = (int)(date('d'));
        $post->setDay($day);
        $post->setYear($year);

        $post->setMothership($this->getMotherShip($post->getPostId(), null, 'AppBundle:PostMothership'));

        $em->persist($post);

        $em->flush();
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

    public function populateVideos()
    {
        $em = $this->getDoctrine()->getManager();

        $video = new Video();

        $video->setVideoId();
        $video->setTitle();
        $video->setViews();
        $video->setLikes();
        $video->setReach();
        $video->setShares();
        $video->setImpressions();
        $video->setComments();
        $video->setPercentCompleted();
        $video->setTenSecViews();


        $year = (int)(date('Y'));
        $day = (int)(date('d'));
        $video->setDay($day);
        $video->setYear($year);

        $video->setMothership($this->getMotherShip($video->getPostId(), null, 'AppBundle:VideoMothership'));

        $em->persist($video);

        $em->flush();
    }

    public function populateKPI()
    {

        $em = $this->getDoctrine()->getManager();

        $date = getdate();
        $dayOfYear = $date['yday'];
        $year = $date['year'];

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

        $kpi->setNumberVideos($numberVideos);
        $kpi->setNumberPosts($numberPosts);
        $kpi->getTotalPosts($numberVideos + $numberPosts);

        $kpi->setVideoReach($totalReachVideo);
        $kpi->setPostReach($totalReachPost);
        $kpi->setTotalReach($totalReachVideo + $totalReachPost);

        $kpi->setPostImpressions($totalImpressionsPost);
        $kpi->setVideoImpressions($totalImpressionsVideo);
        $kpi->setTotalImpressions($totalImpressionsPost + $totalImpressionsVideo);

        $kpi->setVideoViews($totalVideoViews);
        $kpi->setVideoCompletions($totalVideoCompletes);

        $em->persist($kpi);
        $em->flush();


        return $this->render('kpipage.html.twig', [
            'kpi' => $kpi,
        ]);
    }

    

}