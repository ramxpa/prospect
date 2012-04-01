
var detectedTools = window.prospect || {};

detectedTools.insertProspectContainer = function() {
	var bodyTag = document.getElementsByTagName('body')[0];
	var leftOffset = document.body.offsetWidth - 320 + "px";
	if (bodyTag) {
		var containerDiv = document.createElement('div');
		bodyTag.appendChild(containerDiv);
		containerDiv.id = 'prospect-container';

		var prospectPanel = document.createElement('div');
		if (containerDiv) {
			containerDiv.appendChild(prospectPanel);
			prospectPanel.id = 'prospect-panel';
			prospectPanel.style.left = leftOffset;
		}

		var currentUrl = (window.location.hostname).replace(/^www\./,'');
		detectedTools.renderStaticText();
		detectedTools.addHeader(prospectPanel);
		detectedTools.addBooleanIndicator();
		detectedTools.addLinkedinButton(currentUrl);
		detectedTools.addJigsawButton(currentUrl);
		detectedTools.addCompeteGraph(currentUrl);
		detectedTools.addCloseButton();
		detectedTools.addNoresultsText(prospectPanel);
		detectedTools.isVisible = true;
	}
};

detectedTools.renderStaticText = function () {
	var prospectPanel = document.getElementById('prospect-panel');
	if (prospectPanel) {
		/*
		 * This is insanse! Use mustache.
		 */
		prospectPanel.innerHTML = "<div class = 'prospect-tools'>" +
		"<div class = 'prospect-innerheader'>Testing & Targeting</div>"+
		"<ul class = 'testing-tools'>"+
		"<li>Amadesa</li>" +
		"<li>ATG Optimization</li>" +
		"<li>Google Website Optimizer</li>" +
		"<li>Maxymiser</li>" +
		"<li>Monetate</li>" +
		"<li>Optimizely</li>" +
		"<li>Optimost</li>" +
		"<li>Sitespect</li>" +
		"<li>Test & Target</li>" +
		"<li>Visual Web Optimizer</li>" +
		"<li>Webtrends Optimize</li>" +
		"</ul>"+
		"<div class = 'prospect-innerheader'>Product Recommendations</div>" +
		"<ul class = 'reco-tools'>"+
		"<li>ATG Recommendations</li>" +
		"<li>Certona Resonance</li>" +
		"<li>Baynote</li>" +
		"<li>Liveball</li>" +
		"<li>Mybuys</li>" +
		"<li>Rich Relevance</li>" +
		"<li>Steel House Media</li>" +
		"<li>Strands Recommender</li>" +
		"<li>Tellapart</li>" +
		"<li>Think Realtime</li>" +
		"</ul>" +
		"<div class = 'prospect-innerheader'>Analytics</div>" +
		"<ul class = 'analytics-tools'>"+
		"<li>Coremetrics</li>" +
		"<li>Demandware</li>" +
		"<li>Google Analytics</li>" +
		"<li>Kissmetrics</li>" +
		"<li>Marketo</li>" +
		"<li>Microsoft Atlas</li>" +
		"<li>Mixpanel</li>" +
		"<li>Sitecatalyst</li>" +
		"<li>Webtrends</li>" +
		"<li>Yahoo Web Analytics</li>" +
		"</ul>"+
		"<div class = 'prospect-innerheader'>Connect</div>"+
		"</div>";
	}
};

detectedTools.addBooleanIndicator = function () {
	var prospectPanel = document.getElementById('prospect-panel');
	if (prospectPanel) {
		var toolsLi = prospectPanel.getElementsByTagName('li');
		for (var i = 0 ; i < toolsLi.length; i++) {
			var allTools = detectedTools.testingTools;
			var toolsText = toolsLi[i].innerText;
			if (allTools.hasOwnProperty(toolsText)) {
				toolsLi[i].className = 'tool-present';
			}
			else {
				toolsLi[i].className = 'tool-absent';
			}

		}
	}
};


detectedTools.addCompeteGraph= function(currentUrl) {
	if (currentUrl) {
		var competeGraphSrc = "https://grapher.compete.com/"+currentUrl+"_uv_310.png";
		var prospectPanel = document.getElementById('prospect-panel');
		if (prospectPanel) {
			var competeGraphContainer = document.createElement('div');
			competeGraphContainer.className = "compete-graph";
			competeGraphContainer.innerHTML = "<div class = 'prospect-innerheader'>Traffic Information</div>";
			var competeGraph = document.createElement('img');
			prospectPanel.appendChild(competeGraphContainer);
			competeGraphContainer.appendChild(competeGraph);
			competeGraph.src = competeGraphSrc;
		}
	}
};



detectedTools.addLinkedinButton = function(currentUrl) {
	if (currentUrl) {
		var companyName = currentUrl.match(/.*(?=\.\w+)/)[0];
		var linkedinUrl = "http://www.linkedin.com/search/fpsearch?company&keywords="+companyName;
		var prospectPanel = document.getElementById('prospect-panel');
		if (prospectPanel) {
			var linkedinButton = document.createElement('a');
			linkedinButton.href = linkedinUrl;
			linkedinButton.innerText = "Linkedin";
			linkedinButton.className = "prospect-linkedin-button";
			linkedinButton.target = "_blank";
			prospectPanel.appendChild(linkedinButton);
		}
	}
};

detectedTools.addJigsawButton = function(currentUrl) {
	if (currentUrl) {
		var jigsawUrl = "http://www.jigsaw.com/FreeTextSearch.xhtml?opCode=search&freeText="+currentUrl;
		var prospectPanel = document.getElementById('prospect-panel');
		if (prospectPanel) {
			var jigsawButton = document.createElement('a');
			jigsawButton.href = jigsawUrl;
			jigsawButton.innerText = "Jigsaw";
			jigsawButton.className = "prospect-jigsaw-button";
			jigsawButton.target = "_blank";
			prospectPanel.appendChild(jigsawButton);
		}
	}
};

detectedTools.addCloseButton = function() {
	var prospectPanel = document.getElementById('prospect-panel');
	if (prospectPanel) {
		var closeButtonContainer = document.createElement('div');
		closeButtonContainer.className = "prospect-panel-close";
		prospectPanel.appendChild(closeButtonContainer);
		closeButtonContainer.addEventListener('click', function() {
			prospectPanel.style.display = 'none';
		});
	}
};

detectedTools.addHeader = function(prospectPanel) {
	var headerDiv = document.createElement('div');
	prospectPanel.appendChild(headerDiv);
	headerDiv.innerHTML = "<span class = 'header-text'>Monetate Prospect</span>";
	headerDiv.className = 'prospect-header';
};


detectedTools.addNoresultsText = function(prospectPanel) {
	var toolsUl = prospectPanel.getElementsByTagName('ul');
	for (var i = 0; i < toolsUl.length; i ++) {
		var liCounter = toolsUl[i].getElementsByClassName('tool-present');
		if (!liCounter.length) {
			var noResultsLi = document.createElement('li');
			noResultsLi.innerText = "None";
			noResultsLi.className = 'no-results';
			toolsUl[i].appendChild(noResultsLi);
		}
	}
};


detectedTools.init = function () {
	if (!detectedTools.isVisible) {
		detectedTools.insertProspectContainer();
	} else {
		var prospectPanel = document.getElementById('prospect-panel');
		if (prospectPanel) {
			prospectPanel.style.display = 'block';
		}
	}
}();
