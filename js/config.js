function listConfigs($div) {
	$div.html("");
	$div.append('<h3>Configs</h3>');
	$div.append('<p>');
	$div.append('Autoexec:');
	$div.append('<br/>');
	$div.append('<a href="/playbook/config/autoexec.cfg">Download</a>');
	$div.append('<br/>');
	$div.append('<br/>');
	$div.append('Training:');
	$div.append('<br/>');
	$div.append('<a href="/playbook/config/trainingServer.cfg" download="trainingServer">Download</a');
	$div.append('<br/>');
	$div.append('<br/>');
	$div.append('rcon 1v1 (only use with rcon_password):');
	$div.append('<br/>');
	$div.append('<a href="/playbook/config/rcon_esl1on1aim.cfg" download="rcon_esl1on1aim">Download</a');
	$div.append('<br/>');
	$div.append('<br/>');
	$div.append('rcon 5v5 (only use with rcon_password):');
	$div.append('<br/>');
	$div.append('<a href="/playbook/config/rcon_esl5on5.cfg" download="rcon_esl5on5">Download</a');
	$div.append('<br/>');
	$div.append('<br/>');
	$div.append('rcon training (only use with rcon_password):');
	$div.append('<br/>');
	$div.append('<a href="/playbook/config/rcon_training.cfg" download="rcon_training">Download</a');
	$div.append('<br/>');
	$div.append('<br/>');
	
	$div.append('</p>');
	
	if(strat.getImgs().length > 0) {
		createStratCarousel($div, strat.getImgs());
	}
}

function setConfig() {
	listConfigs($("#mainSection"));
}