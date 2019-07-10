function openModal(item) {

	var link = '';

	switch(item) {
		case 1:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-acesso-inf-e-fund-1';
			break;
		case 2:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-acesso-fundamental-2';
			break;
		case 3:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quadras-esportivas';
			break;
		case 4:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-piscina';
			break;
		case 5:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-laboratorio-ciencias';
			break;
		case 6:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-biblioteca';
			break;
		case 7:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-sala-hip-hop';
			break;
		case 8:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quadras-esportivas-2';
			break;
		case 9:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-campo-fut-americano';
			break;
		case 10:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-trilha-ecologica';
			break;
		case 11:
			link = 'https://my.matterport.com/show/?m=e7iEe8anz4X';
			break;
		case 12:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-convivencia';
			break;
		case 13:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-ponte-suspensa';
			break;
		case 14:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-patio-coberto';
			break;
		case 15:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-administrativo';
			break;
		case 16:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quadras-cobertas';
			break;
		case 17:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quiosque';
			break;
		case 18:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-jardineira';
			break;
		case 19:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-refeitorio-fund-2';
			break;
		case 20:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quadras-esportivas-3';
			break;
		case 21:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-quadra-coberta';
			break;
		case 22:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-refeitorio-inf-e-fund1';
			break;
		case 23:
			link = 'https://my.matterport.com/show/?m=L5QSUCrKiPr';
			//'https://my.matterport.com/show/?m=hJ9F9vtLii3';
			break;
		case 24:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-ballet';
			break;
		case 25:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-judo';
			break;
		case 26:
			link = 'https://my.matterport.com/show/?m=ncERF5Ci9pr';
			break;
		case 27:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-playground';
			break;
		case 28:
			link = 'https://meutour360.com.br/tour-360/bjaldeia-espaco-sao-francisco';
			break;
		default:
			link = '';
			break;
	}

	var left = (screen.width/2)-(600/2);
  	var top = (screen.height/2)-(400/2);

	window.open(link,"Titulo","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600,height=400, top="+top+", left="+left+"");

}