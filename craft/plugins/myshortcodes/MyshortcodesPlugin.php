<?php
namespace Craft;

class MyshortcodesPlugin extends BasePlugin
{
	public function getName()
	{
		return Craft::t('My Shortcodes');
	}

	public function getVersion()
	{
		return '1.0';
	}

	public function getDeveloper()
	{
		return 'Happy Cog';
	}

	public function getDeveloperUrl()
	{
		return 'http://happycog.com';
	}

	/**
	 * Use this method in any plugin to register shortcodes.
	 *
	 * You may register a single callback:
	 *
	 *    return array($this, 'myTag');
	 *
	 * Or you may register an array of callbacks:
	 *
	 *     return array(
	 *         array($this, 'myTag'),
	 *         array($this, 'myOtherTag'),
	 *         array($that_object, 'thatTag'),
	 *     );
	 *
	 * The shortcode tag name will match the method name.
	 *
	 *     eg. `[doubleRainbow]` will render the output of the `doubleRainbow()`
	 *     method on this class if registered as `array($this, 'doubleRainbow')`
	 *
	 * @return array A single array representation of a callable method, or an array of them.
	 */
	public function registerShortcodes()
	{
		return array($this, 'button');
	}

	/**
	 * An example shortcode callback method.
	 *
	 * Examples:
	 *
	 *     Single:     [doubleRainbow]
	 *     Pair:       [doubleRainbow]Text wrapped by shortcode[/doubleRainbow]
	 *     Attributes: [doubleRainbow foo="bar"]
	 *
	 * @param  array $attributes  Key/value pairs of shortcode attributes
	 * @param  string $content    The content between shortcode pairs
	 * @param  string $tag        The tag name. Same as the method name.
	 * @return string             Replacement text.
	 */
	public function button($attributes, $content, $tag)
	{
    $classes = $attributes['class'];
		$href    = $attributes['href'];

		return '<a class="button ' . $classes . '" href="' . $href . '">' . $content . '</a>';
	}

}
