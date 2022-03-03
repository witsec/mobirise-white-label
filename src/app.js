defineM("witsec-white-label", function(g, mbrApp, tr) {
    mbrApp.regExtension({
        name: "witsec-white-label",
        events: {
            load: function() {
				var a = this;
				
				// On publish, remove (most) references to Mobirise
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["witsec-white-label"] || false;

					if (c) {
						b = b.replace(/<meta name=['"]?generator['"]?.+>/img, '')
						b = b.replace(/<!-- Site made with.+-->/img, '')
						b = b.replace(/<section.*class=['"]?engine['"]?[\s\S]*?<\/section>/img, '')
						b = b.replace(/alt="Mobirise"/img, 'alt=""')
						b = b.replace(/<section style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; color:#aaa; font-size:12px; padding: 0; align-items: center; display: flex;">.*?<\/section>/img, '');
						b = b.replace(/<section style="background-color: #fff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; color:#aaa; font-size:12px; padding: 0; align-items: center; display: flex;">.*?<\/section>/img, '<section id="top-1" hidden><a href="https://mobirise.site"></a></section>');
						b = b.replace(/<section class="display-7" style="padding: 0;align-items: center;justify-content: center;flex-wrap: wrap;    align-content: center;display: flex;position: relative;height: 4rem;">(.*?)<\/section>/img, '<section><a href="https://mobiri.se"></a><a href="https://mobiri.se"></a></section>');
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