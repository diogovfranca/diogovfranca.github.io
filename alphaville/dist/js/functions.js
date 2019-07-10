function openModal(item) {

	var link = '';

	switch(item) {
		case 1:
			link = 'https://meutour360.com.br/tour-360/bjalpha-entrada-de-alunos';
			break;
		case 2:
			link = 'https://meutour360.com.br/tour-360/bjalpha-patio-coberto-1';
			break;
		case 3:
			link = 'https://meutour360.com.br/tour-360/bjalpha-refeitorio';
			break;
		case 4:
			link = 'https://meutour360.com.br/tour-360/bjalpha-area-de-convivencia-bosque';
			break;
		case 5:
			link = 'https://meutour360.com.br/tour-360/bjalpha-bosque';
			break;
		case 6:
			link = 'https://meutour360.com.br/tour-360/bjalpha-nap-room';
			break;
		case 7:
			link = 'https://meutour360.com.br/tour-360/bjalpha-biblioteca';
			break;
		case 8:
			link = 'https://my.matterport.com/show/?m=rscz6PCDpLY';
			break;
		case 9:
			link = 'https://my.matterport.com/show/?m=JgsS8WLDW32';
			break;
		case 10:
			link = 'https://meutour360.com.br/tour-360/bjalpha-area-de-convivencia';
			break;
		case 11:
			link = 'https://meutour360.com.br/tour-360/bjalpha-ambulatorio';
			break;
		case 12:
			link = 'https://meutour360.com.br/tour-360/bjalpha-informatica';
			break;
		case 13:
			link = 'https://my.matterport.com/show/?m=nbWE635SK2f';
			break;
		case 14:
			link = 'https://meutour360.com.br/tour-360/bjalpha-playground';
			break;
		case 15:
			link = 'https://meutour360.com.br/tour-360/bjalpha-cozinha-experimental';
			break;
		case 16:
			link = 'https://meutour360.com.br/tour-360/bjalpha-musica';
			break;
		case 17:
			link = 'https://meutour360.com.br/tour-360/bjalpha-tiny-town';
			break;
		case 18:
			link = 'https://meutour360.com.br/tour-360/bjalpha-sportscenter';
			break;
		case 19:
			link = 'https://meutour360.com.br/tour-360/bjalpha-quadra-coberta';
			break;		
		default:
			link = '';
			break;
	}

	var left = (screen.width/2)-(600/2);
  	var top = (screen.height/2)-(400/2);

	window.open(link,"Titulo","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600,height=400, top="+top+", left="+left+"");

}