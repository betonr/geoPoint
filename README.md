# Encontrando um ponto
API para encontar as coordenadas de um ponto em uma linha, através de uma numeração. 
Desenvolvida em nodeJs e express.

## Aplicação
Aplicavél geralmente na area de geocodificação de endereços.
Onde faz-se necessário encontra um determinado ponto(número) dentro de uma linha(rua).

## Modo de uso
  - faça o clone do repositorio;
  - levante o servidor node, com: $ nodejs app;
  - acesse o navegador informando a url com o paramentros;
  
    -- <strong>servidor/api/geometria/numero_inicial_rua/numero_final_rua/numero_desejado</strong>
  * ex: localhost:4000/LINESTRING(-5612216.31036159 -2483779.77237868,-5586392.59640211 -2477356.89795182)/10/100/60
  
  
