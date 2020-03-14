defineM("witsec-white-label", function(g, mbrApp, tr) {
    mbrApp.regExtension({
        name: "witsec-white-label",
        events: {
            load: function() {
				var a = this;
				
				// On publish, remove references to Mobirise
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["witsec-white-label"] || false;

					if (c) {
						b = b.replace(/<meta name=['"]?generator['"]?.+>/img, '')
						b = b.replace(/<!-- Site made with.+-->/img, '')
						b = b.replace(/<section.*class=['"]?engine['"]?[\s\S]*?<\/section>/img, '')
						b = b.replace(/alt="Mobirise"/img, 'alt=""')
						b = b.replace(/(<body.*>)/igm, "$1\n\n<section id='top-1'></section>\n\n");
					}

					return b
				});

				// Add site settings
				a.addFilter("sidebarProjectSettings",function(b){
					var wl = a.projectSettings["witsec-white-label"] || "";

					var c = {
						title:"witsec",
						name:"witsec-site-settings",
						html:[
							'<div class="form-group col-md-12">',
							'  <div class="row">',
							'    <label for="witsec-white-label" class="control-label col">White Label</label>',
							'    <div class="togglebutton col-auto">',
							'      <label>',
							'        <input type="checkbox" name="witsec-white-label" id="witsec-white-label" ' + (wl ? "checked" : "") + '>',
							'        <span class="toggle" style="margin:0;"></span>',
							'      </label>',
							'    </div>',
							'  </div>',
							'</div>'
						].join("\n")
					};
					b.push(c);
					return b
				});

				// Respond to enabling/disabling white label
				mbrApp.$body.on("change", "#witsec-white-label", function() {
					if (!$("#witsec-white-label").prop("checked")) {
						a.projectSettings["witsec-white-label"] = false;
					}
				});
			}
        }
    })
}, ["jQuery", "mbrApp", "TR()"]);