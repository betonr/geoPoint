# Localizando um ponto
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
  * ex: localhost:4000/api/LINESTRING(-5612216.31036159 -2483779.77237868,-5586392.59640211 -2477356.89795182)/10/100/60
  
## Resultado
Retorna um array em um arquivo Json, com as coordenadas do ponto e o erro.
  - erro = null => não possui erros
  - point = null => ocorreu algum erro, que estará descrito no indice "error" do array,
  
{
  "point":"-5597869.802606323 -2480211.508808202",
  "error":null
}
