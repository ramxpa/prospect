var prospect =  prospect || {};

/**
 * Boolean to check if the panel is currently shown
 */
prospect = {
	isVisible : false
};

/**
 * The main detector function. Confirms the presence of the analytics
 * or testing tool by regexing the script tag source and looking in
 * the window objects.
 */
prospect.detect = function () {
	var tools_ = {};

	var scripts = document.getElementsByTagName("script");
	var scriptTag = {
		'ATG Recommendations': /atgsvcs.js/i,
		'ATG Optimization': /estara.com\/as\/InitiateCall2.php/i,
	    'Baynote': /baynote/i,
	    'Certona Resonance': /res-x.com|resxcls[ax][0-9a-z_]*.js|resonance5050.js/i,
	    'Demandware': /demandware/i,
	    'Google Analytics': /google-analytics.com\/(ga|urchin).js/i,
	    'Google Website Optimizer': /google-analytics.com\/siteopt.js/i,
	    'Kissmetrics': /kissmetrics/i,
	    'Liveball': /liveball_api.js/i,
	    'Marketo': /munchkin.marketo.net/i,
	    'Maxymiser': /maxymiser/i,
	    'Monetate': /b.monetate.net/i,
	    'Mixpanel': /mixpanel/i,
	    'Microsoft Atlas': /roiservice|atdmt.com/i,
	    'Mybuys': /mybuys/i,
	    'Optimizely': /optimizely/i,
	    'Optimost': /optimost/i,
	    'Rich Relevance': /richrelevance/i,
	    'Steel House Media': /steelhousemedia.com/i,
	    'Tellapart': /tellapart/i,
	    'Test & Target' : /mbox.js/i,
	    'Webtrends Optimize' : /optimize.webtrends/i,
	    'Yahoo Web Analytics': /ywa.js/i
	};

	for (var tag in scripts) {
		var s = scripts[tag];
		if (!s.src) continue;
		s = s.src;

		for (var t in scriptTag)
		{
			if (t in tools_) continue;
			if (scriptTag[t].test(s))
			{
				tools_[t] = true;
			}
		}
	}

	var windowObjects = {
		'Amadesa': function() {
			return window.AmManager != null;
		},
		'ATG Recommendations': function() {
			return window.ATGSvcs != null;
		},
		'Coremetrics': function() {
			return window.cmCreatePageviewTag != null;
		},
		'Kissmetrics': function() {
			return window.KM != null;
		},
		'Liveball': function() {
			return window._lbapi_lb3id != null;
		},
		'Microsoft Atlas': function() {
			return window.ROIID != null;
		},
		'Optimost': function() {
			return window.optimost != null;
		},
		'Rich Relevance': function() {
			return window.rr_v != null;
		},
		'Sitespect': function() {
			return window.SS != null;
		},
		'Sitecatalyst': function() {
			return window.s_account != null;
		},
		'Tellapart': function() {
			return window.TellApartCrumb != null;
		},
		'Test & Target': function() {
			return window.mbox != null;
		},
		'VisualWebOptimizer': function() {
			return window.vwo_$ != null;
		},
		'Webtrends Optimize': function() {
			return window.WTOptimize != null;
		},
		'Webtrends': function() {
			return window.WebTrends != null;
		},
		'Yahoo Web Analytics': function() {
			return window.YWA != null;
		}

	};

	for (t in windowObjects) {
		if (t in tools_) continue;
		if (windowObjects[t]())
		{
			tools_[t] = true;
		}
	}

	prospect.testingTools = tools_;
	prospect.jsonString = JSON.stringify(tools_);
	console.log(prospect.testingTools);
	console.log(prospect.jsonString);

}();
