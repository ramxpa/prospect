
var detectedTools = window.prospect || {};

detectedTools.insertProspectContainer = function() {
	var bodyTag = document.getElementsByTagName('body')[0];
	var leftOffset = document.body.offsetWidth - 320 + "px";
	console.log("leftOffset", leftOffset);
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
		detectedTools.addFooter(prospectPanel);
		detectedTools.addBooleanIndicator();
		detectedTools.addLinkedinButton(currentUrl);
		detectedTools.addJigsawButton(currentUrl);
		detectedTools.addCompeteGraph(currentUrl);
		detectedTools.addCloseButton();
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
		"<div class = 'prospect-innerheader'>Testing Tools</div>"+
		"<ul class = 'testing-tools'>"+
		"<li>Amadesa</li>" +
		"<li>ATG Recommendations</li>" +
		"<li>ATG Optimization</li>" +
		"<li>Certona Resonance</li>" +
		"<li>Baynote</li>" +
		"<li>Google Website Optimizer</li>" +
		"<li>Liveball</li>" +
		"<li>Maxymiser</li>" +
		"<li>Monetate</li>" +
		"<li>Mybuys</li>" +
		"<li>Optimizely</li>" +
		"<li>Optimost</li>" +
		"<li>Rich Relevance</li>" +
		"<li>Steel House Media</li>" +
		"<li>Sitespect</li>" +
		"<li>Tellapart</li>" +
		"<li>Test & Target</li>" +
		"<li>Visual Web Optimizer</li>" +
		"<li>Webtrends Optimize</li>" +
		"</ul>"+
		"<div class = 'prospect-innerheader'>Analytics Tools</div>"+
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
			console.log('close clicked');
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

detectedTools.addFooter = function(prospectPanel) {
	var footerDiv = document.createElement('div');
	prospectPanel.appendChild(footerDiv);
	footerDiv.className = 'prospect-footer';
};


detectedTools.init = function () {
	if (!detectedTools.isVisible) {
		console.log('from display', detectedTools);
		detectedTools.insertProspectContainer();
	} else {
		var prospectPanel = document.getElementById('prospect-panel');
		if (prospectPanel) {
			prospectPanel.style.display = 'block';
		}
	}
}();


