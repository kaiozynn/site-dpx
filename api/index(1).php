<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Candidate-se aqui</title>
  <link rel="stylesheet" href="estilo/mobile-first-candidatar.css" media="screen and (max-width: 600px)">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <link rel="shortcut icon" href="../imagens/favicon.ico" type="image/x-icon">
</head>

<body>
  <header>
    <nav>
      <button class="btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions">
        <i class="material-symbols-outlined">menu</i>
      </button>
      <div class="offcanvas offcanvas-start" data-bs-scroll="false" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <button type="button" class="but" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="material-symbols-outlined">close</i>
          </button>
        </div>
        <div class="offcanvas-body">
          <!-- Aqui vai os botões de interações -->
          <ul>
            <li>
              <i class="material-symbols-outlined">login</i>
              <button class="login" id="log">Login</button>
            </li>
            <li>
              <i class="material-symbols-outlined">face</i>
              <button class="players" id="play">Conhecer Players</button>
            </li>
          </ul>
          <ul>
            <li>
              <i class="material-symbols-outlined">Home</i>
              <button class="candidatar" id="candi">Home</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="container-form">
      <form action="candidatar-player.php" method="post" autocomplete="off" target="_blank">
        <div class="candidato">
          <label for="nick">
            <i class="material-symbols-outlined">badge</i>
          </label>
          <input type="text" name="nick" id="nick" placeholder="Seu nick" required>
        </div>
        <?php 
        ?>
        <div class="elos">
          <label for="elo">
            <i class="material-symbols-outlined">star_rate</i>
          </label>
          <select name="elo" id="elo" required>
            <option disabled selected style="display: none;">Seu elo</option>
            <option value="epico">Épico</option>
            <option value="lenda">Lenda</option>
            <option value="mitico">Mítico</option>
            <option value="glMitica">Gloria Mítica</option>
            <option value="imortal">Imortal</option>
          </select>
        </div>

        <div class="hero">
          <label for="mains">
            <i class="material-symbols-outlined">heart_plus</i>
          </label>
          <input type="text" name="mains" id="mains" placeholder="Seus mains" required>
          <button>
            <i class="material-symbols-outlined">add</i>
          </button>
        </div>

        <div class="idGame">
          <label for="i/dPlayer">
            <i class="material-symbols-outlined">tag</i>
          </label>
          <input type="number" name="idPlayer" id="idPlayer" placeholder="Seu id do jogo" required>
        </div>

        <div class="contatoEmail">
          <label for="contEmail">
            <i class="material-symbols-outlined">mail</i>
          </label>
          <input type="text" name="contEmail" id="contEmail" placeholder="Email para contato" required>
        </div>
        <input type="submit" value="Candidatar-se">
        <input type="reset" value="Limpar">
      </form>
    </div>
  </main>
</body>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</html>