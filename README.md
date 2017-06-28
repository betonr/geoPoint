# Localizando um ponto
API para encontar as coordenadas de um ponto em uma linha, através de uma numeração. 
Desenvolvida em nodeJs e express.

## Aplicação
Aplicavél geralmente na area de geocodificação de endereços.
Onde faz-se necessário encontra um determinado ponto(número) dentro de uma linha(rua).

## Modo de uso
  - faça o clone do repositorio;
  - instale as dependências, com: npm install, dentro do repositorio;
  - levante o servidor node, com: $ nodejs app;
  - acesse o navegador informando a url com o paramentros via POST(json);
  
    -- <strong>servidor/api/</strong>
  * ex: localhost:4000/api/
  
  json : {
    'geometry': 'LINESTRING(-5612216.31036159 -2483779.77237868,-5586392.59640211 -2477356.89795182)',
    'nf': 10, 
    'nl': 100,
    'number': 60
   }
   
   *lengend: 
            nf -> numbero inicial da rua
            ni -> numero final da rua
            number -> numero desejado, para encontrar o ponto
  
## Resultado
Retorna um array em um arquivo Json, com as coordenadas do ponto e o erro.
  - erro = null => não possui erros
  - point = null => ocorreu algum erro, que estará descrito no indice "error" do array,
  
{
  "point":"-5597869.802606323 -2480211.508808202",
  "error":null
}
