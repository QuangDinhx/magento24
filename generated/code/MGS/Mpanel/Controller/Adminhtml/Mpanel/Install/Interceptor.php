<?php
namespace MGS\Mpanel\Controller\Adminhtml\Mpanel\Install;

/**
 * Interceptor class for @see \MGS\Mpanel\Controller\Adminhtml\Mpanel\Install
 */
class Interceptor extends \MGS\Mpanel\Controller\Adminhtml\Mpanel\Install implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Backend\App\Action\Context $context, \Magento\Framework\ObjectManagerInterface $objectManager, \Magento\Config\Model\Config\Factory $configFactory, \Magento\Framework\Filesystem $filesystem, \Magento\Framework\Xml\Parser $parser, \Magento\Framework\Stdlib\StringUtils $string)
    {
        $this->___init();
        parent::__construct($context, $objectManager, $configFactory, $filesystem, $parser, $string);
    }

    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'execute');
        return $pluginInfo ? $this->___callPlugins('execute', func_get_args(), $pluginInfo) : parent::execute();
    }

    /**
     * {@inheritdoc}
     */
    public function convertString($theme)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'convertString');
        return $pluginInfo ? $this->___callPlugins('convertString', func_get_args(), $pluginInfo) : parent::convertString($theme);
    }

    /**
     * {@inheritdoc}
     */
    public function getModel()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getModel');
        return $pluginInfo ? $this->___callPlugins('getModel', func_get_args(), $pluginInfo) : parent::getModel();
    }

    /**
     * {@inheritdoc}
     */
    public function _importSetting($parsedArray)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, '_importSetting');
        return $pluginInfo ? $this->___callPlugins('_importSetting', func_get_args(), $pluginInfo) : parent::_importSetting($parsedArray);
    }

    /**
     * {@inheritdoc}
     */
    public function imporSetting($parsedArray, $xmlNode, $section)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'imporSetting');
        return $pluginInfo ? $this->___callPlugins('imporSetting', func_get_args(), $pluginInfo) : parent::imporSetting($parsedArray, $xmlNode, $section);
    }

    /**
     * {@inheritdoc}
     */
    public function dispatch(\Magento\Framework\App\RequestInterface $request)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'dispatch');
        return $pluginInfo ? $this->___callPlugins('dispatch', func_get_args(), $pluginInfo) : parent::dispatch($request);
    }

    /**
     * {@inheritdoc}
     */
    public function _processUrlKeys()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, '_processUrlKeys');
        return $pluginInfo ? $this->___callPlugins('_processUrlKeys', func_get_args(), $pluginInfo) : parent::_processUrlKeys();
    }

    /**
     * {@inheritdoc}
     */
    public function getUrl($route = '', $params = [])
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getUrl');
        return $pluginInfo ? $this->___callPlugins('getUrl', func_get_args(), $pluginInfo) : parent::getUrl($route, $params);
    }

    /**
     * {@inheritdoc}
     */
    public function getActionFlag()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getActionFlag');
        return $pluginInfo ? $this->___callPlugins('getActionFlag', func_get_args(), $pluginInfo) : parent::getActionFlag();
    }

    /**
     * {@inheritdoc}
     */
    public function getRequest()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getRequest');
        return $pluginInfo ? $this->___callPlugins('getRequest', func_get_args(), $pluginInfo) : parent::getRequest();
    }

    /**
     * {@inheritdoc}
     */
    public function getResponse()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getResponse');
        return $pluginInfo ? $this->___callPlugins('getResponse', func_get_args(), $pluginInfo) : parent::getResponse();
    }
}
