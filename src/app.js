(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "witsec-white-label",
        events: {
            load: function() {
                var a = this;
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["witsec-white-label"] || "";

					if (c) {
						b = b.replace(/<meta name=['"]?generator['"]?.+>/img, '')
						b = b.replace(/<!-- Site made with.+-->/img, '')
						b = b.replace(/<section.*class=['"]?engine['"]?[\s\S]*?<\/section>/img, '')
						b = b.replace(/alt="Mobirise"/img, 'alt=""')
					}

					return b
				});
                a.addFilter("additionalPageSettings", function(b) {
					var c = a.projectSettings["witsec-white-label"] || "";
					return b + [
							'<hr />',
							'<div class="form-group row clearfix">',
							'  <label class="col-md-3 control-label">White Label</label>',
							'  <div class="togglebutton col-md-8">',
							'    <label style="width: 100%;">',
							'      <input type="checkbox" id="site-settings-witsec-white-label" name="witsec-white-label" ' + ("" != c ? "checked" : "") + '>',
							'      <span class="toggle" style="margin-top: -6px;"></span>', 
							'    </label>',
							'  </div>',
							'  <div class="col-md-1" style="font-size:10px" data-toggle="tooltip" data-placement="top" title="White label your website by removing references to Mobirise in the source code.">witsec&nbsp;</div>',
							'</div>'
							].join("\n")
                });
				a.$body.on("change", "#site-settings-witsec-white-label", function() {
                    jQuery(this).prop("checked") ? (a.projectSettings["witsec-white-label"]="on") : (a.projectSettings["witsec-white-label"]="")
                })
            }
        }
    })
})(jQuery, mbrApp);