define(function (require, exports) {
	var fileDialog = require('index')

	exports.init = function () {
		$('.openFile').click(function () {
			fileDialog.openFile({}, function (path) {
				alert(path)
			})
		})

		$('.openFile2').click(function () {
			fileDialog.openFile({
				multiple: true
			}, function (paths) {
				alert(paths)
			})
		})

		$('.openFile3').click(function () {
			fileDialog.openFile({
				accept: '.md,.js'
			}, function (path) {
				alert(path)
			})
		})

		$('.openFile4').click(function () {
			fileDialog.openFile({
				workingDir: 'c:\\'
			}, function (path) {
				alert(path)
			})
		})


		$('.openDir').click(function () {
			fileDialog.openDir({}, function (path) {
				alert(path)
			})
		})


		$('.openSaveAs').click(function () {
			fileDialog.openSaveAs({}, function (path) {
				alert(path)
			})
		})

		$('.openSaveAs2').click(function () {
			fileDialog.openSaveAs({accept: '.md'}, function (path) {
				alert(path)
			})
		})

		$('.openSaveAs3').click(function () {
			fileDialog.openSaveAs({default: 'default.file'}, function (path) {
				alert(path)
			})
		})

		$('.openSaveAs4').click(function () {
			fileDialog.openSaveAs({workingDir: 'c:\\'}, function (path) {
				alert(path)
			})
		})

	}
})