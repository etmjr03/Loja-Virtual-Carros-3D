# Visualizador-3D
Um site que permite visualizar os carros em 3D

Tecnologia utilizada: model-viewer, um recurso que permite visualizar imagens em 3D/AR

Propriedades do Model-Viewer
- ar: oferece na versão mobile um visualizador da imagem em <strong>realidade aumentada<strong>.
- ar-modes: aqui você pode adicionar valores que oferecem opções de visualização em <strong>AR</strong>.
- ar-scale: utiliza os valores <strong>auto</strong> = possibilida dar zoom e <strong>fixed</strong> = não possibilita dar o zoom com o intuito de manter o produto em seu tamanho original.
- ar-placement: possui os valores <storng>floor</strong> = item ser visualizado no chão e <strong>wall</strong> = item ser visualizado na parede.
- src: modelo que será exibido em 3D na web, extensão utilizada é .glb.
- ios-src: modelo de imagem que será exibida em celulares IOS, extensão utilizada é .usdz
- poster: icone da imagem que será carregada antes de clicar para abrir o visualizador 3d.
- shadow-intensity: intensidade da sombra, seu valor vai de 0 até 1.
- reveal: maneira que será carregado o modelo 3d, o valor <strong>auto</strong>já carrega direto, mas o <strong>interaction</strong> precisa de uma interação para ser carregado.
- camera-controls: libera os controles da câmera.
- auto-rotate: após iniciar o modelo 3D ele irá rotacionar em seu eixo.
- disable-zoom: desabilita o zoom no modelo 3D com o mouse.
- slot: adiciona função de AR somente em versão mobile, usa como valor ar-button para atribuir para um botão.
