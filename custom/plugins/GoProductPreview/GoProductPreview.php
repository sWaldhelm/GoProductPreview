<?php
namespace GoProductPreview;

//use \Shopware\Components\Plugin;
use Shopware\Components\Plugin\Context\InstallContext;
use Shopware\Components\Plugin\Context\UninstallContext;

class GoProductPreview extends \Shopware\Components\Plugin
{
    public function install(InstallContext $context)
    {
        try{
           // $this->createConfigForm()
        }
        catch (\Exception $e)   {
            return array(
                'success' => false,
                'message' => $e->getMessage()
            );
        }
        return true;
    }

    public function uninstall(UninstallContext $context)
    {
        parent::uninstall($context); // TODO: Change the autogenerated stub
    }

    public static function getSubscribedEvents()
    {
        return[
            'Enlight_Controller_Action_PostDispatchSecure_Frontend_Detail' =>
            'onPostDispatchDetail'
        ];
    }

    public function onPostDispatchDetail(\Enlight_Event_EventArgs $args)
    {

    }
}