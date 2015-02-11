define(function (require, exports) {
	var $ = require('jquery')

	var open = function (attrs, callback) {
		// create input tag
		// no need add to the dom tree
		var $file = $('<input type="file" />')
		attrs = attrs || {}
		!attrs.multiple || $file.attr('multiple', true)
		!attrs.accept || $file.attr('accept', attrs.accept)
		!attrs.webkitdirectory || $file.attr('webkitdirectory', true)
		!attrs.nwdirectory || $file.attr('nwdirectory', true)
		!attrs.nwworkingdir || $file.attr('nwworkingdir', attrs.nwworkingdir)
		if (attrs.nwsaveas === true) {
			$file.attr('nwsaveas')
		} else { // string
			!attrs.nwsaveas || $file.attr('nwsaveas', attrs.nwsaveas)
		}

		$file.on('change', function () {
			if (attrs.multiple) {
				callback(this.value.split(';'))
			} else {
				callback(this.value)
			}
		})

		$file.click()
	}


	/** options:
	 **     - multiple: false
	 **     - accept: ''
	 **     - workingDir: ''
	 ** callback: function(value)
	 *      - value: if multiple this is a array or a path value
	 */
	exports.openFile = function (options, callback) {
		options = $.extend({
			multiple: false,
			accept: ''
		}, options)
		options.nwworkingdir = options.workingDir || ''
		open(options, callback)
	}


	/** options: null
	 ** callback: function(path)
	 */
	exports.openDir = function (options, callback) {
		options = options || {}
		options.nwdirectory = true
		open(options, callback)
	}


	/** options:
	 **     - default: '' default file name
	 **     - accept: '' (will not alert a message to warn file-exist)
	 **     - workingDir: ''
	 */
	exports.openSaveAs = function (options, callback) {
		options = $.extend({
			accept: ''
		}, options)
		options.nwsaveas = options.default || true
		options.nwworkingdir = options.workingDir || ''
		open(options, callback)
	}


})