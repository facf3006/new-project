// <![CDATA[
var properties = { width:500,
                   height:500,
                   scrollbars:'yes',
                   resizable:'yes',
                   top: (window.innerHeight - 500) / 2,
                   left: (window.innerWidth - 500) / 2
                 };

function popup () {    
var link=this.getAttribute('href'); // Obtém o link de destino do link clicado.   
var prop_str=''; // Inicializa a string de propriedades para a nova janela.   
for (prop in properties) { // Itera sobre as propriedades definidas no objeto "properties".
prop_str=prop_str+prop+'='+properties[prop]+',';}  // Adiciona cada propriedade à string de propriedades.  
prop_str=prop_str.substr(0,prop_str.length-1); // Remove a vírgula final da string de propriedades.
    
 // Abre um link em uma nova janela com as propriedades definidas em prop_str.  
var newWindow=window.open(link,'_blank',prop_str);
    
 //verificação para ver se a janela foi aberta com sucesso   
if (newWindow) { 
    if (newWindow.focus){
    newWindow.focus(); // Foca na nova janela aberta.
    return false;}}// Retorna false para que o link não seja aberto na janela atual.  
    return true; }// Retorna true se a nova janela não for aberta com sucesso para que o link seja aberto na janela atual.

//função responsável por encontrar todos os links com o atributo rel definido como popup
function setupPopups () {
var links=document.getElementsByTagName ('a'); // Obtém todos os elementos "a" no documento.      
for (var i=0; i < links.length ;i++) { // Itera sobre cada link.
if (links[i].getAttribute('rel') && links[i].getAttribute('rel')=='popup') links[i].onclick=popup;}}// Verifica se o link tem o atributo "rel" definido como "popup" e Adiciona um manipulador de eventos para o evento "click" de cada link com "rel" igual a "popup".

window.onload=function () {
setupPopups();  }
//]]>
    
