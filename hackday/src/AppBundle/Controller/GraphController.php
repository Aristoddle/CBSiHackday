<?php
/**
 * Created by PhpStorm.
 * User: dkeller
 * Date: 7/28/16
 * Time: 5:41 PM
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


class GraphController extends Controller
{

    /**
     * @Route("/get/post/data", name="getPostData")
     */
    public function postsJson()
    {
        $em = $this->getDoctrine()->getManager();
        $posts = $em->getRepository('AppBundle:Post')
            ->createQueryBuilder('p')
            ->getQuery()
            ->getResult();

        foreach ($posts as $post) {

        }
    }

}







//var test = {'data':[{"created_time":"2015-09-10","story":"Lama","message":"Dextroamphetamine saccharate, Amphetamine aspartate, Dextroamphetamine sulfate, and Amphetamine sulfate"},
//    {"created_time":"2016-03-25","story":"Albi","message":"Gentamicin Sulfate"},
//    {"created_time":"2016-05-24","story":"Želiv","message":"Beta carotene, cholecalciferol, dl-alpha tocopheryl acetate, ascorbic acid, folic acid, thiamin mononitrate, riboflavin, niacinamide, pyridoxine hydrochloride, cyanocobalamin, calcium carbonate, potas"},
//    {"created_time":"2016-06-20","story":"Dzhalka","message":"Ibuprofen"},
//    {"created_time":"2016-02-06","story":"Niños Heroes","message":"Lisinopril"},
//    {"created_time":"2016-02-11","story":"Pakembangan","message":"PROPRANOLOL HYDROCHLORIDE"},
//    {"created_time":"2016-01-28","story":"Cikuya","message":"mineral oil, petrolatum, phenylephrine HCl"},
//    {"created_time":"2015-09-30","story":"Maslog","message":"ELVITEGRAVIR"},
//    {"created_time":"2016-05-31","story":"Le Mans","message":"Trandolapril"},
//    {"created_time":"2016-05-03","story":"Baishi","message":"SELENIUM SULFIDE"}]};
//}