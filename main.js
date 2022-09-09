import './style.scss'
import RenderYoutube from "./js/app/RenderYoutube/VideoRender.js";
import RegulamentoPopup from "./js/app/Regulamento/RegulamentoPopup.js";
import FormValidate from "./js/app/RegisterSorteio/FormValidate"
import ShowPopup from './js/app/ShowPopup/ShowPopup';
import ScrollToArchor from './js/app/ScrollToArchor/ScrollToArchor'


$(document).ready( function(){
  new RenderYoutube();
  new RegulamentoPopup();
  new FormValidate();
  new ShowPopup();  
  new ScrollToArchor(); 
})










