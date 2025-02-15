function CheckAll() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, { checked: true });
	});
}

document.getElementById("check_button").addEventListener("click", CheckAll);

document.getElementById("preview_text").addEventListener("click", (e) => {
	e.preventDefault();
	const txt = document.getElementById("output");
	txt.classList.toggle("hidden");
});

function SendText(e) {
	e.preventDefault();
	const outputTextarea = document.getElementById("output");
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, { text: outputTextarea.innerText });
	});
}

document.getElementById("copy_button").addEventListener("click", SendText);

HTMLCollection.prototype.forEach = Array.prototype.forEach;
HTMLOptionsCollection.prototype.find = Array.prototype.find;

const json = [
	{
		tool: "",
		name: "SD-LWD-Survey Quality",
		guideline: "10469",
		lv1: "%fullname% can describe survey utility and demonstrated the difference between full and short survey, and each elements of them. %pronoum% can describe the main differences between long and short collar surveys and when to use them and describe step-by-step how to take a survey. %firstname% can differenciate pumps up, pumps down, pumps off surveys, rotational and benchmark surveys.",
		lv2: "%fullname% knows what to deliver to the client and describe well colision and our hole on it. %firstname% described the role of survey management and how to run basic SAG corrections. %pronoum% knows what errors can indicate a well colision and how to procedure on this cases. %firstname% comprehends the importance of survey quality and the value provided to the customer. Also, %pronoum% knows the steps to get a full survey and perform a basic QC check on it and verify inputs and outputs data from the MagUTM program.",
		lv3: "%fullname% described typical issues that can be identified in the surveys, the different scenarios when to take surveys and how to perform survey quality validation without error.",
	},
	{
		tool: "",
		name: "SD-LWD-Insite Application",
		guideline: "10467",
		lv1: "%fullname% understands the applications, file structure, interfaces, and user in-puts of the InSite database. %pronoum% also knows the purpose of reporting and the basic reporting requirements. %firstname% showed the set-up, load, and export of data in Insite and generating reports. %pronoum% understands the purpose and application of the Depth App in Insite and the steps to setup a network.",
		lv2: "%fullname% understands the steps required to generate plots from saved templates and she listed the various displays available in InSite. %pronoum% demonstrated how to modify saved plot templates and displays, to show data from different wells or runs. %firstname% knows the required user inputs from the job information packet. %pronoum% also demonstrated how to perform depth sensor calibrations in Insite and how to prepare an Insite Database network.",
		lv3: "%fullname% demonstrated the troubleshooting steps required to edit, manage and repair the Database. %pronoum% also demonstrated how to use Insite to generate reports without error and he comprehends where to locate the latest updates to Insite.",
	},
	{
		tool: "Basestar",
		name: "SD-LWD-BaseStar",
		guideline: "11810",
		lv1: "%fullname% was assessed about HSE topics when working with the tool, explaining hazards and how to conduct JSA. %pronoum% also described all aspects when handling, transporting and conducting emergency response with a Battery. %firstname% explained and demonstrated an excellent management when is navigating in the Sperry Web, Docutracks and Operational Manuals. %firstname% has been acting as Shop Engineer during BaseStar tests, demonstrating knowledge and skills to perform pre/post run test, configuration, initialization, real time testing (pulsing) and read tool. %pronoum% also describes all steps when run a directional probe on the job site and the process when taking a survey. %pronoum% explained how to qualify a survey, how to use MagUTM and how to analyze a survey through QC plots. %pronoum% demonstrated comprehension of steps required to prepare and operate Geo-Span. He knows how to perform rip-up/rig-down, configure and operate the Geo-Span as per process and comprehends /explains how to diagnose possible errors and faults when operating the Geospan.",
		lv2: "%fullname% has been assigned in most of the jobs with BaseStar tool and is acting as lead hand on the rigsite. %firstname% explained theory of the BaseStar tool, identified sensors and tool components of the tool, describe communications protocols, status and battery components, memory capabilities and status and why the tool is important according to our local needs and customer requirements.   While performing activities as shop engineer and preparing tool on rigsite, %pronoum% demonstrated how to perform all pre run test, tool configuration, software set-up, environmental parameters and explained how to analyze indicators to determine success of pre run testing and tool run. %firstname% defined and explained Tare Process as per manual operations, explained when re-tired is required and demonstrate how to use tare Manager. %pronoum% understands and explain basic principles of PWD, hydrostatic offset for PWD measurements, PWD responses, downlink parameters and troubleshooting via mode switch and downlink. Also, describes Caliper function on the BaseStar tool and demonstrate how to process record data, generate images and explains tool's response according as observed on the logs.  %firstname% knows how to analyze indicators to determine success of pre run testing and tool run, describe faults/tool errors based on the results shown in the associated logs/reports. Explain LQC plots according to curve responses. %firstname% is leader of LWD jobs were demonstrated deeply knowledge and skills of directional and survey quality competency. %pronoum% knows and demonstrate how to get a survey, how to qualify and perform QC checks, he knows the functionality/use of the MAGUTM program. %pronoum% has not been involved in Directional failures and coached a less experienced employee %trainee%.",
		lv3: "",
	},
	{
		tool: "",
		name: "SD-LWD-Depth System - Fixed Rig",
		guideline: "10468",
		lv1: "%fullname% demonstrated comprehension of the main components and locate the listed procedures for setting up the Depth System on a Fixed Rig. %pronoum% also demonstrated comprehension of the method used to calibrate and operate the Depth System set up on a Fixed Rig. %firstname% performed the calibration, setting up, and operation of the Depth System in a simulated environment.",
		lv2: "%fullname% demonstrated comprehension of the importance of correct calibration of the components in the Depth System on a Fixed Rig. %pronoum% knows how to analyze indicators to determine success of calibration, setting up, and operation of the Depth System and how to perform Depth System operation as per process.",
		lv3: "%fullname% comprehends typical Depth System component errors and where to locate latest updates for Depth Control (procedural etc.). %firstname% also coached a less experienced trainee %trainee%.",
	},
	{
		tool: "",
		name: "SD-LWD-Depth System - Floating Rig",
		guideline: "10470",
		lv1: "%fullname% demonstrated comprehension of the main components and locate the listed procedures for setting up the Depth System on a Floating Rig. %pronoum% also demonstrated comprehension of the method used to calibrate and operate the Depth System set up on a Floating Rig. %firstname% performed the calibration, setting up, and operation of the Depth System in a simulated environment.",
		lv2: "%fullname% demonstrated comprehension of the importance of correct calibration of the components in the Depth System on a Floating Rig. %pronoum% knows how to analyze indicators to determine success of calibration, setting up, and operation of the Depth System and how to perform Depth System operation as per process.",
		lv3: "%fullname% comprehends typical Depth System component errors and where to locate latest updates for Depth Control (procedural etc.). %firstname% also coached a less experienced trainee %trainee%.",
	},
	{
		tool: "DDSr",
		name: "SD-LWD-Drilling Efficiency - DDSR",
		guideline: "10356",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "PWD",
		name: "SD-LWD-Drilling Efficiency - PWD",
		guideline: "10359",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "SVSS",
		name: "SD-LWD-Drilling Efficiency - SVSS",
		guideline: "10347",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "GeoTap",
		name: "SD-LWD-Formation Sampling - GeoTap",
		guideline: "10344",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "AGR",
		name: "SD-LWD-Gamma - AGR",
		guideline: "10361",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "DGR",
		name: "SD-LWD-Gamma - DGR  ",
		guideline: "10362",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "PCG",
		name: "SD-LWD-Gamma - PCG",
		guideline: "10349",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "HCIM",
		name: "SD-LWD-HCIM",
		guideline: "10466",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "ALD",
		name: "SD-LWD-Porosity - ALD",
		guideline: "10357",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "XBAT",
		name: "SD-LWD-Porosity - XBAT",
		guideline: "10352",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "CTN",
		name: "SD-LWD-Porosity - CTN",
		guideline: "10360",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "",
		name: "SD-LWD-Directional Probe",
		guideline: "10358",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the Directional Probe. %pronoum% also demonstrated comprehension of the purpose of a Tool Face Offset. %pronoum% performed the different pre run tests and tool operation on Directional Probe in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and functionality of the Directional Probe. %pronoum% knows how to perform Directional Probe operation as per process and analyzes indicators to determine success of pre run testing and tool run.",
		lv3: "%fullname% described typical well conditions that cause tool failure, performed Directional Probe operations as per process without failure and comprehends where to locate latest updates to the tool (tool software/procedure updates etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "MRIL",
		name: "SD-LWD-Porosity - MRIL",
		guideline: "10351",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "ADR",
		name: "SD-LWD-Resistivity - ADR",
		guideline: "10354",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "AFR",
		name: "SD-LWD-Resistivity - AFR",
		guideline: "10346",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "EWR-M5",
		name: "SD-LWD-Resistivity - EWR-M5",
		guideline: "10355",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "EWR-P4",
		name: "SD-LWD-Resistivity - EWR-P4",
		guideline: "10353",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "EarthStar",
		name: "SD-LWD-Resistivity - EarthStar",
		guideline: "11616",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "",
		name: "SD-LWD-Telemetry - Geo-Span",
		guideline: "10471",
		lv1: "%fullname% demostrated comprehension of concepts and the theory applied of Geo-Span. %pronoum% showed where to find related information about the tool on HMS, also demostrate the safety procedures when operating with Geo-span. %firstname% explained the concepts of quality parameters to analyze the downlinks.",
		lv2: "%fullname% operate the tool by procedures, executing tests performed before operation. %pronoum% performed rig up and rig down of the Geo-span unit. %pronoum% also generate reports and showed compreension to select nozzle size for the job.",
		lv3: "%fullname% demonstrated comprehension of steps required to prepare and operate Geo-Span. %pronoum% demonstrated that knows how to perform Geo-Span as per process and comprehends where to locate latest updates for Geo-Span (procedural etc.). He also coached a less experienced employee %trainee% on Geo-Span.",
	},
	{
		tool: "",
		name: "SD-LWD-Telemetry - P4M",
		guideline: "10363",
		lv1: "%fullname% can test and assembly a positive pulse. %pronoum% can set up a P4M real time detection as on rig jobs and in a simulated environment.",
		lv2: "%fullname% explained the nature of the job funcionality of positive pulse. %pronoum% can run positive pulse on PPM decoding as per processes. %firstname% is able to determine success of tool funcionality and troubleshoot it when not working properly.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform P4M operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.).",
	},
	{
		tool: "",
		name: "SD-LWD-Telemetry - Positive Pulse Manchester",
		guideline: "10350",
		lv1: "%fullname% can test and assembly a positive pulse. %pronoum% can set up a P4M real time detection as on rig jobs and in a simulated environment.",
		lv2: "%fullname% explained the nature of the job funcionality of positive pulse. %pronoum% can run positive pulse on PPM decoding as per processes. %firstname% is able to determine success of tool funcionality and troubleshoot it when not working properly.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform P4M operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.).",
	},
	{
		tool: "iCruise",
		name: "SD-LWD-iCruise Field Operations",
		guideline: "11560",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
	{
		tool: "EM",
		name: "SD-LWD-Telemetry - EM",
		guideline: "10348",
		lv1: "%fullname% demonstrated comprehension of steps required to prepare and operate the %tool% Tool and to do QC its Data. Also, %pronoum% performed the different pre run tests and tool operation on %tool% tool in a simulated environment.",
		lv2: "%fullname% explained the nature of the job and how the %tool% tool provides value. %pronoum% knows how to analyze indicators to determine success of pre run testing and tool run and performs %tool% Tool operation as per process.",
		lv3: "%fullname% described typical well conditions that cause tool failure and how to perform %tool% Tool operation as per process without failure. %pronoum% comprehends where to locate latest updates to the tool (tool software/procedural etc.). %firstname% also trained a less experienced employee %trainee%.",
	},
];

document.addEventListener("DOMContentLoaded", async () => {
	const date = document.getElementById("date");
	const location = document.getElementById("location");
	const competencySelect = document.getElementById("competency-name");
	const copyButton = document.getElementById("copy-button");
	const outputTextarea = document.getElementById("output");
	const levels = document.querySelectorAll('input[name="level"]');
	const form = document.getElementById("evaluation-form");
	// Copy text to clipboard
	outputTextarea.addEventListener("click", () => {
		const textToCopy = document.getElementById("output");

		const range = document.createRange();
		range.selectNodeContents(textToCopy);

		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);

		try {
			document.execCommand("copy");
			alert("Copied to clipboard !");
		} catch (err) {
			alert("Fail during copy !");
		}

		selection.removeAllRanges();
	});

	document.getElementsByTagName("input").forEach((el) => {
		el.value = localStorage.getItem(el.name);

		el.addEventListener("change", (e) => {
			//chrome.storage.local.set(el.name);

			localStorage.setItem(el.name, e.target.value);
		});
	});

	document.getElementsByTagName("select").forEach((el) => {
		el.value = localStorage.getItem(el.name);

		el.addEventListener("change", (e) => {
			localStorage.setItem(el.name, e.target.value);
		});
	});

	location.value = "Macaé, BR";
	const header = `I confirm that in accordance with the Assessment Guideline, I assessed the employee on all listed items. See details:\nType of Assessment: %type%\nDates: %date%\nLocation: %location%\nAssessment Method(s):\nQuestioning, Records and Review work products\nTraceable Evidence (if required by AG): %jobnumbers%.`;

	const footer = `All items of Assessment Guideline GD-GL-HAL-SD-AG-%competency-number% (%competency-name%) were reviewed.\nAll records are located on Brazil - Brazil - Dados MLWD - All Documents (sharepoint.com).`;

	json.forEach((item) => {
		const option = document.createElement("option");
		option.value = item.name;
		option.textContent = item.name;
		option.selected = localStorage.getItem("competency-name") === item.name;
		competencySelect.appendChild(option);
	});

	function getTrainee() {
		var name = document.getElementById("trainee-name").value;
		var sap = document.getElementById("trainee-sap").value;
		return name ? `(${name} ${sap ? `SAP - ${sap}` : ""})` : "";
	}

	function process() {
		const selected = competencySelect.options.find((i) => i.selected);
		const selectedCompetency = json.find((item) => item.name === selected.value);

		const jobNumbers = [document.getElementById("job-number-1").value, document.getElementById("job-number-2").value, document.getElementById("job-number-3").value, document.getElementById("job-number-4").value].join(", ");

		const placeholders = {
			"%type%": "<span class='highlight'>" + document.getElementById("evaluation-type").value + "</span>",
			"%date%": "<span class='highlight'>" + document.getElementById("date").value + "</span>",
			"%pronoum%": "<span class='highlight'>" + document.getElementById("pronoum").value + "</span>",
			"%fullname%": "<span class='highlight'>" + document.getElementById("operator-name").value + "</span>",
			"%firstname%": "<span class='highlight'>" + document.getElementById("operator-name").value.split(" ")[0] + "</span>",
			"%location%": "<span class='highlight'>" + document.getElementById("location").value + "</span>",
			"%jobnumbers%": "<span class='highlight'>" + jobNumbers + "</span>",
			"%competency-number%": selectedCompetency ? "<span class='highlight'>" + selectedCompetency.guideline + "</span>" : "",
			"%competency-name%": "<span class='highlight'>" + competencySelect.value + "</span>",
			"%tool%": selectedCompetency.tool ? "<span class='highlight'>" + selectedCompetency.tool + "</span>" : "",
			"%trainee%": "<span class='highlight'>" + getTrainee() + "</span>",
		};

		let levelsText = "";

		levels.forEach((level, i) => {
			if (level.checked && selectedCompetency[`lv${i + 1}`]) {
				levelsText += "Level " + (i + 1) + ": " + selectedCompetency[`lv${i + 1}`] + "\n\n";
			}
		});

		let output = header + "\n\n" + levelsText + "\n" + footer;

		for (const [placeholder, value] of Object.entries(placeholders)) {
			output = output.replace(new RegExp(placeholder, "g"), value);
		}

		outputTextarea.innerHTML = output.trim();
	}

	// Generate the output text
	form.addEventListener("change", () => {
		process();
	});

	process();
});
