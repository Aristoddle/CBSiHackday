<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\PostType;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('homepage.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ));
    }


    /**
     * @Route("/test", name="test")
     */
    public function testAction()
    {
        return $this->render('test2.html.twig');
    }

    /**
     * @Route("/post", name="post")
     */
    public function postAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $post = new Post();
        $form = $this->createForm(new PostType(), $post);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $em->persist($post);
            $em->flush();
            $this->redirect($this->generateUrl('homepage'));
        }

        return $this->render('form.html.twig', [
                'form' => $form->createView(),
            ]);
    }

    /**
    * @Route("/post/{postId}", name="postPage")
    */
    public function postPageAction(Request $request, $postId)
    {
        $em = $this->getDoctrine()->getManager();
        $post = $em->getRepository('AppBundle:Post')
            ->createQueryBuilder('p')
            ->where('p.id = :postId')
            ->setParameter('postId', $postId)
            ->getQuery()
            ->getResult();

        if ($post) {
            $post = $post[0];
        }

        return $this->render('postpage.html.twig', [
            'post' => $post,
            ]);
    }

    /**
    *  @Route("/post/index/posts", name="postIndex")
    */
    public function postIndexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $posts = $em->getRepository('AppBundle:Post')
            ->createQueryBuilder('p')
            ->getQuery()
            ->getResult();

        return $this->render('postindex.html.twig', [
            'posts' => $posts,
            ]);
    }
}

