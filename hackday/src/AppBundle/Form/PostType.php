<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;


class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    		$builder->add('title')
    		->add('views')
    		->add('likes')
    		->add('add', 'submit');
    }

    public function getName()
    {
    	return 'post';
    }

}
