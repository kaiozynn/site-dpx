const imageContainer = document.querySelectorAll('.image-container');
const nextButton = document.getElementById('butNext');
const prevButton = document.getElementById('butPrev');
const inputPhone = document.getElementById('telefone');
const formulario = document.getElementsByTagName('form')[0];
const locationCanditar = document.querySelector('.candidatar');
const locationPlayers = document.querySelector('.players');
const locationLogin = document.querySelector('.login')
var widthImage = imageContainer[0].clientWidth; //modifiquei de const para var pq é preciso reatribuir o valor

let state = {
  index: 0
};

// como pode acontecer do carrosel ser visto mudando a posição do mobile é preciso reatribuir novos valores ao widthImage para as imagens sempre se moverem no mesmo tamanho.

function vereficaModoTela() {
  if (window.innerWidth > window.innerHeight) {
    widthImage = imageContainer[0].clientWidth;
  } else {
    widthImage = imageContainer[0].clientWidth;
  }
};

window.addEventListener('resize', vereficaModoTela)

function next_slider() {
  state['index']++
  /**
 * !essa função é executada quando o usuário clica no botão e inicia incrementando +1 em state['index']
 */
  if (state['index'] > 6) { /**
    * !Apos o incremento feito, ela entra nessa parte onde ela irá validar se o state['index'] for maior que 6, caso seja ira zerar o index de state e chamar uma função.
    * * Ela moverImagensHidden() passando o valor zerado como padrão e resetando todos os transform translate. Após isso ela chama a função next_slider a partir de um setTimeout() pois assim ele move para a proxima imagem sem precisar do usuário clicar novamente no botão com isso o carrossel faz parecer que está infinito.
  */
    state['index'] = 0
    moverImagensHidden(state['index'])
    setTimeout(next_slider)
  } else {
    /**
     * !Caso o state['index'] não seja maior que 6 ele apenas chama a função que moverá todas as imagens de uma vez
     */
    nextMoveImagens(state['index'])
  }
};

function nextMoveImagens(index) {
  /**
   * ? Pode ser possivel melhorar esse código?
   * * Aqui basicamente ao ser chamado na função next_slider após a verificação da condição ser falsa, a função nextMoveImagens recebe o parâmentro state['index'], cria uma laço for que se repetirá ate o elemento "i" seja maior que imageContainer.length, esse laço move todas as imagens simultâneamente a partir do termo 'index' multiplicado pelo comprimento da imagem coletado na variável widthImage. Ele tambem deixa as imagens da direita e esquerda com um blur de 3px para passar a sensção de movimento e novidade.
   */
  for (let i = 0; i < imageContainer.length; i++) {
    imageContainer[i].style.transition = '0.5s ease-in-out';
    imageContainer[index].style.filter = 'blur(3px)';
    imageContainer[index + 1].style.filter = 'none';
    imageContainer[index + 2].style.filter = 'blur(3px)';
    imageContainer[i].style.transform = `translateX(${-index * widthImage}px)`;
  }
};

function moverImagensHidden(index) {
  /**
   * ! Essa função permite que as imagens se mova sem animação e como a configuração das imagens esta sendo feita de forma que quando volta paro o início das imagens pareça que ela nem saiu do lugar o usuário n precebe o carrossel se movendo.
   */
  for (let i = 0; i < imageContainer.length; i++) {
    imageContainer[i].style.transition = 'none';
    imageContainer[index].style.filter = 'blur(3px)'
    imageContainer[index + 1].style.filter = 'none'
    imageContainer[index + 2].style.filter = 'blur(3px)'
    imageContainer[i].style.transform = `translateX(${-index * widthImage}px)`;
  }
};

function prev_slider() {
  state['index'] = state['index'] - 1
  /**
   * * Essa função faz basicamente o que a next_slider, porem essa aqui decrementa do state['index] -1 fazendo com que o moviemnto essa da direita para esquerda
   */
  if (state['index'] <= -1) { 
    state['index'] = 6 /**
      * ! Aqui tambem ocorrerá uma validação pois se o index for menor ou igual a -1 ele passará como parametro para a moverImagensHidden o número 6, sendo assim como dito anteriormente movendo as imagens de forma invisível ao olho do usuário só q dessa vez ele move o carrossel para a direita.
    ** ele tambem executa um setTimeout(prev_slider) para dar a impressão que o carrossel se move infinitamente, pois a imagem vai para a ultima e um tempo depois é executado a prev_slider.
     */
    moverImagensHidden(state['index'])
    setTimeout(prev_slider)
  } else {
    /**
     * ! Caso o state['index'] não for menor igual a -1 ele apenas chama prevMoveImagens(state['index']) movendo as imagens para trás.
     */
    prevMoveImagens(state['index'])
  }
};

function prevMoveImagens(index) {
  /**
   * * Aqui ocorre o mesmo que em nextMoveImagens porem no caso é uma movimentação invertida
   */

  for (let i = 0; i < imageContainer.length; i++) {
    imageContainer[i].style.transition = '0.5s ease-in-out';
    imageContainer[index].style.filter = 'blur(3px)'
    imageContainer[index + 1].style.filter = 'none'
    imageContainer[index + 2].style.filter = 'blur(3px)'
    imageContainer[i].style.transform = `translateX(${-index * widthImage}px)`;
  }
};

//Abaixo são os eventos de click q realizam a chamada de função.

nextButton.addEventListener('click', next_slider);
prevButton.addEventListener('click', prev_slider);

inputPhone.addEventListener('keypress', () => {
  const teclaPressionada = event.key

  if (teclaPressionada === 'Backspace') {
    event.preventDefault()
  } else {
    adicionandoNumero()
  }
});

// formulário do telefone
function adicionandoNumero(){  if(telefone.value.length == 0) {
  telefone.value += '(' + telefone.value
} else if (telefone.value.length == 3) {
  telefone.value += ') '
} else if (telefone.value.length == 10) {
  telefone.value += '-'
}};

//área que limpa o formulário pós envio
formulario.addEventListener('submit', function() {
  formulario.reset()
});

//Funções que permitem abrir outras páginas apartir dos cards.

function candidatar() {
  window.open('candidatar/index.html', '_self')
};

locationCanditar.addEventListener('click', candidatar);

function players() {
  window.open('http//127.0.0.1/site-dpx/players/', "_self")
};

locationPlayers.addEventListener('click', players);

function login() {
  window.open('http//127.0.0.1/site-dpx/login/', '_self')
};

locationLogin.addEventListener('click', login)